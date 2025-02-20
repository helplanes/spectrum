'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { Breadcrumbs } from "@/app/components/breadcrumbs";
import { toast } from "sonner";
import { Pencil, Mail, Phone, GraduationCap, LogOut, ChevronRight } from "lucide-react";
import { CompleteProfilePopup } from '@/components/CompleteProfilePopup';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { AlertCircle } from "lucide-react";

// Add COLLEGE_OPTIONS constant
const COLLEGE_OPTIONS = {
  pccoe: "Pimpri Chinchwad College of Engineering, Pune",
  pccoer: "Pimpri Chinchwad College of Engineering & Research, Ravet",
  pcu: "Pimpri Chinchwad University",
  nutan: "Nutan Maharashtra Institute of Engineering & Technology, Pune",
  nmit: "Nutan College of Engineering & Research (NCER)",
  ait: "Army Institute of Technology",
  aissms: "All India Shri Shivaji Memorial Society's College of Engineering",
  bvp: "Bharati Vidyapeeth College of Engineering",
  coep: "College of Engineering Pune",
  cummins: "Cummins College of Engineering",
  dyp: "Dr. D.Y. Patil Institute of Technology, Akurdi",
  iiit: "Indian Institute of Information Technology, Pune",
  jspm: "JSPM's Rajarshi Shahu College of Engineering",
  mit: "MIT World Peace University (MIT-WPU)",
  mit_adt: "MIT Art, Design and Technology University",
  pict: "SCTR'S Pune Institute of Computer Technology",
  pvg: "PVG's College of Engineering and Technology",
  scoe: "Sinhgad College of Engineering",
  sit_lavle: "Symbiosis Institute of Technology, Lavle",
  viit: "BRACT's, Vishwakarma Institute of Information Technology",
  vit: "Vishwakarma Institute of Technology",
} as const;

