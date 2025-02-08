"use client"

import { Rules } from "@/app/events/3d-modelling/components/accordian"
import { ThreeModelling } from "@/app/events/3d-modelling/components/registration";
import { Krona_One } from 'next/font/google'
import Image from "next/image";

const krona = Krona_One({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: '400',
});

export default function Home() {
  return (
    <main className="min-h-screen" style={{
      background: "radial-gradient(at left top, rgb(91, 192, 222), rgb(51, 142, 218))",
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="relative rounded-2xl bg-white/10 backdrop-blur-lg p-8 mb-12">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2">
              <div className={`${krona.className} space-y-4`}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#ece9e0]">
                  Build a Tower &apos;25
                </h1>
                <h2 className="text-xl md:text-2xl text-white/90">
                  brought to you by Civil Department, PCCOE
                </h2>
                <p className="text-lg text-white/80 font-light max-w-xl mt-6">
                  Test your engineering skills in real-world model making challenge
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-white/20 rounded-lg transform rotate-45"></div>
                <div className="absolute inset-2 bg-white/30 rounded-lg transform rotate-12"></div>
                <div className="absolute inset-4 bg-white/40 rounded-lg transform -rotate-6"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-12">
          <h3 className={`${krona.className} text-2xl text-white mb-6`}>Registration</h3>
          <ThreeModelling />
        </div>

        {/* Rules Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-12">
          <div className="text-white mb-8">
            <h2 className={`${krona.className} text-3xl mb-4`}>Competition Format</h2>
            <p className="text-white/80">Guidelines for tower building competition</p>
          </div>
          <div className="rules-wrapper">
            <Rules />
          </div>
          
          <style jsx global>{`
            .rules-wrapper {
              color: white;
            }
            .rules-wrapper h1, .rules-wrapper h3, .rules-wrapper h4 {
              color: white;
            }
            .rules-wrapper p {
              color: rgba(255, 255, 255, 0.8);
            }
            .rules-wrapper .bg-white {
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(8px);
            }
            .rules-wrapper .bg-[#EBE9E0] {
              background: rgba(255, 255, 255, 0.15);
            }
            .rules-wrapper .text-gray-600,
            .rules-wrapper .text-gray-700,
            .rules-wrapper .text-gray-800,
            .rules-wrapper .text-gray-900 {
              color: rgba(255, 255, 255, 0.9);
            }
            .rules-wrapper .shadow-sm,
            .rules-wrapper .shadow-md {
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
          `}</style>
        </div>
      </div>
    </main>
  );
}