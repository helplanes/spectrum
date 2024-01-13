import { TableInfo } from "@/app/electrica/components/info";
import { Rules } from "@/app/electrica/components/accordian"
import { Electrica_registarion } from "@/app/electrica/components/registration";

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Spectrum x Electrica',
  
}
export default function Home() {
  return (
    <main className="overflow-hidden max-w-7xl mx-auto bg-white">
      <div className="bg-white flex flex-col items-center justify-center h-screen text-gray-600 ">
        Build in Progress
      </div>
      <hr/>
      <Electrica_registarion />
      <hr/>
        <Rules /> 
    <hr/>
    
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