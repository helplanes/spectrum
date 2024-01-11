import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Electrica_registarion() {
    return (
            <div className="w-full max-w-sm bg-white mx-auto">
                <a href="#">
                    <Image className="p-8 rounded-t-lg" src="https://i.imgur.com/rmVmQ7C.png" alt="product image" width={1200} height={1000} />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-black">Electrica </h5>
                    </a>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900">&#8377;150</span>
                        <Button className="">Register</Button>
                    </div>
                </div>
            </div>
        )
    }