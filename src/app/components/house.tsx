
import React from "react";
// @ts-ignore
import Link from "next/link";
export type Items = {
    id: string,
    "title": string,
    "description": string,
    "specificAddress": string,
    "provinceCode": number,
    "provinceName": string,
    "districtCode": number,
    "districtName": string,
    "communeCode": number,
    "communeName": string,
    "thumbnailUrl": string,
    "propertySourceCode": number,
    "propertySource": string,
    "propertySourceString": string,
    "transactionTypeCode": string,
    "propertyTypeCode": string,
    "propertyType": {
        "title": string,
        "code": string
    },
    "propertyTypeString": string,
    "totalArea": number,
    "totalPrice": number,
    "currency": string,
    "totalRooms": number,
    "totalRestrooms": number,
    "totalFloors": number,
    "houseDirectionCode": number,
    "houseDirectionType": string,
    "houseDirectionString": string,
    "balconyDirectionCode": number,
    "balconyDirectionType": string,
    "balconyDirectionString": string,
    "facadeLength": number,
    "wayInLength": number,
    "interior": string,
    "positioning": string,
    "statusCode": string,
    "hasAttachment": boolean,
    "createdByUserId": string,
    "createdOnDate": string,
    "lastModifiedOnDate": string,
    "realImageListUrl": string,
    "virtualImageListUrl": [],
    "documentsImageListUrl": null,
    "view3DImageListUrl": null,
    "videoListUrl": null,
    "ccdvListUrl": null,
    "ownerPhone": null,
    "propertyNo": string,
    "qrCode": null,
    "ownerName": null,
    "village": null,
    "currentUserConnectStatus": null,
    "unitPrice": null,
    "priceDisplayTypeCode": string,
    "priceDisplayType": {
        "title": string,
        "code": string
    },
    "priceDisplayTypeString": string,
    "user": null,
    "hasSendZalo": boolean,
    "numberOfProperty": number,
    "lotNumber": null,
    "mapNumber": null,
    "allowTransaction": boolean,
    "lastPropertyTransaction": null
}

export default function House(props:{item:Items}) {
    const {item} = props
    const getTime = (day: any) => {
        const date = new Date(Date.now() - Date.parse(day));
        return date.getDate() - 1;
    }
    return (
        <Link href={`/property/${item.id}`}>
            <div
                className="bg-white border-2 border-gray-200 rounded-md hover:shadow-md duration-400 w-full cursor-pointer ">
                <div className="relative">
                    <div className="flex flex-row items-center gap-1 absolute bottom-2 right-2"><img
                        src="https://anphuocland.com/assets/icons/home/whiteimage.svg" alt=""
                        className="w-[18px]"/><span
                        className="text-white font-semibold"> {item.virtualImageListUrl.length} </span></div>
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