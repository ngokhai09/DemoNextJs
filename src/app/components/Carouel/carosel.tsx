'use client';

import React, {useState} from "react";





export default function DefaultCarousel(props: any) {
   const {img} = props
    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlide = ()=>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide? img.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = ()=>{
        const isLastSlide = currentIndex == img.length - 1;
        const newIndex = isLastSlide? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    return (
            <div style={{backgroundImage: `url(${img[currentIndex].url})`}} className={"w-full h-full bg-center bg-cover duration-500"}>
                <div className="absolute z-10 w-screen h-0 top-[calc(50%-1.125rem)]">
                    <div className="flex justify-between container mx-auto">
                        <i onClick={prevSlide} className="las la-angle-left text-2xl left-0 transition-all duration-500 ease-in-out relative opacity-0 group-hover:opacity-100 bg-gray-300 hover:bg-blue-600 hover:text-white p-2 rounded-full cursor-pointer"></i>
                        <i onClick={nextSlide} className="las la-angle-right text-2xl right-0 transition-all duration-500 ease-in-out relative opacity-0 group-hover:opacity-100 bg-gray-300 hover:bg-blue-600 hover:text-white p-2 rounded-full cursor-pointer"></i>
                    </div>
                </div>
            </div>

    )
}


