import { Rules } from "@/app/events/e-paradox/components/accordian"
import { Eparadox_registarion } from "@/app/events/e-paradox/components/registration";
import { Krona_One } from 'next/font/google'
import Image from "next/image";

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Spectrum x E-Paradox',
  description: "Tech event for first year students",  
  openGraph: {
    title: 'Spectrum x E-Paradox',
    description: "Tech event for first year students",  
    url: "https://spectrumpccoe25.tech",
    siteName: "spectrumpccoe25.tech",
    images: [
      {
        url: "https://i.postimg.cc/yYWmxgfr/2.png",
        width: 548,
        height: 253,
        alt: 'Image',
      },
    ],
  }, 
}
 
const krona = Krona_One({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: '400',
});

const ruleList = [
  "The competition will be conducted on online platforms such as HackerRank.",
  "Personal computers are not allowed for use during the event.",
  "Changing tabs during the competition is considered cheating and may lead to disqualification.",
  "The use of A.I. chatbots like ChatGPT is strictly prohibited.",
  "Participants are not allowed to use mobile phones, smart watches, or any other electronic devices.",
  "Strict monitoring of participants will be implemented, with assistance from volunteers if necessary.",
  "Each round will have a specified time limit that participants must adhere to.",
  "The final decision will be based on computerized results and made by the event coordinators.",
  "The decision of the event coordinators is final and binding, not subject to contestation.",
  "The organizers reserve the right to change or update the contest rules, and participants are responsible for staying informed.",
  "Violation of any rule may result in immediate disqualification.",
  "Spot entries will not be accepted.",
  "All the rounds will be held offline at the venue.",
  "Participants should have their own HackerRank account.",
  "For team rounds, coordinators will assign the team on the basis of computerized results.",
  "Participants will be solely responsible for any damage/harm caused due to his/her recklessness.",
  "All the questions from Round 2 to Round 4 will be based only on C programming language."
];

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
                  E-Paradox &apos;25
                </h1>
                <h2 className="text-xl md:text-2xl text-white/90">
                  brought to you by AS&H, PCCOE
                </h2>
                <p className="text-lg text-white/80 font-light max-w-xl mt-6">
                Crack the code, Break the Paradox—Can you solve the unsolvable, where C is the key to every Challenge!
                <br />Note : All the Rounds are based on C language only
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image 
                src="https://i.postimg.cc/yYWmxgfr/2.png" 
                alt="Event Image" 
                width={400} 
                height={400} 
                className="rounded-lg" 
                draggable={false}
              />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <Eparadox_registarion />
        </div>

        {/* Rules Section with Accordion */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-12">
          <div className="text-white mb-8">
            <h2 className={`${krona.className} text-3xl mb-4`}>Competition Format</h2>
            <p className="text-white/80">Challenge yourself through multiple stages of technical excellence</p>
          </div>
          
          {/* Custom styled wrapper for the Rules component */}
          <div className="rules-wrapper">
            <Rules />
          </div>
          

        </div>

        {/* Rules Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-12">
          <h3 className={`${krona.className} text-2xl text-white mb-6`}>Event Rules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ruleList.map((rule, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <span className="text-white/90 font-bold">{idx + 1}.</span>
                <p className="text-white/80">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Button */}
        
      </div>
    </main>
  );
}