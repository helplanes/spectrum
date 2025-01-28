'use client';

import { useEffect, useState } from 'react';
import { Breadcrumbs } from "@/app/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Link from 'next/link';
import { EventDetails, RegistrationStatus, TeamMember } from '@/app/types/events';
import { Badge } from '@/components/ui/badge';
import { Loader2 } from 'lucide-react';

interface Registration {
  id: string;
  event: EventDetails;
  type: 'solo' | 'team';
  status: RegistrationStatus;
  team?: {
    id: string;
    name: string;
    members: TeamMember[];
    isLeader: boolean;
  };
}

export default function RegistrationsPage() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      const response = await fetch('/api/registrations/active');
      if (!response.ok) throw new Error('Failed to fetch registrations');
      const data = await response.json();
      setRegistrations(data.registrations);
    } catch (error: any) {
      toast.error("Failed to load registrations", {
        description: error.message || "Please try again later"
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#EBE9E0] p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          items={[
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Events', href: '/dashboard/events' },
            { label: 'Registrations' },
          ]}
          className="mb-6"
        />

        <div className="p-2 sm:p-4 border-4 border-dashed border-gray-300 rounded-[2rem]">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-2">Your Registrations</h1>
              <p className="text-gray-600 mb-6">
                Manage and view your event registrations and team details
              </p>

              {registrations.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No Active Registrations
                  </h3>
                  <p className="text-gray-600 mb-6">
                    You haven&apos;t registered for any events yet.
                  </p>
                  <Link href="/dashboard/events">
                    <Button>
                      Browse Events
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="grid gap-6">
                  {registrations.map((reg) => (
                    <Card key={reg.id} className="border-2">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl mb-1">
                              {reg.event.name}
                            </CardTitle>
                            <CardDescription>
                              {reg.event.description}
                            </CardDescription>
                          </div>
                          <Badge
                            className={
                              reg.status === 'confirmed' 
                                ? 'bg-green-100 text-green-800'
                                : reg.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }
                          >
                            {reg.status ? reg.status.charAt(0).toUpperCase() + reg.status.slice(1) : 'Unknown'}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold mb-2">
                              Registration Type
                            </h4>
                            <p className="text-gray-600">
                              {reg.type === 'solo' ? 'Individual Event' : 'Team Event'}
                            </p>
                          </div>

                          {reg.team && (
                            <div>
                              <h4 className="text-sm font-semibold mb-2">
                                Team Details
                                {reg.team.isLeader && (
                                  <Badge className="ml-2 bg-blue-100 text-blue-800">
                                    Team Leader
                                  </Badge>
                                )}
                              </h4>
                              <div className="bg-gray-50 rounded-lg p-4">
                                <p className="font-medium mb-3">
                                  {reg.team.name}
                                </p>
                                <div className="space-y-2">
                                  {reg.team.members
                                    .filter(member => member.status === 'accepted')
                                    .map((member, idx) => (
                                    <div
                                      key={member.id || idx}
                                      className="flex items-center justify-between text-sm p-2 bg-white rounded"
                                    >
                                      <div className="flex items-center gap-2">
                                        <span className="text-green-600">●</span>
                                        <div className="flex flex-col">
                                          <span className="font-medium">{member.email}</span>
                                          {member.name && (
                                            <span className="text-xs text-gray-500">
                                              {member.name}
                                            </span>
                                          )}
                                        </div>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        {member.isRegistered && (
                                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                            Registered
                                          </span>
                                        )}
                                        <Badge className="bg-green-100 text-green-800">
                                          Accepted
                                        </Badge>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          <div className="flex gap-4 pt-4">
                            {reg.status === 'confirmed' && (
                              <Link href={`/dashboard/certificates/${reg.id}`}>
                                <Button>
                                  View Certificate
                                </Button>
                              </Link>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
