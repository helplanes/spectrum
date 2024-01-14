
import React from "react";
import "@/components/ui/rays.css"


export default function hero() {
  return (
    <main className="overflow-hidden">
      <div className="flex flex-col h-[100vh] pb-36 items-center justify-center bg-black transition-bg">
        <div className="absolute inset-0 overflow-hidden">
          <div className="jumbo absolute -inset-[10px] opacity-50">
            <div className="flex flex-col items-center justify-center w-screen pt-32 pb-96 overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
              <nav className="my-8 animate-fade-in">
                <ul className="flex items-center justify-center gap-4">
     
                </ul>
              </nav>
            </div>
          </div>
        </div>
                <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />   
                <h1 className="text-5xl text-transparent duration-1500 bg-white cursor-default text-edge-outline animate-title font-display sm:text-7xl md:text-9xl whitespace-nowrap bg-clip-text ">
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