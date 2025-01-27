'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Invalid phone number"),
  college_name: z.string().min(2, "College name is required"),
  prn: z.string().min(2, "PRN is required"),
  branch: z.string().min(2, "Branch is required"),
  class: z.string().min(2, "Class is required"),
  gender: z.string(),
});

export function ProfileForm({ profile, onUpdate }: { profile: any; onUpdate: () => void }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: profile?.full_name || "",
      phone: profile?.phone || "",
      college_name: profile?.college_name || "",
      prn: profile?.prn || "",
      branch: profile?.branch || "",
      class: profile?.class || "",
      gender: profile?.gender || "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast.promise(
      async () => {
        const response = await fetch('/api/user', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
        
        if (!response.ok) throw new Error('Failed to update profile');
        onUpdate(); // Trigger refresh of profile data
      },
      {
        loading: 'Updating profile...',
        success: 'Profile updated successfully',
        error: 'Failed to update profile',
      }
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-2 sm:p-4 rounded-[2rem]">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden relative">
          {/* Ticket effect dots */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 sm:w-4 h-6 sm:h-8 bg-[#EBE9E0] rounded-r-full"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 sm:w-4 h-6 sm:h-8 bg-[#EBE9E0] rounded-l-full"></div>

          <div className="p-3 sm:p-4 md:p-6 lg:p-8 space-y-4 sm:space-y-6">
            {/* Email display section - Updated */}
            <div className="bg-blue-50/70 px-3 py-2.5 sm:p-4 rounded-lg">
              <div className="space-y-0.5 sm:space-y-1">
                <label className="text-xs sm:text-sm font-medium text-blue-800">Email Address</label>
                <p className="text-sm sm:text-base font-medium text-blue-600">{profile?.email}</p>
                <p className="text-[10px] sm:text-xs text-blue-400">* Email cannot be changed</p>
              </div>
            </div>

            <div className="grid gap-3 sm:gap-4 md:gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="full_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-white text-gray-900 border-gray-300 hover:border-blue-300 focus:border-blue-500 transition-colors"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900">Phone</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="1234567890" 
                        {...field} 
                        className="bg-white text-gray-900 border-gray-300"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900">Gender</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="college_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900">College Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter college name" 
                        {...field} 
                        className="bg-white text-gray-900 border-gray-300"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="prn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900">PRN</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter PRN" 
                        {...field} 
                        className="bg-white text-gray-900 border-gray-300"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="branch"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900">Branch</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter branch" 
                        {...field} 
                        className="bg-white text-gray-900 border-gray-300"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="class"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900">Class</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter class" 
                        {...field} 
                        className="bg-white text-gray-900 border-gray-300"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>

            <div className="border-t-2 border-dashed border-gray-300 my-4 sm:my-6 -mx-3 sm:-mx-4 md:-mx-6 lg:-mx-8"></div>

            <Button 
              type="submit" 
              className="w-full py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-medium bg-blue-50 hover:bg-blue-100 text-blue-600 transition-all duration-300 rounded-lg flex items-center justify-center gap-2 group shadow-sm hover:shadow-md"
            >
              <span>Save Changes</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
