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
          <ul>
            <li>1. The competition will be conducted on online platforms such as HackerRank.</li>
            <li>2. Personal computers are not allowed for use during the event.</li>
            <li>3. Changing tabs during the competition is considered cheating and may lead to disqualification.</li>
            <li>4. The use of A.I. chatbots like ChatGPT is strictly prohibited.</li>
            <li>5. Participants are not allowed to use mobile phones, smart watches, or any other electronic devices.</li>
            <li>6. Strict monitoring of participants will be implemented, with assistance from volunteers if necessary.</li>
            <li>7. Each round will have a specified time limit that participants must adhere to.</li>
            <li>8. The final decision will be based on computerized results and made by the event coordinators.</li>
            <li>9. The decision of the event coordinators is final and binding, not subject to contestation.</li>
            <li>10. The organizers reserve the right to change or update the contest rules, and participants are responsible for staying informed.</li>
            <li>11. Violation of any rule may result in immediate disqualification.</li>
            <li>12. Spot entries will not be accepted.</li>
            <li>13. All the rounds will be held offline at the venue.</li>
            <li>14. Participants should have their own HackerRank account.</li>
            <li>15. For team rounds, coordinators will assign the team on the basis of computerized results.</li>
            <li>16. Participants will be solely responsible for any damage/harm caused due to his/her recklessness.</li>
          </ul>
        </p>
        </div>
    </main>
  );

}