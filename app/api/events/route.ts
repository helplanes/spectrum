import { createClient } from "@/app/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const supabase = await createClient();
    
    // Fetch events without requiring authentication
    const { data: events, error } = await supabase
      .from("events")
      .select("*")
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json(
        { error: error.message }, 
        { status: 500 }
      );
    }

    return NextResponse.json(events || []);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch events" }, 
      { status: 500 }
    );
  }
}
