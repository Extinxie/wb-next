'use client'
import { SLIDES } from "./slider.data";
import Image from "next/image";
import cn from "clsx";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";

export default function Slider() {

    const [activeSlideId, setActiveSlideId] = useState(1)

    return (
        <div className="relative rounded-3xl overflow-hidden mt-4">
            <div className="flex w-full transition-transform duration-500 ease-in-out gap-1" style={{ transform: `translateX(-${(activeSlideId - 1) * 100}%)` }}>
                {SLIDES.map((item) => (
                    <div key={item.id} className="min-w-full">
                        <Image src={item.image} alt="12" width={1450} height={307}
                            className={cn("w-full h-full object-cover")} /></div>))}</div>
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
                <button onClick={() => setActiveSlideId(activeSlideId === 1 ? SLIDES.length : activeSlideId - 1)}> <ChevronLeftIcon size={20} />
                </button>
                <button className="transition" onClick={() => setActiveSlideId(activeSlideId === SLIDES.length ? 1 : activeSlideId + 1)}> <ChevronRightIcon />
                </button>
            </div>
        </div>

    );
}
