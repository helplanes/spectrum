import { createClient } from "@/app/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const supabase = await createClient();
    
    // Exchange the code for a session
    await supabase.auth.exchangeCodeForSession(code);
    
    // Redirect to dashboard
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // If no code, redirect to login
  return NextResponse.redirect(new URL('/login', request.url));
}
