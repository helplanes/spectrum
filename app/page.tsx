import Link from "next/link";
import React from "react";
import Hero from "@/components/hero";
import Cards from "@/components/cards";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <Cards  />
      <div className="bg-white flex flex-col items-center justify-center w-screen h-screen text-gray-600 ">
        Build in Progress
      </div>
      <div>
      </div>
    </main>
  );
}
