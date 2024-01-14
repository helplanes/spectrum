import { TableInfo } from "@/app/electrica/components/info";
import { Rules } from "@/app/electrica/components/accordian"
import { Electrica_registarion } from "@/app/electrica/components/registration";
import { Krona_One } from 'next/font/google'
import Image from "next/image";

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Spectrum x Electrica',
  
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
        Electrica &apos;24
        </h1>
        <br/>
        <h2 className="font-jacques_francois_shadow scroll-m-20 pl-2 text-2xl font-extrabold text-gray-800 tracking-tight lg:text-5xl">
          brought to you by AS&H, PCCOE
        </h2>
      </div>
      <Image className="mx-auto mt-4" width="500" height="450" alt="image" src="https://i.imgur.com/d4vCa0X.png" />
      <div>
      <h3 className="font-jacques_francois_shadow scroll-m-20 my-4 pl-2 text-xl font-extrabold text-gray-800 tracking-tight md:text-3xl lg:text-5xl">
        -	A fun event  which tests your knowledge on basic electronics while having fun at the same time <br/>
        -	Have an unforgettable experience in our Circuit Safari game.
      </h3>
      </div>
      <Image className="mx-auto my-16" width="800" height="50" alt="image" src="https://i.imgur.com/lbNfJM2.png" />
      <Electrica_registarion />
      <Image className="mx-auto my-16" width="800" height="50" alt="image" src="https://i.imgur.com/lbNfJM2.png" />
        <Rules /> 
    <hr/>
    <Image className="mx-auto my-8" width="800" height="50" alt="image" src="https://i.imgur.com/lbNfJM2.png" />
    <div className="text-gray-700 leading-7 mb-4  p-8">
        <h1>Note :</h1>
        <p className="leading-7">
            1. This rules are tentative. <br/>
            2. If any changes are there it will inform to you on the Whatsapp group.
        </p>
        </div>
        {/* <TableInfo /> */}
    </main>
  );

}