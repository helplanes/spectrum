import { createClient } from "@/app/utils/supabase/server";
import { NextResponse } from "next/server";

interface TeamRegistration {
  teams: {
    id: string;
    registrations: Array<{
      id: string;
      registration_status: string;
    }> | null;
  };
}

export const revalidate = 0; // Disable cache

export async function GET(request: Request) {
  try {
    const supabase = await createClient();
    const { searchParams } = new URL(request.url);
    const eventId = searchParams.get('eventId');

    if (!eventId) {
      return NextResponse.json({ error: "Event ID is required" }, { status: 400 });
    }

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get profile with payment info
    const { data: profile } = await supabase
      .from('profiles')
      .select('*, payments(status, amount)')
      .eq('id', user.id)
      .single();

    // Check team registration status
    const { data: teamMember } = await supabase
      .from('team_members')
      .select(`
        *,
        teams!inner(
          id,
          leader_id,
          payments(status, amount)
        )
      `)
      .eq('member_id', user.id)
      .eq('teams.event_id', eventId)
      .single();

    return NextResponse.json({
      isRegistered: false, // Will be true if found in registrations
      type: teamMember ? 'team' : null,
      teamId: teamMember?.teams?.id || null,
      isLeader: teamMember?.teams?.leader_id === user.id,
      profile: {
        is_pccoe_student: profile?.is_pccoe_student || false,
        // Add other profile fields as needed
      },
      payment: {
        required: !profile?.is_pccoe_student,
        status: teamMember?.teams?.payments?.[0]?.status || 'pending'
      }
    });

  } catch (error: any) {
    console.error("Error checking registration status:", error);
    return NextResponse.json(
      { error: "Failed to check registration status" },
      { status: 500 }
    );
  }
}
