"use client"
import React, {useEffect, useState} from "react";
import House, {Items} from "@/app/components/house";
// @ts-ignore
import axios from "axios";

export default function SuggestHouse(props: { forYou: [] }) {
    const {forYou} = props;
    const [showIndex, setShowIndex] = useState(0)
    const [showArray, setShowArray] = useState([...forYou].splice(0, 3));

    const nextHouse = () => {
        let show = [...showArray];
        show.shift();
        if (showIndex + 3 >= forYou.length) {
            show.push(forYou[forYou.length + 3 - showIndex]);
        } else {
            show.push(forYou[showIndex + 3])
        }
        if (showIndex == forYou.length - 1) {
            setShowIndex(0);
        } else {
            setShowIndex(showIndex + 1)
        }
        setShowArray(show)
    }
    const prevHouse = () => {
        let show = [...showArray];
        show.pop();
        if (showIndex - 1 < 0) {
            show.unshift(forYou[forYou.length - 1 - showIndex])
            setShowIndex(forYou.length - 1 + showIndex)
        } else {
            show.unshift(forYou[showIndex - 1]);
            setShowIndex(showIndex - 1);
        }

        setShowArray(show)
    }
    return (
        <>
            <div className={"md-5"}>
                <div className={"mt-5"}>
                    <div className="flex justify-between">
                        <span className="text-lg font-medium text-black">Bất động sản dành cho bạn</span>
                        <div className="space-x-2"><i onClick={prevHouse}
                                                      className="las la-angle-left text-base border right-0 transition-all duration-500 ease-in-out bg-opacity-0 hover:bg-opacity-80 bg-gray-100 p-2 rounded-md cursor-pointer"></i>
                            <i onClick={nextHouse}
                               className="las la-angle-right text-base border right-0 transition-all duration-500 ease-in-out bg-opacity-0 hover:bg-opacity-80 bg-gray-100 p-2 rounded-md cursor-pointer"></i>
                        </div>
                    </div>
                    <div className={"columns-3"}>
                        {forYou && showArray.map((item: Items) => (
                            <House key={item.id} item={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}