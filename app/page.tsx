import Image from "next/image";
import React from "react";
import Hero from "@/components/hero";
import Cards from "@/components/cards";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <hr/>
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl p-8">
        Events <Image className="mx-auto pb-8 display: inline" width="70" height="70" alt="image" src="https://i.imgur.com/zOrZlKk.png" />
      </h1>
      <hr/>
      <Cards  />
      <div className="bg-white flex flex-col items-center justify-center w-screen h-screen text-gray-600 ">
        Build in Progress
      </div>
      <div>
      </div>
    </main>
  );
}
