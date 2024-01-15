import { Rules } from "@/app/brain-dasher/components/accordian"
import { BrainDashers_registarion } from "@/app/brain-dasher/components/registration";
import { Krona_One } from 'next/font/google'
import Image from "next/image";

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Spectrum x Brain Dasher',
  description: "Tech event for first year students",  
  openGraph: {
    title: 'Spectrum x Brain Dasher',
    description: "Tech event for first year students",  
    url: "https://pccoespectrum.tech",
    siteName: "pccoespectrum.tech",
    images: [
      {
        url: "https://i.imgur.com/rmVmQ7C.png",
        width: 548,
        height: 253,
        alt: 'Image',
      },
    ],
  }, 
}

const korna = Krona_One({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: '400', 
});

export default function Home() {
  return (
    <main className="overflow-hidden max-w-7xl mx-auto px-8 bg-[#EBE9E0]">
      <div className={korna.className}>
        <h1 className="font-jacques_francois_shadow scroll-m-20 pt-8 text-4xl md:text-7xl font-extrabold text-gray-800 tracking-tight lg:text-9xl">
        Brain Dasher 
        </h1>
        <br/>
        <h2 className="font-jacques_francois_shadow scroll-m-20 pl-2 text-2xl font-extrabold text-gray-800 tracking-tight lg:text-5xl">
          brought to you by AS&H, PCCOE
        </h2>
      </div>
      <Image className="mx-auto mt-4" width="500" height="450" alt="image" src="https://i.imgur.com/MJ4C1aA.png" />
      <div>
      <h3 className="font-jacques_francois_shadow scroll-m-20 my-4 pl-2 text-xl font-extrabold text-gray-800 tracking-tight md:text-3xl lg:text-5xl">
        / Event Description /
      </h3>
      </div>
      <Image className="mx-auto my-16" width="800" height="50" alt="image" src="https://i.imgur.com/lbNfJM2.png" />
      <BrainDashers_registarion />
      <Image className="mx-auto my-16" width="800" height="50" alt="image" src="https://i.imgur.com/lbNfJM2.png" />
        <Rules /> 
    <hr/>
    <Image className="mx-auto my-8" width="800" height="50" alt="image" src="https://i.imgur.com/lbNfJM2.png" />
    <div className="text-gray-700 leading-7 mb-4 p-8">
        <h1>Rules and Regulations of the events: </h1>
          <p className="leading-7">
          1. Individual Participation only. <br/>
          2. Mobile phones, Calculators, Smart watches and  any form of electronic gadgets are not allowed in any round.  <br/>
          3. Three winners will be declared after clearing all rounds.  <br/>
          4. Incase of any changes will be communicated priorly.
          </p>
          <h1 className="pt-8">Judging Criteria:</h1>
          <p className="leading-7">
          1. Sumbission Time <br/>
          2. Correct Answers
          </p>
        </div>
    </main>
  );

}