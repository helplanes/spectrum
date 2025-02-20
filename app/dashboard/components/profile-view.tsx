import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

const BRANCH_OPTIONS = {
  cs: "Computer Science",
  cs_aiml: "CS (AI & ML)",
  cs_regional: "CS (Regional)",
  it: "Information Technology",
  entc: "Electronics & Telecomm.",
  mech: "Mechanical",
  civil: "Civil"
} as const;

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

interface ProfileViewProps {
  profile: {
    full_name?: string;
    email?: string;
    phone?: string;
    college_name?: string;
    prn?: string;
    branch?: string;
    class?: string;
    gender?: string;
  };
  onEditClick: () => void;
}

export function ProfileView({ profile, onEditClick }: ProfileViewProps) {
  if (!profile) {
    return (
      <div className="text-center py-4">
        <p className="text-sm text-gray-600">Unable to load profile information.</p>
        <Button onClick={onEditClick} className="mt-3">
          Create Profile
        </Button>
      </div>
    );
  }

  const getFullBranchName = (branchKey: string) => {
    return BRANCH_OPTIONS[branchKey as keyof typeof BRANCH_OPTIONS] || branchKey;
  };

  const ProfileField = ({ label, value }: { label: string; value?: string }) => {
    if (!value) return null;
    return (
      <div className="flex flex-col">
        <span className="text-xs text-gray-500">{label}</span>
        <span className="text-sm font-medium text-gray-900">{value}</span>
      </div>
    );
  };

  const primaryFields = [
    { label: "PRN", value: profile.prn },
    { label: "Branch", value: profile.branch ? getFullBranchName(profile.branch) : undefined },
    { label: "Division", value: profile.class },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        {primaryFields.map((field, index) => (
          field.value && (
            <div key={index} className="p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
              <ProfileField label={field.label} value={field.value} />
            </div>
          )
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="text-xs text-gray-500">
          Need to update your information?
        </div>
        <Button 
          onClick={onEditClick}
          variant="outline" 
          size="sm"
          className="mt-2 text-blue-600 border-blue-200 hover:bg-blue-50"
        >
          <Pencil className="h-3.5 w-3.5 mr-2" />
          Edit Profile
        </Button>
      </div>
    </div>
  );
}