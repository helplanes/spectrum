import { createClient } from "@/app/utils/supabase/server";
import { Breadcrumbs } from "@/app/components/breadcrumbs";
import { LoadingState } from "./components/loading-state";
import { EmptyState } from "./components/empty-state";
import { EventList } from "./components/event-list";

export const revalidate = 60;

export default async function EventsPage() {
  const supabase = await createClient();
  
  try {
    const { data: events, error } = await supabase
      .from("events")
      .select(`
        id,
        name,
        description,
        event_type,
        min_team_size,
        max_team_size,
        registration_start,
        registration_end,
        event_start,
        event_end,
        max_registrations,
        is_active,
        img_url,
        whatsapp_url,
        created_at,
        updated_at
      `)
      .eq('is_active', true)
      .gte('registration_end', new Date().toISOString())
      .order('event_start', { ascending: true });
    
    if (error) throw error;

    if (!events?.length) {
      return <EmptyState />;
    }

    return (
      <main className="min-h-screen bg-[#EBE9E0] overflow-auto">
        <div className="w-full max-w-screen-xl mx-auto p-4 sm:px-6 lg:p-8">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Dashboard', href: '/dashboard' },
              { label: 'Events' },
            ]}
            className="mb-6"
          />
          <EventList events={events} />
        </div>
      </main>
    );
  } catch (error) {
    return <LoadingState />;
  }
}
