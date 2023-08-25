"use client"
import React, {useState} from "react";

export default function HouseImage({img}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? img.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex == img.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    const setSlide = (index) => {
        setCurrentIndex(index);
    }
    return (
        <>
            <div style={{backgroundImage: `url("${img ? img[currentIndex] : ''}")`}}
                 className={"flex w-full h-96 bg-no-repeat bg-cover duration-500 relative"}>
                <div className="absolute z-10 w-full h-0 content-center ">
                    <div className="flex justify-between content-center">
                        <div className="h-[383px] flex backdrop-blur-lg seft-center" onClick={prevSlide}>
                            <i className="text-white text-4xl w-8 text-center las la-angle-left content-center"></i>
                        </div>
                        <div className="h-[383px] flex backdrop-blur-lg content-center" onClick={nextSlide}>
                            <i className="text-white text-4xl w-8 text-center las la-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/*TODO*/}
                <div className={"grid grid-cols-6 m-1"}>
                    {img && img.map((item: {}, index: number) => (
                        <div className={"cursor-pointer m-1"} onClick={() => {
                            setCurrentIndex(index)
                        }}>
                            <img className="object-cover h-20 w-full"
                                 src={`${item}`}/>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}