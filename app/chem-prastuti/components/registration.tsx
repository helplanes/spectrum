import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Chem_prastuti_registarion() {
    return (
        <div className="p-4 lg:p-8">
                <div className="w-full max-w-sm bg-white mx-auto">
                    <h1 className="scroll-m-20 p-8 text-4xl font-extrabold text-black tracking-tight lg:text-5xl">
                        Registration Page :
                    </h1>
                    <a>
                        <picture>
                            <img className="px-8 pb-8 rounded-t-lg" src="https://res.cloudinary.com/dfyrk32ua/image/upload/v1705932901/Spectrum/posters-for-event-page/GpMClGl_d_ealwje.webp" alt="product image" width={1200} height={1000} />
                        </picture>
                    </a>
                    <div className="px-5 pb-5">
                        <a>
                            <h5 className="text-xl font-semibold tracking-tight text-black">Chem Prastuti </h5>
                        </a>
                        <div className="flex items-center justify-between pt-4 ">
                            <span className="text-3xl font-bold text-gray-900">&#8377;200/- group</span>
                            <a href="https://forms.gle/Z8HsjcssBPdiPuYe6"><Button className="">Register</Button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }