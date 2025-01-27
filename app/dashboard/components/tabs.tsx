'use client';

import { useState } from "react";
import { Tabs as TabsWrapper, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileForm } from "./profile-form";
import { ProfileView } from "./profile-view";
import { Toaster } from "sonner";

interface TabsProps {
  userData: any;
}

export function Tabs({ userData: initialUserData }: TabsProps) {
  const [userData, setUserData] = useState(initialUserData);

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

  return (
    <>
      <TabsWrapper 
        defaultValue="view" 
        className="w-full"
        onValueChange={(value) => {
          if (value === "view") refreshUserData();
        }}
      >
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="view">View Profile</TabsTrigger>
          <TabsTrigger value="edit">Edit Profile</TabsTrigger>
        </TabsList>
        <TabsContent value="view">
          <ProfileView profile={userData.profile} />
        </TabsContent>
        <TabsContent value="edit">
          <ProfileForm profile={userData.profile} onUpdate={refreshUserData} />
        </TabsContent>
      </TabsWrapper>
      <Toaster richColors />
    </>
  );
}
