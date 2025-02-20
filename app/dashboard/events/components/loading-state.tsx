import { Loader2Icon } from "lucide-react";

export function LoadingState() {
  return (
    <main className="min-h-screen bg-[#EBE9E0] overflow-auto">
      <div className="w-full max-w-screen-xl mx-auto p-4 sm:px-6 lg:p-8">
        {/* Breadcrumb skeleton */}
        <div className="h-6 w-32 bg-gray-200 rounded mb-6 animate-pulse" />
        
        <div className="p-2 sm:p-4 border-4 border-dashed border-gray-300 rounded-3xl">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden relative p-6 sm:p-8 lg:p-10">
            {/* Header skeleton */}
            <div className="mb-8">
              <div className="h-8 w-48 bg-gray-200 rounded mb-2 animate-pulse" />
              <div className="h-4 w-64 bg-gray-100 rounded animate-pulse" />
            </div>

            {/* Cards skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden">
                  <div className="h-52 bg-gray-200 animate-pulse" />
                  <div className="p-4 space-y-3">
                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-40 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
