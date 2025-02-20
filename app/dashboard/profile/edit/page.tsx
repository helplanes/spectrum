'use client';

import { Breadcrumbs } from "@/app/components/breadcrumbs";
import { ProfileForm } from "../../components/profile-form";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function EditProfilePage() {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user');
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Failed to fetch user data');
        setUserData(data);  
      } catch (error: any) {
        toast.error("Failed to load profile");
        router.push('/dashboard');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  if (loading || !userData) {
    return (
      <main className="min-h-screen bg-[#EBE9E0]">
        <div className="w-full max-w-screen-xl mx-auto p-4 sm:px-6 lg:p-8">
          {/* Skeleton Breadcrumbs */}
          <div className="h-6 w-64 bg-gray-200 rounded animate-pulse mb-6" />

          <div className="bg-white rounded-2xl shadow-sm">
            <div className="p-6 sm:p-8">
              {/* Header Skeleton */}
              <div className="mb-8 space-y-2">
                <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
                <div className="h-5 w-64 bg-gray-100 rounded animate-pulse" />
              </div>

              {/* Form Fields Skeleton */}
              <div className="space-y-6">
                {/* Email Box Skeleton */}
                <div className="h-24 bg-blue-50/70 rounded-lg animate-pulse" />

                {/* Form Grid Skeleton */}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <div key={index} className="space-y-2">
                      <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
                      <div className="h-10 w-full bg-gray-100 rounded animate-pulse" />
                    </div>
                  ))}
                </div>

                {/* Checkbox Area Skeleton */}
                <div className="h-20 bg-blue-50 rounded-lg animate-pulse mt-6" />

                {/* Button Area Skeleton */}
                <div className="border-t border-dashed border-gray-200 pt-6 -mx-6 sm:-mx-8" />
                <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
                  <div className="w-full sm:w-[25%] h-12 bg-gray-100 rounded animate-pulse" />
                  <div className="w-full sm:w-[75%] h-12 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Loading Indicator */}
          <div className="fixed bottom-4 right-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200">
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
              <span className="text-sm text-gray-600">Loading profile...</span>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#EBE9E0]">
      <div className="w-full max-w-screen-xl mx-auto p-4 sm:px-6 lg:p-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Edit Profile' },
          ]}
          className="mb-6"
        />

        <div className="bg-white rounded-2xl shadow-sm">
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Edit Profile</h1>
              <p className="text-sm text-gray-500 mt-1">Update your profile information</p>
            </div>
            
            <ProfileForm 
              profile={userData.profile} 
              onUpdate={() => {
                router.push('/dashboard');
                router.refresh();
              }} 
            />
          </div>
        </div>
      </div>
    </main>
  );
}
