import Link from "next/link";
import { slugify } from "@/app/utils/slugify";
import { Breadcrumbs } from "@/app/components/breadcrumbs";
import { fetchApi } from "@/app/utils/api";

interface Event {
  id: number;
  name: string;
  event_type: string;
  min_team_size: number;
  max_team_size: number;
  registration_start: string;
  registration_end: string;
  description?: string;
  is_active: boolean;
}

async function getEvents(): Promise<Event[]> {
  const res = await fetchApi('/api/events', {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error(`Failed to fetch events (${res.status})`);
  }
  
  return res.json();
}

export default async function EventsPage() {
  const events = await getEvents();

  if (!events?.length) {
    return <div className="text-center p-8">No events found</div>;
  }

  return (
    <main className="min-h-screen bg-[#EBE9E0] p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="p-2 sm:p-4 border-4 border-dashed border-gray-300 rounded-3xl">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden relative">
            {/* Dots for ticket effect */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-[#EBE9E0] rounded-r-full"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-[#EBE9E0] rounded-l-full"></div>

            <div className="p-6 sm:p-8">
              <Breadcrumbs
                items={[
                  { label: 'Dashboard', href: '/dashboard' },
                  { label: 'Events' },
                ]}
              />
              
              <h1 className="text-3xl font-bold mb-8">All Events</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event: Event) => (
                  <Link 
                    key={event.id} 
                    href={`/dashboard/events/${slugify(event.name)}`}
                    className="block"
                  >
                    <div className="bg-[#EBE9E0] rounded-lg shadow hover:shadow-lg transition-shadow p-6">
                      <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
              
                      <div className="text-sm text-gray-600 space-y-2">
                        <p className="capitalize">Type: {event.event_type.replace('_', ' ')}</p>
                        
                        <p>Team Size: {
                          event.min_team_size === event.max_team_size
                            ? event.min_team_size
                            : `${event.min_team_size} - ${event.max_team_size}`
                        } members</p>
                        
                        <p>Registration: {new Date(event.registration_start).toLocaleDateString()} - {new Date(event.registration_end).toLocaleDateString()}</p>
                        
                        {event.description && (
                          <p className="line-clamp-2">{event.description}</p>
                        )}
                      </div>
                      
                      <div className="mt-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          event.is_active 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {event.is_active ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
