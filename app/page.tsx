import Image from "next/image";
import React from "react";
import Hero from "@/components/hero";
import Cards from "@/components/cards";
import Link from 'next/link';
{
  /* import EmblaCarousel from '@/components/parallax/EmblaCarousel' */
}
import { EmblaOptionsType } from "embla-carousel";
import "@/components/parallax/embla.css";
import EmblaCarousels from "@/components/thumbs/EmblaCarousels";
const OPTIONS: EmblaOptionsType = { dragFree: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <main className="overflow-hidden overflow-x-hidden ">
      <div className="text-center bg-gradient-to-b from-black via-black to-gray-900 grid-background relative">
        <div className="max-w-6xl mx-auto px-4 pt-20">
          <div className="space-y-0">
            <p className="text-xs sm:text-sm md:text-base font-light tracking-wider text-gray-300">
              PCET&apos;s{" "}
              <span className="text-red-500 font-medium">PIMPRI</span> CHINCHWAD
              COLLEGE OF ENGINEERING, PUNE
            </p>
            <p className="text-xs sm:text-sm md:text-base font-light tracking-wider text-gray-400">
              Department of{" "}
              <span className="text-red-500 font-medium">Applied Sciences</span>{" "}
              and Humanities presents
            </p>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tight antialiased spectrum-title">
            SPECTRUM&apos;25
          </h1>
        </div>
      </div>
      <Hero />
      <hr />
      <h1 className="scroll-m-20 text-center text-4xl text-white font-extrabold tracking-tight lg:text-5xl p-8">
        Events{" "}
        <Image
          className="mx-auto pb-8 display: inline items-center"
          width="80"
          height="80"
          alt="image"
          src="https://i.postimg.cc/05F06hZb/zOrZlKk.png"
        />
      </h1>
      <hr />
      <Cards />
      <div className="bg-[#EBE9E0] text-black pb-16">
        {" "}
        {/* Added pb-16 for bottom padding */}
        <div className="pt-2">
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl p-4">
            Glimpse of Spectrum &apos;24{" "}
            <Image
              className="mx-auto pb-8 display: inline"
              width="70"
              height="70"
              alt="image"
              src="https://i.postimg.cc/sgDXDk2X/zOrZlKk.png"
            />
          </h1>
          <hr className="border-2 border-gray-400" />
          <div className="columns-2 sm:columns-3 gap-4 my-8 mx-auto max-w-4xl pt-16 px-4">
            <div className="relative h-40 mb-4">
              <Image
                alt="A picture of the team"
                src="https://i.postimg.cc/d1cBfkzn/c28b1c81-0843-4095-9c54-c40340b96c16.jpg"
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative h-80 mb-4 sm:mb-0">
              <Image
                alt="A man looking at a robot a spectrum 2023"
                src="https://i.imgur.com/escfJ52.jpg"
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                className="rounded-lg object-cover  sm:object-center"
              />
            </div>
            <div className="relative h-40 sm:h-80 sm:mb-4">
              <Image
                alt="A robo race in action at spectrum 2023"
                src="https://i.postimg.cc/XYVB0qhB/Twchtreasurehunt.jpg"
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                className="rounded-lg object-cover object-top sm:object-center"
              />
            </div>
            <div className="relative h-40 mb-4 sm:mb-0">
              <Image
                alt="A minature plane kept on display at spectrum 2023"
                src="https://i.postimg.cc/Njz2JKKV/6339615e-b3bb-4ba1-8f5c-91bbfc3eadfa.jpg"
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative h-40 mb-4">
              <Image
                alt="Robo Race cards kept in a pile at spectrum 2023"
                src="https://i.postimg.cc/Pf7Gqh8H/a94f7af9-164e-45d7-9a5e-8f9932261ae5.jpg"
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative h-80">
              <Image
                alt="My badge on top of a pile of badges from a Vercel meetup we held"
                src="https://i.postimg.cc/JzkR80TS/IMG-9273.jpg"
                fill
                sizes="(min-width: 768px) 213px, 33vw"
                className="rounded-lg object-cover"
              />
            </div>
          </div>




          <div className="rounded-3xl mx-[20px] md:mx-auto bg-white/10 p-12 shadow-2xl max-w-4xl ">
          <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-black">Meet Our Previous Team</h3>
              <p className="mt-4 text-lg text-black-200">Last year&apos;s Spectrum Pccoe&apos;24 team members</p>
            </div>
            <Link
              href="/2024"
              className="group flex items-center gap-4 rounded-full bg-black/20 px-8 py-4 text-lg text-black transition-all hover:bg-white/30"
            >
              <span>View 2024 Team</span>
              <svg
                className="h-6 w-6 transition-transform group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>



        </div>
        {/* <section className="sandbox__carousel">
              <EmblaCarousels slides={SLIDES} options={OPTIONS} />
            </section> */}
        {/* <div className="pt-16">
          <hr className="border-2 border-gray-400"/>
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl p-8">
              Events for Spectrum&apos;24 <Image className="mx-auto pb-8 display: inline" width="70" height="70" alt="image" src="https://i.imgur.com/zOrZlKk.png" />
            </h1>
          <hr className="border-2 border-gray-400"/>
        </div>
        <section className="sandbox__carousel">
          <EmblaCarousels slides={SLIDES} options={OPTIONS} />
        </section> */}
      </div>
      <div className=" w-screen">


        


        <div className="relative mx-auto w-full max-w-6xl px-4 pt-16">
          <div className="relative rounded-3xl border-2 border-slate-400/30 p-8 shadow-2xl md:h-[300px] h-[400px] overflow-hidden mx-[10px]">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="text-center md:text-left md:w-[50%] ">
                <h3 className="text-2xl font-bold text-white">
                  Open Source Project
                </h3>
                <p className="mt-2 text-lg text-gray-200">
                  We have made this project open source and available on GitHub.
                  Feel free to contribute!
                </p>
                <a
                  href="https://github.com/kewonit/spectrum"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex justify-center items-center gap-4 rounded-full bg-white/20 px-8 py-4 text-lg text-white transition-all hover:bg-white/30 mt-4 md:mt-12 md:max-w-[250px] "
                >
                  <span>View on GitHub</span>
                  <svg
                    className="h-6 w-6 transition-transform group-hover:translate-x-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.271.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.164 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/dvdcl3ozp/image/upload/v1738410511/spectrum/rainbow-color-1-min_zpk7f9.png"
              className="absolute -bottom-[100px] w-full right-[100px] md:top-0 md:-top-[130px] opacity-60 md:opacity-70 -z-10 -rotate-45 md:rotate-45 md:-right-[20px] md:w-[400px] md:h-[400px] "
            ></img>
            <img  
              src="https://res.cloudinary.com/dvdcl3ozp/image/upload/v1738410424/spectrum/repo-ss_gkc0qv.png"
              className="absolute -bottom-[80px] -right-[50px]  md:right-[50px] md:-bottom-[100px] z-0 mx-auto md:rotate-0 md:bottom-0 md:aspect-auto md:w-[400px] rounded-sm"
            ></img>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-4 lg:pt-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="space-y-4 px-4">
              <p className="font-bold text-2xl text-gray-200">
                Built by Our Team
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  {
                    name: "Kartik",
                    instagram: "#",
                    linkedin: "#",
                  },
                  {
                    name: "Mayank",
                    instagram: "#",
                    linkedin: "#",
                  },
                  {
                    name: "Ved",
                    instagram: "#",
                    linkedin: "#",
                  },
                  {
                    name: "Aadi",
                    instagram: "#",
                    linkedin: "#  ",
                  },
                ].map((member) => (
                  <div
                    key={member.name}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2"
                  >
                    <span className="text-gray-200">{member.name}</span>
                    <div className="flex gap-2">
                      <a
                        href={`https://instagram.com/${member.instagram}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-200 hover:text-gray-200/75"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a
                        href={`https://linkedin.com/in/${member.linkedin}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-200 hover:text-gray-200/75"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/dfyrk32ua/image/upload/v1705913782/Spectrum/Homepage/HKZuMdo_w2bis3.png"
              alt="Footer Image"
              className="h-48 w-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