export default function DashboardPage() {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/user');
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch user data');
        }
        
        setUserData(data);
        setError(null);
      } catch (err: any) {
        console.error('Error fetching user data:', err);
        setError(err.message);
        toast.error("Failed to load user data", {
          description: err.message || "Please try again later",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const refreshUserData = async () => {
    try {
      const response = await fetch('/api/user');
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch user data');
      }
      
      setUserData(data);
      setError(null);
    } catch (error: any) {
      console.error('Failed to refresh user data:', error);
      toast.error("Failed to refresh data", {
        description: "Your changes may not be reflected. Please refresh the page.",
      });
    }
  };

  // Helper to check required profile details
  const isProfileComplete = (profile: any) => {
    return profile && profile.full_name && profile.email && profile.phone &&
      profile.college_name && profile.prn && profile.branch &&
      profile.class && profile.gender;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#EBE9E0] p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb skeleton */}
          <div className="h-6 w-32 bg-gray-200 rounded mb-6 animate-pulse" />
          
          {/* Quick Action Cards skeleton */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-sm">
                <div className="h-6 w-24 bg-gray-200 rounded mb-2 animate-pulse" />
                <div className="h-4 w-full bg-gray-100 rounded mb-4 animate-pulse" />
                <div className="h-9 w-full bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>

          {/* Main card skeleton */}
          <div className="p-2 sm:p-4 border-4 border-dashed border-gray-300 rounded-3xl">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden relative p-4 sm:p-6 lg:p-8">
              <div className="mb-6">
                <div className="h-8 w-64 bg-gray-200 rounded mb-2 animate-pulse" />
                <div className="h-4 w-48 bg-gray-100 rounded animate-pulse" />
              </div>
              
              {/* Tabs skeleton */}
              <div className="border-b mb-4">
                <div className="flex gap-4 mb-[-2px]">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-10 w-24 bg-gray-200 rounded animate-pulse" />
                  ))}
                </div>
              </div>
              
              {/* Content skeleton */}
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-16 w-full bg-gray-100 rounded animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !userData) {
    return (
      <div className="min-h-screen bg-[#EBE9E0] flex items-center justify-center p-4">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4">Welcome to Dashboard</h1>
          <p className="mb-6 text-gray-600">Please log in to access your dashboard</p>
          <Link href="/login">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Log in
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const { profile } = userData;

  const handleSignOut = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      toast.loading("Signing out...");
      const response = await fetch('/api/auth/signout', {
        method: 'POST',
      });
      if (response.ok) {
        toast.success("Successfully signed out");
        router.push('/');
      } else {
        throw new Error('Failed to sign out');
      }
    } catch (error) {
      toast.error("Failed to sign out", {
        description: "Please try again",
      });
      console.error('Sign out error:', error);
    }
  };

  return (
    <main className="min-h-screen bg-[#EBE9E0]">
      <TooltipProvider>
        <div className="w-full max-w-screen-xl mx-auto p-4 sm:px-6 lg:p-8">
          {/* Remove the extra padding/margin adjustments */}
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Dashboard' },
            ]}
            className="mb-6"
          />

          {/* Enhanced User Profile Header with improved styling */}
          <div className="relative mb-8 sm:mb-10 mt-2">
            {/* Background pattern */}
            <div className="absolute inset-0 -m-2 sm:-m-4">
              <div className="w-full h-full border-4 border-dashed border-gray-300/70 rounded-3xl" />
            </div>

            {/* Card container with improved shadow */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-950/5 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 sm:w-4 h-6 sm:h-8 bg-[#EBE9E0] rounded-r-full" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 sm:w-4 h-6 sm:h-8 bg-[#EBE9E0] rounded-l-full" />
                
                <div className="p-5 sm:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    {/* Profile Info */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                          {profile?.full_name || 'Anonymous User'}
                        </h1>
                        {!profile?.full_name && (
                          <Tooltip>
                            <TooltipTrigger>
                              <AlertCircle className="h-5 w-5 text-amber-500" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Please complete your profile</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-gray-400 shrink-0" />
                          <Tooltip>
                            <TooltipTrigger className="max-w-[300px] truncate text-left">
                              <span className="text-sm sm:text-base text-gray-600">
                                {profile?.email || 'Email not provided'}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{profile?.email || 'Email not provided'}</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gray-400 shrink-0" />
                          {profile?.phone ? (
                            <span className="text-sm sm:text-base text-gray-600">
                              {profile.phone}
                            </span>
                          ) : (
                            <span className="text-sm sm:text-base text-gray-400 italic">
                              Phone number not added
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="pt-1 flex items-center gap-2 w-full pr-4">
                        <GraduationCap className="h-4 w-4 text-blue-500 shrink-0" />
                        {profile?.college_name ? (
                          <Tooltip>
                            <TooltipTrigger className="w-full truncate text-left">
                              <p className="text-sm sm:text-base font-medium text-blue-600">
                                {Object.values(COLLEGE_OPTIONS).includes(profile.college_name)
                                  ? profile.college_name
                                  : `${profile.college_name} (Other)`}
                              </p>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{profile.college_name}</p>
                            </TooltipContent>
                          </Tooltip>
                        ) : (
                          <span className="text-sm sm:text-base text-gray-400 italic">
                            College not specified
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => router.push('/dashboard/profile/edit')}
                        className={`h-9 transition-colors duration-200 group w-full sm:w-auto
                          ${!isProfileComplete(profile) 
                            ? 'bg-amber-50 hover:bg-amber-100 text-amber-600 hover:text-amber-700 border-amber-200 hover:border-amber-300'
                            : 'bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700 border-blue-200 hover:border-blue-300'
                          }`}
                      >
                        <Pencil className="h-4 w-4 mr-2 shrink-0" />
                        <span>{!isProfileComplete(profile) ? 'Complete Profile' : 'Edit Profile'}</span>
                        <ChevronRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                      </Button>
                      <form onSubmit={handleSignOut} className="flex-1 sm:flex-initial">
                        <Button 
                          type="submit" 
                          variant="outline"
                          size="sm"
                          className="h-9 px-4 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 border border-red-200 hover:border-red-300 transition-colors duration-200 w-full sm:w-auto"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          <span>Sign out</span>
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Rest of the content */}
          <div className="space-y-6">
            {/* Quick Actions Grid - adjusted spacing */}
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white/80 backdrop-blur p-6 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h2 className="font-semibold text-lg mb-2">Events</h2>
                <p className="text-sm text-gray-600 mb-4">View and manage available events.</p>
                <Button
                  variant="outline"
                  className="w-full bg-purple-50 hover:bg-purple-100 border-purple-200"
                  onClick={() => router.push('/dashboard/events')}
                >
                  View Events
                </Button>
              </div>
              <div className="bg-white/80 backdrop-blur p-6 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h2 className="font-semibold text-lg mb-2">Check Registration</h2>
                <p className="text-sm text-gray-600 mb-4">View or verify active registrations.</p>
                <Button
                  variant="outline"
                  className="w-full bg-blue-50 hover:bg-blue-100 border-blue-200"
                  onClick={() => router.push('/dashboard/events/registrations')}
                >
                  View Registrations
                </Button>
              </div>
              <div className="bg-white/80 backdrop-blur p-6 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h2 className="font-semibold text-lg mb-2">Accept Invites</h2>
                <p className="text-sm text-gray-600 mb-4">Review and accept pending invitations.</p>
                <Button
                  variant="outline"
                  className="w-full bg-green-50 hover:bg-green-100 border-green-200"
                  onClick={() => router.push('/dashboard/events/accept')}
                >
                  Manage Invites
                </Button>
              </div>
            </div>

            {/* Payment Card - adjusted spacing */}
            <div className="my-6">
              <div className="bg-white/80 backdrop-blur p-6 sm:p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold text-lg">Payments</h2>
                    <p className="text-sm text-gray-600">View and manage your payments</p>
                  </div>
                  <Button
                    variant="outline"
                    className="bg-orange-50 hover:bg-orange-100 border-orange-200"
                    onClick={() => router.push('/dashboard/events/payment')}
                  >
                    Manage Payments
                  </Button>
                </div>
              </div>
            </div>

            {/* Info Box - Updated message */}
            <div className="mt-12">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-4 md:p-5 mt-4 sm:mt-6 mx-4 sm:mx-0">
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-xs sm:text-sm text-yellow-800 leading-relaxed">
                    Thank you for using our platform. To ensure the best possible experience:
                  </p>
                  <div className="space-y-3 sm:space-y-2 mt-2">
                    <div className="text-xs sm:text-sm text-yellow-800">
                      <p className="font-medium mb-1">• For Queries, payment issues, or other concerns:</p>
                      <a href="mailto:pccoe.spectrum.25@gmail.com" 
                        className="block pl-3 font-medium text-yellow-700 hover:text-yellow-900 break-all">
                        pccoe.spectrum.25@gmail.com
                      </a>
                    </div>
                    <div className="text-xs sm:text-sm text-yellow-800">
                      <p className="font-medium mb-1">• For Website, or data-related bugs:</p>
                      <a href="mailto:kartik.kulloli23@pccoepune.org" 
                        className="block pl-3 font-medium text-yellow-700 hover:text-yellow-900 break-all">
                        kartik.kulloli23@pccoepune.org
                      </a>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-yellow-800 italic mt-3 sm:mt-2">
                    For critical bugs or security vulnerabilities, please report them immediately with [COOKED] in the title.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Render global popup if profile is incomplete */}
          {!isProfileComplete(profile) && (
            <CompleteProfilePopup 
              profile={profile} 
              onProfileUpdate={() => {
                refreshUserData();
              }} 
            />
          )}
        </div>
      </TooltipProvider>
    </main>
  );
}