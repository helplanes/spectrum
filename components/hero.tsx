
import React from "react";
import "@/components/ui/rays.css"


export default function hero() {
  return (
    <main className="overflow-hidden">
      <div className="flex flex-col h-[100vh] pb-36 items-center justify-center bg-black transition-bg">
        <div className="absolute inset-0 overflow-hidden">
          <div className="jumbo absolute -inset-[10px] opacity-50">
       
          </div>
        </div>
        <div className="hidden w-screen h-px z-2 animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />   
              <p className="animate-fade-in text-center px-4">PCET&apos;s PIMPRI CHINCHWAD COLLEGE OF ENGINEERING, Pune <br/>Department of Applied Science and Humanities presents</p>
              <h1 className="text-5xl text-transparent duration-1500 bg-white cursor-default text-edge-outline animate-title font-display sm:text-7xl md:text-9xl whitespace-nowrap bg-clip-text ">
                Spectrum&apos; 24
              </h1> <p className="animate-fade-in text-center p-2 pb-4">Annual State Level Technical Symposium for Extra Oridinary First Year Engineering Students!</p>
                  <div className="hidden w-screen h-px px-4 animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 z-100" />
                    <div className="text-center animate-fade-in">    
                      <ul className="mt-10 flex flex-wrap justify-center gap-6 md:gap-8">
                        <li>
                          <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> E-Paradox </a>
                        </li>
                        <li>
                          <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Electrica </a>
                        </li>

                        <li>
                          <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Brain Dasher </a>
                        </li>

                        <li>
                          <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Treasure Hunt </a>
                        </li>

                        <li>
                          <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Chem Prastuti </a>
                        </li>

                        <li>
                          <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Water Rocket </a>
                        </li>

                        <li>
                          <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> War of Words </a>
                        </li>

                        <li>
                          <a className="text-gray-700 transition hover:text-gray-700/75" href="/video-games"> High Ping </a>
                        </li>
                      </ul>
                  </div>
          </div>
    </main>
  );

}