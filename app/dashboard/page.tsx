'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { Breadcrumbs } from "@/app/components/breadcrumbs";
import { toast } from "sonner";
import { Loader2, Pencil, X } from "lucide-react";
import { ProfileForm } from "./components/profile-form";
import { ProfileView } from "./components/profile-view";

export default function DashboardPage() {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user');
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Failed to fetch user data');
        }
        const data = await response.json();
        setUserData(data);
      } catch (err: any) {
        toast.error("Failed to load user data", {
          description: err.message || "Please try again later",
        });
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const refreshUserData = async () => {
    try {
      const response = await fetch('/api/user');
      if (!response.ok) throw new Error('Failed to fetch user data');
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Failed to refresh user data:', error);
    }
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
    <main className="min-h-screen bg-[#EBE9E0] p-2 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Dashboard' },
          ]}
          className="mb-6"
        />
        
        {/* Quick Action Cards */}
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4 sm:mb-6">
          <div className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
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
          <div className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
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
          <div className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
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

        <div className="p-1 sm:p-4 border-4 border-dashed border-gray-300 rounded-3xl">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden relative">
            {/* Dots for ticket effect */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 sm:w-4 h-6 sm:h-8 bg-[#EBE9E0] rounded-r-full"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 sm:w-4 h-6 sm:h-8 bg-[#EBE9E0] rounded-l-full"></div>

            <div className="p-3 sm:p-6 lg:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                    Welcome back, {profile?.full_name || 'User'}!
                  </h1>
                  <p className="text-gray-600 text-sm sm:text-base mt-2">
                    Manage your profile and check your event registrations
                  </p>
                </div>
                {isEditing ? (
                  <Button
                    onClick={() => setIsEditing(false)}
                    variant="outline"
                    size="default"
                    className="shrink-0 w-full sm:w-auto py-6 sm:py-2 text-base sm:text-sm text-red-500 hover:text-red-600 border-red-200 hover:border-red-300 hover:bg-red-50/50 transition-all duration-200"
                  >
                    <X className="h-4 w-4 mr-2" />
                    <span className="font-medium">Close Editor</span>
                  </Button>
                ) : (
                  <Button
                    onClick={() => setIsEditing(true)}
                    variant="outline"
                    size="default"
                    className="shrink-0 w-full sm:w-auto py-6 sm:py-2 text-base sm:text-sm text-green-600 hover:text-green-700 border-green-200 hover:border-green-300 hover:bg-green-50/50 transition-all duration-200"
                  >
                    <Pencil className="h-4 w-4 mr-2" />
                    <span className="font-medium">Edit Profile</span>
                  </Button>
                )}
              </div>

              <div className="space-y-6">
                {isEditing ? (
                  <ProfileForm 
                    profile={userData.profile} 
                    onUpdate={() => {
                      refreshUserData();
                      setIsEditing(false);
                    }} 
                  />
                ) : (
                  <ProfileView 
                    profile={userData.profile} 
                    onEditClick={() => setIsEditing(true)}
                  />
                )}
              </div>

              <div className="mt-6 border-t pt-6">
                <form onSubmit={handleSignOut}>
                  <Button 
                    type="submit" 
                    variant="destructive"
                    className="w-full sm:w-auto"
                  >
                    Sign out
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}