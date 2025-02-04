import Link from 'next/link';
import { Star, StarsIcon } from 'lucide-react';

export default function Footer() {
  return (<>
    <div className="w-full overflow-x-hidden">  {/* Changed from w-screen to w-full and added overflow-x-hidden */}
        <div className="relative mx-auto w-full max-w-6xl px-4 pt-16">
          <div className="relative rounded-3xl border-2 border-slate-400/30 p-8 shadow-2xl md:h-[300px] h-[400px] overflow-hidden mx-[10px]">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row relative z-10">
              <div className="text-center md:text-left md:w-[50%] ">
                <h3 className="text-2xl font-bold text-white">
                  Open Source Project
                </h3>
                <p className="mt-2 text-lg text-gray-200">
                  We have made this project open source and available on GitHub.
                  Feel free to contribute!
                </p>
                <p className="mt-2 text-lg text-gray-200 flex items-center gap-2">
                  Don&apos;t forget to star us on GitHub! <StarsIcon className="w-5 h-5 animate-pulse text-yellow-300 filter drop-shadow-[0_0_8px_rgba(253,224,71,0.5)]" />
                </p>
                <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-12">
                  <a
                    href="https://github.com/kewonit/spectrum"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex justify-center items-center gap-4 rounded-full bg-white/20 px-8 py-4 text-lg text-white transition-all hover:bg-white/30"
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
                  <a
                    href="https://github.com/kewonit/spectrum#:~:text=Stars-,0%20stars,-Watchers"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex justify-center items-center gap-4 rounded-full bg-white/20 px-8 py-4 text-lg text-white transition-all hover:bg-white/30"
                  >
                    <span>Star</span>
                    <Star className="h-6 w-6 transition-transform group-hover:scale-110 text-yellow-300 filter drop-shadow-[0_0_8px_rgba(253,224,71,0.5)]" />
                  </a>
                </div>
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
    <footer className="relative bg-cover bg-top bg-no-repeat new-footer overflow-hidden">
      <img src="https://res.cloudinary.com/dvdcl3ozp/image/upload/v1738410511/spectrum/rainbow-color-1-min_zpk7f9.png" className='absolute -left-[120px] -top-[70px] md:-top-[20px] opacity-60 z-0  h-screen mx-auto rotate-45 md:rotate-0 md:left-0 md:w-full'></img>
      {/* Floating Island Section */}
      <div className="relative mx-auto w-full max-w-6xl px-4 pt-16 ">
        {/* <div className="rounded-3xl bg-white/10 p-12 shadow-2xl backdrop-blur-lg">
          <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-white">Meet Our Previous Team</h3>
              <p className="mt-4 text-lg text-gray-200">Last year&apos;s Spectrum Pccoe&apos;24 team members</p>
            </div>
            <Link
              href="/2024"
              className="group flex items-center gap-4 rounded-full bg-white/20 px-8 py-4 text-lg text-white transition-all hover:bg-white/30"
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
        </div> */}
        {/* <div className='w-screen h-[20vh]'></div> */}
      </div>

      {/* Existing Footer Content */}
      <div className="mt-16">
        <div>
          <hr />
            {/* Open Source Alert */}
            {/* <div className="relative mx-auto w-full max-w-6xl px-4 pt-16">
                <div className="rounded-3xl bg-blue-500/20 p-8 shadow-2xl backdrop-blur-lg">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white">Open Source Project</h3>
                    <p className="mt-2 text-lg text-gray-200">
                        We have made this project open source and available on GitHub. Feel free to contribute!
                    </p>
                    </div>
                    <a
                    href="https://github.com/kewonit/spectrum"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-full bg-white/20 px-8 py-4 text-lg text-white transition-all hover:bg-white/30"
                    >
                    <span>View on GitHub</span>
                    <svg className="h-6 w-6 transition-transform group-hover:translate-x-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.271.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.164 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    </a>
                </div>
                </div>
            </div> */}




          {/* <div className="mx-auto max-w-6xl px-4 py-12 sm:px-4 lg:pt-8">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="space-y-4">
                <p className="font-bold text-2xl text-gray-200">
                  Built by Our Team
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    {
                      name: 'Kartik Kulloi',
                      instagram: 'https://www.instagram.com/kewonit',
                      linkedin: 'https://www.linkedin.com/in/kartikkulloli/',
                      github: 'https://github.com/kewonit'
                    },
                    {
                      name: 'Mayank Kadam',
                      instagram: 'https://www.instagram.com/mayank_kadam1039/',
                      linkedin: 'https://www.linkedin.com/in/mayank-kadam-82a60227a/',
                      github: 'https://github.com/msk1039/'
                    },
                    {
                      name: 'Ved',
                      instagram: '#',
                      linkedin: '#',
                      github: '#'
                    },
                    {
                      name: 'Aadi',
                      instagram: '#',
                      linkedin: '#',
                      github: '#'
                    }
                  ].map((member) => (
                    <div key={member.name} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                      <span className="text-gray-200">{member.name}</span>
                      <div className="flex gap-2">
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-200 hover:text-gray-200/75"
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-200 hover:text-gray-200/75"
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.271.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.164 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
                          </svg>
                        </a>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-200 hover:text-gray-200/75"
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
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
          </div> */}
        </div>
        <hr className=''/>
        <div className="px-4 py-4 sm:px-6 lg:px-8 backdrop-blur-lg">
          <ul className="mx-auto  flex flex-wrap max-w-6xl justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <Link
                href="/compliance/privacypolicy"
                className="text-gray-200 transition hover:text-gray-200/75"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                href="/compliance/termsandconditions"
                className="text-gray-200 transition hover:text-gray-200/75"
              >
                Terms and Conditions
              </Link>
            </li>

            <li>
              <Link
                href="/compliance/cancelationandrefund"
                className="text-gray-200 transition hover:text-gray-200/75"
              >
                Cancellation and Refund
              </Link>
            </li>

            <li>
              <Link
                href="/compliance/shippinganddelivery"
                className="text-gray-200 transition hover:text-gray-200/75"
              >
                Shipping and Delivery
              </Link>
            </li>

            <li>
              <Link
                href="/compliance/contact"
                className="text-gray-200 transition hover:text-gray-200/75"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <hr />
        {/* <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-lg">    
            <ul className="flex justify-center gap-8">
              <li>
                <a
                  href="https://www.instagram.com/spectrum_pccoe/"
                  rel="noreferrer"
                  target="_blank"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 transition-all hover:border-white/60 hover:bg-white/10"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-5 w-5 text-white/70 transition-all group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kewonit/spectrum"
                  rel="noreferrer"
                  target="_blank"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 transition-all hover:border-white/60 hover:bg-white/10"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-5 w-5 text-white/70 transition-all group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.271.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.164 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://in.linkedin.com/company/pccoe-pune"
                  rel="noreferrer"
                  target="_blank"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 transition-all hover:border-white/60 hover:bg-white/10"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-5 w-5 text-white/70 transition-all group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/r/pccoe/"
                  rel="noreferrer"
                  target="_blank"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 transition-all hover:border-white/60 hover:bg-white/10"
                >
                  <span className="sr-only">Reddit</span>
                  <svg
                    className="h-5 w-5 text-white/70 transition-all group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.924-.561.085-.084.223-.084.307 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508.001.922-.411.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.129c0-.851-.695-1.543-1.55-1.543-.417 0-.795.167-1.074.435-1.056-.695-2.485-1.137-4.066-1.194l.865-2.724 2.343.549-.003.034c0 .696.569 1.262 1.268 1.262.699 0 1.267-.566 1.267-1.262s-.568-1.262-1.267-1.262c-.537 0-.994.335-1.179.804l-2.525-.592c-.11-.027-.223.037-.257.145l-.965 3.038c-1.656.02-3.155.466-4.258 1.181-.277-.255-.644-.415-1.05-.415-.854.001-1.549.693-1.549 1.544 0 .566.311 1.056.768 1.325-.03.164-.05.331-.05.5 0 2.281 2.805 4.137 6.253 4.137s6.253-1.856 6.253-4.137c0-.16-.017-.317-.044-.472.486-.261.82-.766.82-1.353zm-4.872.141c-.509 0-.922.412-.922.919 0 .506.414.918.922.918s.922-.412.922-.918c0-.507-.413-.919-.922-.919z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@Spectrum_PCCoE"
                  rel="noreferrer"
                  target="_blank"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 transition-all hover:border-white/60 hover:bg-white/10"
                >
                  <span className="sr-only">YouTube</span>
                  <svg
                    className="h-5 w-5 text-white/70 transition-all group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        {/* <hr /> */}
        <div className="px-4 pt-[10vmin] md:-bottom-72 backdrop-blur-lg w-full overflow-hidden"> {/* Added w-full and overflow-hidden */}
          <svg
            width="100%"
            viewBox="0 0 1756 275"
            preserveAspectRatio="xMidYMid meet" // Added to maintain aspect ratio while scaling
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M106.727 58.6364C106.121 51.9697 103.424 46.7879 98.6364 43.0909C93.9091 39.3333 87.1515 37.4545 78.3636 37.4545C72.5455 37.4545 67.697 38.2121 63.8182 39.7273C59.9394 41.2424 57.0303 43.3333 55.0909 46C53.1515 48.6061 52.1515 51.6061 52.0909 55C51.9697 57.7879 52.5152 60.2424 53.7273 62.3636C55 64.4848 56.8182 66.3636 59.1818 68C61.6061 69.5758 64.5152 70.9697 67.9091 72.1818C71.303 73.3939 75.1212 74.4545 79.3636 75.3636L95.3636 79C104.576 81 112.697 83.6667 119.727 87C126.818 90.3333 132.758 94.303 137.545 98.9091C142.394 103.515 146.061 108.818 148.545 114.818C151.03 120.818 152.303 127.545 152.364 135C152.303 146.758 149.333 156.848 143.455 165.273C137.576 173.697 129.121 180.152 118.091 184.636C107.121 189.121 93.8788 191.364 78.3636 191.364C62.7879 191.364 49.2121 189.03 37.6364 184.364C26.0606 179.697 17.0606 172.606 10.6364 163.091C4.21212 153.576 0.909091 141.545 0.727273 127H43.8182C44.1818 133 45.7879 138 48.6364 142C51.4848 146 55.3939 149.03 60.3636 151.091C65.3939 153.152 71.2121 154.182 77.8182 154.182C83.8788 154.182 89.0303 153.364 93.2727 151.727C97.5758 150.091 100.879 147.818 103.182 144.909C105.485 142 106.667 138.667 106.727 134.909C106.667 131.394 105.576 128.394 103.455 125.909C101.333 123.364 98.0606 121.182 93.6364 119.364C89.2727 117.485 83.697 115.758 76.9091 114.182L57.4545 109.636C41.3333 105.939 28.6364 99.9697 19.3636 91.7273C10.0909 83.4242 5.48485 72.2121 5.54545 58.0909C5.48485 46.5758 8.57576 36.4848 14.8182 27.8182C21.0606 19.1515 29.697 12.3939 40.7273 7.54546C51.7576 2.69697 64.3333 0.27272 78.4546 0.27272C92.8788 0.27272 105.394 2.72726 116 7.63635C126.667 12.4848 134.939 19.303 140.818 28.0909C146.697 36.8788 149.697 47.0606 149.818 58.6364H106.727ZM175.091 241.364V49.3636H219.091V73.2727H220.455C222.273 69.0303 224.848 64.9394 228.182 61C231.576 57.0606 235.879 53.8485 241.091 51.3636C246.364 48.8182 252.667 47.5455 260 47.5455C269.697 47.5455 278.758 50.0909 287.182 55.1818C295.667 60.2727 302.515 68.1212 307.727 78.7273C312.939 89.3333 315.545 102.848 315.545 119.273C315.545 135.091 313.03 148.333 308 159C303.03 169.667 296.303 177.667 287.818 183C279.394 188.333 270.03 191 259.727 191C252.697 191 246.606 189.848 241.455 187.545C236.303 185.242 231.97 182.212 228.455 178.455C225 174.697 222.333 170.667 220.455 166.364H219.545V241.364H175.091ZM218.636 119.182C218.636 126.697 219.636 133.242 221.636 138.818C223.697 144.394 226.636 148.727 230.455 151.818C234.333 154.848 238.97 156.364 244.364 156.364C249.818 156.364 254.455 154.848 258.273 151.818C262.091 148.727 264.97 144.394 266.909 138.818C268.909 133.242 269.909 126.697 269.909 119.182C269.909 111.667 268.909 105.152 266.909 99.6364C264.97 94.1212 262.091 89.8485 258.273 86.8182C254.515 83.7879 249.879 82.2727 244.364 82.2727C238.909 82.2727 234.273 83.7576 230.455 86.7273C226.636 89.697 223.697 93.9394 221.636 99.4545C219.636 104.97 218.636 111.545 218.636 119.182ZM404.114 191.636C389.508 191.636 376.902 188.758 366.295 183C355.75 177.182 347.629 168.909 341.932 158.182C336.295 147.394 333.477 134.576 333.477 119.727C333.477 105.303 336.326 92.697 342.023 81.9091C347.72 71.0606 355.75 62.6364 366.114 56.6364C376.477 50.5758 388.689 47.5455 402.75 47.5455C412.689 47.5455 421.78 49.0909 430.023 52.1818C438.265 55.2727 445.386 59.8485 451.386 65.9091C457.386 71.9697 462.053 79.4545 465.386 88.3636C468.72 97.2121 470.386 107.364 470.386 118.818V129.909H349.023V104.091H429.023C428.962 99.3636 427.841 95.1515 425.659 91.4545C423.477 87.7576 420.477 84.8788 416.659 82.8182C412.902 80.697 408.568 79.6364 403.659 79.6364C398.689 79.6364 394.235 80.7576 390.295 83C386.356 85.1818 383.235 88.1818 380.932 92C378.629 95.7576 377.417 100.03 377.295 104.818V131.091C377.295 136.788 378.417 141.788 380.659 146.091C382.902 150.333 386.083 153.636 390.205 156C394.326 158.364 399.235 159.545 404.932 159.545C408.871 159.545 412.447 159 415.659 157.909C418.871 156.818 421.629 155.212 423.932 153.091C426.235 150.97 427.962 148.364 429.114 145.273L469.932 146.455C468.235 155.606 464.508 163.576 458.75 170.364C453.053 177.091 445.568 182.333 436.295 186.091C427.023 189.788 416.295 191.636 404.114 191.636ZM558.273 191.636C543.545 191.636 530.909 188.606 520.364 182.545C509.879 176.485 501.818 168.061 496.182 157.273C490.545 146.424 487.727 133.879 487.727 119.636C487.727 105.333 490.545 92.7879 496.182 82C501.879 71.1515 509.97 62.697 520.455 56.6364C531 50.5758 543.576 47.5455 558.182 47.5455C571.091 47.5455 582.333 49.8788 591.909 54.5455C601.545 59.2121 609.061 65.8182 614.455 74.3636C619.909 82.8485 622.788 92.8182 623.091 104.273H581.545C580.697 97.1212 578.273 91.5151 574.273 87.4545C570.333 83.3939 565.182 81.3636 558.818 81.3636C553.667 81.3636 549.152 82.8182 545.273 85.7273C541.394 88.5758 538.364 92.8182 536.182 98.4545C534.061 104.03 533 110.939 533 119.182C533 127.424 534.061 134.394 536.182 140.091C538.364 145.727 541.394 150 545.273 152.909C549.152 155.758 553.667 157.182 558.818 157.182C562.939 157.182 566.576 156.303 569.727 154.545C572.939 152.788 575.576 150.212 577.636 146.818C579.697 143.364 581 139.182 581.545 134.273H623.091C622.667 145.788 619.788 155.848 614.455 164.455C609.182 173.061 601.758 179.758 592.182 184.545C582.667 189.273 571.364 191.636 558.273 191.636ZM724.659 49.3636V82.0909H636.568V49.3636H724.659ZM655.023 15.9091H699.477V145.091C699.477 147.818 699.902 150.03 700.75 151.727C701.659 153.364 702.962 154.545 704.659 155.273C706.356 155.939 708.386 156.273 710.75 156.273C712.447 156.273 714.235 156.121 716.114 155.818C718.053 155.455 719.508 155.152 720.477 154.909L727.205 187C725.083 187.606 722.083 188.364 718.205 189.273C714.386 190.182 709.811 190.758 704.477 191C694.053 191.485 685.114 190.273 677.659 187.364C670.265 184.394 664.598 179.788 660.659 173.545C656.78 167.303 654.902 159.455 655.023 150V15.9091ZM747.341 189V49.3636H790.523V74.8182H791.977C794.523 65.6061 798.674 58.7576 804.432 54.2727C810.189 49.7273 816.886 47.4545 824.523 47.4545C826.583 47.4545 828.705 47.6061 830.886 47.9091C833.068 48.1515 835.098 48.5455 836.977 49.0909V87.7273C834.856 87 832.068 86.4242 828.614 86C825.22 85.5758 822.189 85.3636 819.523 85.3636C814.25 85.3636 809.492 86.5455 805.25 88.9091C801.068 91.2121 797.765 94.4545 795.341 98.6364C792.977 102.758 791.795 107.606 791.795 113.182V189H747.341ZM945.182 128.727V49.3636H989.545V189H947.182V163H945.727C942.636 171.545 937.364 178.333 929.909 183.364C922.515 188.333 913.576 190.818 903.091 190.818C893.576 190.818 885.212 188.636 878 184.273C870.788 179.909 865.182 173.818 861.182 166C857.182 158.121 855.152 148.909 855.091 138.364V49.3636H899.545V129.636C899.606 137.212 901.606 143.182 905.545 147.545C909.485 151.909 914.848 154.091 921.636 154.091C926.061 154.091 930.03 153.121 933.545 151.182C937.121 149.182 939.939 146.303 942 142.545C944.121 138.727 945.182 134.121 945.182 128.727ZM1017.84 189V49.3636H1060.11V75H1061.66C1064.57 66.5151 1069.48 59.8182 1076.39 54.9091C1083.3 50 1091.54 47.5455 1101.11 47.5455C1110.81 47.5455 1119.11 50.0303 1126.02 55C1132.93 59.9697 1137.33 66.6364 1139.2 75H1140.66C1143.27 66.697 1148.36 60.0606 1155.93 55.0909C1163.51 50.0606 1172.45 47.5455 1182.75 47.5455C1195.96 47.5455 1206.69 51.7879 1214.93 60.2727C1223.17 68.697 1227.3 80.2727 1227.3 95V189H1182.84V105.182C1182.84 98.2121 1181.05 92.9091 1177.48 89.2727C1173.9 85.5758 1169.27 83.7273 1163.57 83.7273C1157.45 83.7273 1152.63 85.7273 1149.11 89.7273C1145.66 93.6667 1143.93 98.9697 1143.93 105.636V189H1101.2V104.727C1101.2 98.2424 1099.45 93.1212 1095.93 89.3636C1092.42 85.6061 1087.78 83.7273 1082.02 83.7273C1078.14 83.7273 1074.72 84.6667 1071.75 86.5454C1068.78 88.3636 1066.45 90.9697 1064.75 94.3636C1063.11 97.7576 1062.3 101.758 1062.3 106.364V189H1017.84ZM1291.84 2.81818V23.5455C1291.84 29.303 1290.69 35.1212 1288.39 41C1286.14 46.8182 1283.2 52.2727 1279.57 57.3636C1275.93 62.4545 1272.08 66.7576 1268.02 70.2727L1249.11 59.9091C1251.9 55.303 1254.39 50.1212 1256.57 44.3636C1258.75 38.5454 1259.84 31.6364 1259.84 23.6364V2.81818H1291.84ZM1371.48 189V156.636L1439.39 97.1818C1444.48 92.5758 1448.81 88.3636 1452.39 84.5454C1455.96 80.6667 1458.69 76.7879 1460.57 72.9091C1462.45 68.9697 1463.39 64.697 1463.39 60.0909C1463.39 54.9394 1462.27 50.5455 1460.02 46.9091C1457.78 43.2121 1454.69 40.3636 1450.75 38.3636C1446.81 36.3636 1442.3 35.3636 1437.2 35.3636C1432.05 35.3636 1427.54 36.4242 1423.66 38.5455C1419.78 40.6061 1416.75 43.6061 1414.57 47.5455C1412.45 51.4848 1411.39 56.2727 1411.39 61.9091H1368.75C1368.75 49.2424 1371.6 38.303 1377.3 29.0909C1382.99 19.8788 1390.99 12.7879 1401.3 7.81818C1411.66 2.78787 1423.69 0.27272 1437.39 0.27272C1451.51 0.27272 1463.78 2.63636 1474.2 7.36363C1484.63 12.0909 1492.69 18.697 1498.39 27.1818C1504.14 35.6061 1507.02 45.3939 1507.02 56.5455C1507.02 63.6364 1505.6 70.6667 1502.75 77.6364C1499.9 84.6061 1494.78 92.303 1487.39 100.727C1480.05 109.152 1469.63 119.242 1456.11 131L1433.84 151.545V152.727H1509.3V189H1371.48ZM1528.45 158.091V123L1604.73 2.81818H1635.91V50.4545H1617.82L1573.18 121.182V122.636H1683.64V158.091H1528.45ZM1618.36 189V147.364L1619.27 132V2.81818H1661.36V189H1618.36Z"
              fill="url(#paint0_linear_102_2)"
              fillOpacity="0.8"
            />
            <defs>
              <linearGradient
                id="paint0_linear_102_2"
                x1="860"
                y1="-59"
                x2="860"
                y2="236"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </footer>
    </>
  );
}