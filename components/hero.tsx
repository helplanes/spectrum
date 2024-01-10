import Link from "next/link";
import React from "react";
import Particles from "@/components/ui/particles";

const navigation = [
  { name: "Contact", href: "/contact" },
  { name: "Team", href: "/team" },
];

export default function hero() {
  return (
    <main className="overflow-hidden">
      <div className="flex flex-col items-center justify-center w-screen pt-32 pb-96 overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <nav className="my-8 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={200}
        />
        <h1 className="z-10 text-5xl text-transparent duration-1500 bg-white cursor-default text-edge-outline animate-title font-display sm:text-7xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Spectrum&apos; 24
        </h1>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-8 text-center animate-fade-in">
          <h2 className="text-sm via-zinc-300/50 ">
            Coming Soon
          </h2>
        </div>
      </div>
    </main>
  );

}