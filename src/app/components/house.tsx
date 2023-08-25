
import React from "react";
import Link from "next/link";

export default function House({item}) {
    const getTime = (day: any) => {
        const date = new Date(Date.now() - Date.parse(day));
        return date.getDate() - 1;
    }
    return (
        <Link href={`/property/${item.id}`}>
            <div
                className="bg-white rounded-md hover:shadow-md duration-400 w-full cursor-pointer ng-star-inserted">
                <div className="relative">
                    <div className="flex flex-row items-center gap-1 absolute bottom-2 right-2"><img
                        src="https://anphuocland.com/assets/icons/home/whiteimage.svg" alt=""
                        className="w-[18px]"/><span
                        className="text-white font-semibold"> 1 </span></div>
                    <img className="h-[150px] w-full max-w-full object-cover rounded-t-sm"
                         src={item.thumbnailUrl}/>


                </div>
                <div className="flex flex-col p-3"><h1
                    className="text-sm font-sans font-semibold text-black line-clamp-2 relative h-10"
                    title={item.title}> {item.title}</h1>
                    <div className="flex flex-row items-center gap-2"><span
                        className="text-red-600 text-base truncate font-medium ng-star-inserted">{(item.totalPrice / 1e9).toFixed(1)} tỷ</span><span
                        className="text-gray-500 mb-2">.</span><span
                        className="text-red-600 text-base truncate font-medium">{item.totalArea} m²</span>
                    </div>
                    <div className="truncate flex flex-row items-center gap-1 text-gray-600"><img
                        src="https://anphuocland.com/assets/icons/location.svg" alt=""
                        className="h-4"/><span className="truncate"
                                               title={`${item.communeName}, ${item.districtName}, ${item.provinceName}`}>{item.communeName}, {item.districtName}, {item.provinceName}</span>
                    </div>
                    <div className="flex flex-row justify-between items-center pt-2"><p
                        className="text-sm text-gray-400 cursor-pointer">Đăng {getTime(item.createdOnDate)} ngày
                        trước</p></div>
                </div>
                <div className="flex justify-between items-end pb-3 px-3">
                    <div
                        className="flex flex-row justify-end items-center text-xs text-amber-700"> #{item.propertyTypeString}
                    </div>
                    {item.allowTransaction ? (<p className="py-1 px-2 ng-star-inserted"
                                                 style={{
                                                     backgroundColor: "rgb(59, 130, 246)",
                                                     color: "rgb(255, 255, 255)"
                                                 }}>Đang bán</p>) : (
                        <p className="py-1 px-2 ng-star-inserted"
                           style={{
                               backgroundColor: "rgb(239, 68, 68)",
                               color: "rgb(255, 255, 255)"
                           }}> Ngưng
                            giao dịch </p>
                    )}

                </div>
            </div>
        </Link>
    )
}