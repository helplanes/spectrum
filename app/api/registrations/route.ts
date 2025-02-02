import { createClient } from "@/app/utils/supabase/server";
import { NextResponse } from "next/server";
import { slugify } from "@/app/utils/slugify";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const eventSlug = searchParams.get("name");

    if (!eventSlug) {
      return NextResponse.json({ error: "Event name is required" }, { status: 400 });
    }

    const supabase = await createClient();
    const { data: events, error } = await supabase
      .from("events")
      .select("*");

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Find the event by comparing slugified names
    const event = events.find(e => slugify(e.name) === eventSlug);

    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    return NextResponse.json(event);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" }, 
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const { eventId, type, teamId } = await request.json();

    // Get current user
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // For team registrations, verify payment if leader is non-PCCOE
    if (type === 'team' && teamId) {
      // First get the team with leader and payment details
      const { data: team } = await supabase
        .from('teams')
        .select(`
          *,
          leader:profiles!teams_leader_id_fkey(
            id,
            is_pccoe_student
          ),
          payments(
            id,
            amount,
            status
          )
        `)
        .eq('id', teamId)
        .single();

      if (!team) {
        return NextResponse.json({ error: "Team not found" }, { status: 404 });
      }

      // Get accepted team members count
      const { count: memberCount } = await supabase
        .from('team_members')
        .select('*', { count: 'exact' })
        .eq('team_id', teamId)
        .eq('invitation_status', 'accepted');

      if (!memberCount) {
        return NextResponse.json({ 
          error: "No team members found" 
        }, { status: 400 });
      }

      // If leader is non-PCCOE, verify payment
      if (!team.leader.is_pccoe_student) {
        const requiredAmount = memberCount * 100; // ₹100 per member

        // Get latest successful payment
        const { data: payment } = await supabase
          .from('payments')
          .select('*')
          .eq('team_id', teamId)
          .eq('status', 'success')
          .order('created_at', { ascending: false })
          .limit(1)
          .single();

        if (!payment) {
          return NextResponse.json({ 
            error: "Payment required",
            requiredAmount,
            message: `Payment of ₹${requiredAmount} required for team registration`
          }, { status: 400 });
        }

        if (payment.amount < requiredAmount) {
          return NextResponse.json({ 
            error: "Insufficient payment",
            requiredAmount,
            paidAmount: payment.amount,
            message: `Additional payment of ₹${requiredAmount - payment.amount} required`
          }, { status: 400 });
        }
      }

      // Create registration
      const registration = {
        event_id: eventId,
        team_id: teamId,
        registration_status: 'confirmed',
        payment_status: team.leader.is_pccoe_student ? 'not_required' : 'success'
      };

      const { error: regError } = await supabase
        .from('registrations')
        .insert(registration);

      if (regError) throw regError;

      return NextResponse.json({ success: true });
    }

    // Handle solo registration
    const registration = {
      event_id: eventId,
      registration_status: 'confirmed',
      payment_status: 'success', // Add payment status
      individual_id: user.id
    };

    const { error } = await supabase
      .from('registrations')
      .insert(registration);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to register" },
      { status: 500 }
    );
  }
}