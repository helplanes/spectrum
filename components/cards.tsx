import "../components/pag.css"
import Image from "next/image"
import { Button } from "./ui/button"

export default function Cards() {
    return (
        <div id="cards" className="mx-auto">
        <div className="max-w-sm rounded-lg shadow bg-gray-900 border-red-700">
            <a href="/e-paradox">
                <Image className="rounded-t-lg" width="350" height="300" alt="image" src="https://i.imgur.com/sWzLWIW.jpg" />
            </a>
            <div className="p-5">
                <a href="/e-paradox">
                    <h5 className="mb-2 text-2xl font-bold tracking-tighttext-white">E-Paradox &apos;24</h5>
                </a>
                <p className="mb-3 font-normal text-gray-400">A fun activity-based game of cracking codes.</p>
                <a href="/e-paradox" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>

        <div className="max-w-sm rounded-lg shadow bg-gray-900 border-orange-700">
            <a href="/electrica">
                <Image className="rounded-t-lg" width="350" height="300" alt="image" src="https://i.imgur.com/iHJRiHD.jpg" />
            </a>
            <div className="p-5">
                <a href="/electrica">
                    <h5 className="mb-2 text-2xl font-bold tracking-tighttext-white">Electrica &apos;24</h5>
                </a>
                <p className="mb-3 font-normal text-gray-400">A fun event which tests your knowledge on basic electronics.</p>
                <a href="/electrica" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>

        <div className="max-w-sm rounded-lg shadow bg-gray-900 border-yellow-700">
            <a href="/brain-dasher">
                <Image className="rounded-t-lg" width="350" height="300" alt="image" src="https://i.imgur.com/iOTNbx0.jpg" />
            </a>
            <div className="p-5">
                <a href="/brain-dasher">
                    <h5 className="mb-2 text-2xl font-bold tracking-tighttext-white">Brain Dasher &apos;24</h5>
                </a>
                <p className="mb-3 font-normal text-gray-400">A fun event to put your brain to the test!</p>
                <a href="/brain-dasher" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>

        <div className="max-w-sm rounded-lg shadow bg-gray-900 border-green-700">
            <a href="/treasure-hunt">
                <Image className="rounded-t-lg" width="350" height="300" alt="image" src="https://i.imgur.com/iOTNbx0.jpg" />
            </a>
            <div className="p-5">
                <a href="/treasure-hunt">
                    <h5 className="mb-2 text-2xl font-bold tracking-tighttext-white">Treasure Hunt &apos;24</h5>
                </a>
                <p className="mb-3 font-normal text-gray-400">A fun event of Treasure Hunt!</p>
                <a href="/treasure-hunt" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>

        <div className="max-w-sm rounded-lg shadow bg-gray-900 border-orange-700">
            <Image className="mx-auto" width="400" height="200" src="https://i.imgur.com/HKZuMdo.png" alt="logo"/>
        </div>

        <div className="max-w-sm rounded-lg shadow bg-gray-900 border-blue-700">
            <a href="/chem-prastuti">
                <Image className="rounded-t-lg" width="350" height="300" alt="image" src="https://i.imgur.com/yJKEW8L.jpg" />
            </a>
            <div className="p-5">
                <a href="/chem-prastuti">
                    <h5 className="mb-2 text-2xl font-bold tracking-tighttext-white">Chem Prastuti &apos;24</h5>
                </a>
                <p className="mb-3 font-normal text-gray-400">A Chemistry presentation event!</p>
                <a href="/chem-prastuti" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>

        <div className="max-w-sm rounded-lg shadow bg-gray-900 border-purple-700">
            <a href="/bottle-rocket">
                <Image className="rounded-t-lg" width="350" height="300" alt="image" src="https://i.imgur.com/yJKEW8L.jpg" />
            </a>
            <div className="p-5">
                <a href="/bottle-rocket">
                    <h5 className="mb-2 text-2xl font-bold tracking-tighttext-white">Water Rocket &apos;24</h5>
                </a>
                <p className="mb-3 font-normal text-gray-400">A rocket propelled by water and air pressure!</p>
                <a href="/bottle-rocket" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>

        <div className="max-w-sm rounded-lg shadow bg-gray-900 border-pink-700">
            <a href="/debate">
                <Image className="rounded-t-lg" width="350" height="300" alt="image" src="https://i.imgur.com/mOpydMo.jpg" />
            </a>
            <div className="p-5">
                <a href="/debate">
                    <h5 className="mb-2 text-2xl font-bold tracking-tighttext-white">War of Words &apos;24</h5>
                </a>
                <p className="mb-3 font-normal text-gray-400">War of Words - Debate Competition 2024!</p>
                <a href="/debate" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>

        <div className="max-w-sm rounded-lg shadow bg-gray-900 border-blue-700">
            <a href="/video-games">
                <Image className="rounded-t-lg" width="350" height="300" alt="image" src="https://i.imgur.com/xvGbpGx.jpg" />
            </a>
            <div className="p-5">
                <a href="/video-games">
                    <h5 className="mb-2 text-2xl font-bold tracking-tighttext-white">High Ping &apos;24</h5>
                </a>
                <p className="mb-3 font-normal text-gray-400">High Ping PCCOE E-Sports Event 2024!</p>
                <a href="/video-games" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-300 rounded-lg hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
      </div>
    )
  }