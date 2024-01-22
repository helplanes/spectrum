import { Rules } from "@/app/e-paradox/components/accordian"
import { Eparadox_registarion } from "@/app/e-paradox/components/registration";
import { Krona_One } from 'next/font/google'
import Image from "next/image";

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Spectrum x E-Paradox',
  description: "Tech event for first year students",  
  openGraph: {
    title: 'Spectrum x E-Paradox',
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
          E-Paradox &apos;24
        </h1>
        <br/>
        <h2 className="font-jacques_francois_shadow scroll-m-20 pl-2 text-2xl font-extrabold text-gray-800 tracking-tight lg:text-5xl">
          brought to you by AS&H, PCCOE
        </h2>
      </div>
      <Image className="mx-auto mt-4" width="500" height="450" alt="image" src="https://i.imgur.com/GPIvn8s.png" />
      <div>
      <h3 className="font-jacques_francois_shadow scroll-m-20 my-4 pl-2 text-xl font-extrabold text-gray-800 tracking-tight md:text-3xl lg:text-5xl">
        -	A fun activity-based game in which you must find the clues and lead forward to the ultimate prize by cracking codes <br/>
      </h3>
      </div>
      <picture> 
        <img className="mx-auto my-16" width="800" height="50" alt="image" src="https://res.cloudinary.com/dfyrk32ua/image/upload/v1705931875/Spectrum/global/lbNfJM2-min_n0yrof.webp" />
      </picture> 
      <Eparadox_registarion />
      <picture> 
        <img className="mx-auto my-16" width="800" height="50" alt="image" src="https://res.cloudinary.com/dfyrk32ua/image/upload/v1705931875/Spectrum/global/lbNfJM2-min_n0yrof.webp" />
      </picture> 
        <Rules /> 
    <hr/>
    <picture> 
      <img className="mx-auto my-8" width="800" height="50" alt="image" src="https://res.cloudinary.com/dfyrk32ua/image/upload/v1705931875/Spectrum/global/lbNfJM2-min_n0yrof.webp" />
    </picture> 
    <div className="text-gray-700 leading-7 mb-4 p-2 sm:p-4 md:p-6 lg:p-8">
        <h1>Rule Book :</h1>
        <p className="leading-7">
          1. Online platforms like Hackerrank and CodeChef would be used. No personal computers will be allowed. <br />
          2. Changing of tabs during the competition will be considered as an act of cheating and the participant will be disqualified immediately. <br />
          3. Use of A.I. chatbots like ChatGPT is strictly prohibited. <br />
          4. Use of Mobile phone, smartwatches, any other electronic device during the competition is prohibited. <br />
          5. Participants would be strictly monitored, help of volunteers can be considered. <br />
          6. Each round will have a certain time limit, participants are needed to bound to it. <br />
          7. Final decision making would be done by Coordinators based on computerized results.
        </p>
        </div>
    </main>
  );

}