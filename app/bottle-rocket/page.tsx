import { Bottle_rocket_registarion } from "@/app/bottle-rocket/components/registration";
import { Krona_One } from 'next/font/google'
import { TableInfo } from "@/app/bottle-rocket/components/info"
import Image from "next/image";

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Spectrum x Bottle Rocket',
  description: "Tech event for first year students",  
  openGraph: {
    title: 'Spectrum x Bottle Rocket',
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
        Bottle Rocket
        </h1>
        <br/>
        <h2 className="font-jacques_francois_shadow scroll-m-20 pl-2 text-2xl font-extrabold text-gray-800 tracking-tight lg:text-5xl">
          brought to you by AS&H, PCCOE
        </h2>
      </div>
      <Image className="mx-auto mt-4" width="500" height="450" alt="image" src="https://i.imgur.com/QMQf6Xn.png" />
      <div>
      <h3 className="font-jacques_francois_shadow scroll-m-20 my-4 pl-2 text-xl font-extrabold text-gray-800 tracking-tight md:text-3xl lg:text-5xl">
        / Event Description /
      </h3>
      </div>
      <Image className="mx-auto my-16" width="800" height="50" alt="image" src="https://i.imgur.com/lbNfJM2.png" />
      <Bottle_rocket_registarion />
      <Image className="mx-auto my-16" width="800" height="50" alt="image" src="https://i.imgur.com/lbNfJM2.png" />
      <div className="text-gray-700 leading-7 mb-4 p-8">
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">Rules :</h1>
        <p className="leading-7">
        1. Each team should consist of 2-4 people. <br/>
        2. Strict monitoring of participants will be implemented, with assistance from volunteers if necessary. <br/>
        3. The final decision will be based on computerized results and made by the event coordinators. <br/>
        4. The decision of the event coordinators is final and binding, not subject to contestation. <br/>
        5. The organizers may make changes or updates to the contest rules, and participants are kindly encouraged to stay informed of the same. <br/>
        6. Violation of any rule may result in immediate disqualification. <br/>
        7. Competitors bring their own rockets, launchers and team. <br/>
        8. All energy given to the rocket must only come from the water/air pressure combination. No other source of energy is allowed. You can only compress air manually, with a foot or bicycle pump. <br/>
        9. No external metal parts are allowed on the rocket but are allowed on the launch mechanism. <br/>
        10. You are only allowed to use plastic bottles specifically designed for holding pressure, or that have been pressure tested (for example carbonated drink bottles). <br/>
        11. Your launch apparatus must be secure and must be able to robustly control the rocket’s flight direction. <br/>
        12. No glass or sharp objects to be used in/on the rocke <br/>
        13. Particular care must be taken so that the rocket’s launch direction is not changed when the launch mechanism is released. This means that handheld launches, systems requiring human support, or launches guided by flexible wire rods will not be allowed. <br/>
        14. You will need a launcher capable of launching a rocket at a variable vertical angle of up to 60˚ to the horizontal. The maximum launch angle will be decided on the day. You may launch at angles less than the maximum. <br/>
        15. If your rocket has fixed wings then a maximum variable launch angle of 30˚ to the horizontal is allowed. The maximum launch angle will be decided on the day. <br/>
        16. Multistage rockets are permitted. <br/>
        17. For safety’s sake any fast falling rockets must land in the landing zone or you will get no points for that round. If softlanding rockets (e.g. rockets with parachutes) land outside the landing zone their time will be counted for the longest time in the air award.
        </p>
        </div>
        <div className="text-gray-700 leading-7 my-4 p-8">
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">Field :</h1>
            <p className="leading-7">
            <Image className="px-8 p-8 rounded-t-lg mx-auto" src="https://i.imgur.com/AF35KS7.png" alt="product image" width={400} height={100} />
            </p>
            <div className="text-gray-700 leading-7 my-4">
              <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">Bonus seconds will be awarded according to this table :</h1>
            </div>
            <div className="max-w-5xl mx-auto">
             <TableInfo />
            </div>
        </div>
    <hr/>
    <Image className="mx-auto my-8" width="800" height="50" alt="image" src="https://i.imgur.com/lbNfJM2.png" />
    </main>
  );

}