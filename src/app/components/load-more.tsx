"use client"
import {useState} from "react";
import House from "@/app/components/house";

export default function LoadMore({house}){
    const [isShow, setShow] = useState(false);
    const loadMore = async ()  => {

        setShow(true);
    }
    return (
        <>
            {!isShow ? ( <>
                <div></div>
                <div className="flex justify-center p-5">
                    <button type="button" onClick={loadMore}
                            className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg px-8 py-4 ng-star-inserted"
                    > Mở rộng <i className="las la-angle-down ml-1 font-bold"></i></button>
                </div>
            </>): (
                <>
                {house.map((item)=>(
                    <House item={item}/>
                    ))}
                    <div></div>
                    <div className="flex justify-center p-5">
                        <button type="button"
                                className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg px-8 py-4 ng-star-inserted"
                        > Xem tiếp <i className="las la-angle-down ml-1 font-bold"></i></button>
                    </div>
                </>


            )}

        </>
    )
}