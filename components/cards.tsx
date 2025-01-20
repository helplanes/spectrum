import "../components/pag.css"
import Link from 'next/link'

export default function Cards() {
    return (
        <div id="cards" className="mx-auto">
        <div className="max-w-sm rounded-lg shadow bg-gray-900 border-red-700">
            <Link href="/e-paradox">
                <picture>
                    <img className="rounded-t-lg mx-auto" width="350" height="300" alt="image" src="https://res.cloudinary.com/dfyrk32ua/image/upload/v1705913636/Spectrum/Homepage/eparadox_xmuoej.jpg" />
                </picture>
            </Link>
            <div className="p-5">
                <Link href="/e-paradox">
                    <h1 className="mb-2 text-2xl font-bold tracking-tighttext-white">E-Paradox &apos;24</h1>
                </Link>
                <p className="mb-3 font-normal text-gray-400">A fun activity-based game of cracking codes.</p>
                <Link href="/e-paradox" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>

        <div className="max-w-sm rounded-lg shadow bg-gray-900 border-orange-700">
            <Link href="/electrica">
                <picture>
                    <img className="rounded-t-lg mx-auto" width="350" height="300" alt="image" src="https://res.cloudinary.com/dfyrk32ua/image/upload/v1705913635/Spectrum/Homepage/electrica_oc2dm6.jpg" />
                </picture>
            </Link>
            <div className="p-5">
                <Link href="/electrica">
                    <h1 className="mb-2 text-2xl font-bold tracking-tighttext-white">Electrica &apos;24</h1>
                </Link>
                <p className="mb-3 font-normal text-gray-400">A fun event which tests your knowledge on basic electronics.</p>
                <Link href="/electrica" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>

        <div className="max-w-sm rounded-lg shadow bg-gray-900 border-yellow-700">
            <Link href="/brain-dasher">
                <picture>
                    <img className="rounded-t-lg mx-auto" width="350" height="300" alt="image" src="https://res.cloudinary.com/dfyrk32ua/image/upload/v1705913635/Spectrum/Homepage/braindasher_ssnsl9.jpg" />
                </picture>
            </Link>
            <div className="p-5">
                <Link href="/brain-dasher">
                    <h1 className="mb-2 text-2xl font-bold tracking-tighttext-white">Brain Dasher &apos;24</h1>
                </Link>
                <p className="mb-3 font-normal text-gray-400">A fun event to put your brain to the test!</p>
                <Link href="/brain-dasher" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>

        <div className="max-w-sm rounded-lg shadow bg-gray-900 border-green-700">
            <Link href="/treasure-hunt">
                <picture>
                    <img className="rounded-t-lg mx-auto" width="350" height="300" alt="image" src="https://res.cloudinary.com/dfyrk32ua/image/upload/v1705913637/Spectrum/Homepage/treasure_imfqwg.jpg" />
                </picture>
            </Link>
            <div className="p-5">
                <Link href="/treasure-hunt">
                    <h1 className="mb-2 text-2xl font-bold tracking-tighttext-white">Treasure Hunt &apos;24</h1>
                </Link>
                <p className="mb-3 font-normal text-gray-400">A fun event of Treasure Hunt!</p>
                <Link href="/treasure-hunt" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>

        <div className="max-w-sm rounded-lg shadow bg-gray-900 border-orange-700">
            <picture>
                <img className="mx-auto" width="400" height="200" src="https://res.cloudinary.com/dfyrk32ua/image/upload/v1705913782/Spectrum/Homepage/HKZuMdo_w2bis3.png" alt="logo"/>
            </picture>
        </div>

        <div className="max-w-sm rounded-lg shadow bg-gray-900 border-blue-700">
            <Link href="/chem-prastuti">
                <picture>
                    <img className="rounded-t-lg mx-auto" width="350" height="300" alt="image" src="https://res.cloudinary.com/dfyrk32ua/image/upload/v1705913635/Spectrum/Homepage/chemprastuti_qfiz2s.jpg" />
                </picture>
            </Link>
            <div className="p-5">
                <Link href="/chem-prastuti">
                    <h1 className="mb-2 text-2xl font-bold tracking-tighttext-white">Chem Prastuti &apos;24</h1>
                </Link>
                <p className="mb-3 font-normal text-gray-400">A Chemistry presentation event!</p>
                <Link href="/chem-prastuti" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>

        <div className="max-w-sm rounded-lg shadow bg-gray-900 border-purple-700">
            <Link href="/bottle-rocket">
                <picture>
                    <img className="rounded-t-lg mx-auto" width="350" height="300" alt="image" src="https://res.cloudinary.com/dfyrk32ua/image/upload/v1705913635/Spectrum/Homepage/bottlerocket_gv6w0e.jpg" />
                </picture>    
            </Link>
            <div className="p-5">
                <Link href="/bottle-rocket">
                    <h1 className="mb-2 text-2xl font-bold tracking-tighttext-white">Water Rocket &apos;24</h1>
                </Link>
                <p className="mb-3 font-normal text-gray-400">A rocket propelled by water and air pressure!</p>
                <Link href="/bottle-rocket" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>

        <div className="max-w-sm rounded-lg shadow bg-gray-900 border-pink-700">
            <Link href="/debate">
                <picture>
                    <img className="rounded-t-lg mx-auto" width="350" height="300" alt="image" src="https://res.cloudinary.com/dfyrk32ua/image/upload/v1705913635/Spectrum/Homepage/warofwords_njqikn.jpg" />
                </picture>
            </Link>
            <div className="p-5">
                <Link href="/debate">
                    <h1 className="mb-2 text-2xl font-bold tracking-tighttext-white">War of Words &apos;24</h1>
                </Link>
                <p className="mb-3 font-normal text-gray-400">War of Words - Debate Competition 2024!</p>
                <Link href="/debate" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>

        <div className="max-w-sm rounded-lg shadow bg-gray-900 border-blue-700">
            <Link href="/video-games">
                <picture>
                    <img className="rounded-t-lg mx-auto" width="350" height="300" alt="image" src="https://res.cloudinary.com/dfyrk32ua/image/upload/v1705913637/Spectrum/Homepage/videogames_rs9ubb.jpg" />
                </picture>
            </Link>
            <div className="p-5">
                <Link href="/video-games">
                    <h1 className="mb-2 text-2xl font-bold tracking-tighttext-white">High Ping &apos;24</h1>
                </Link>
                <p className="mb-3 font-normal text-gray-400">High Ping PCCOE E-Sports Event 2024!</p>
                <Link href="/video-games" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-300 rounded-lg hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>
      </div>
    )
  }