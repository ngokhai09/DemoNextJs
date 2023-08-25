
import React from "react";
// @ts-ignore
import axios from "axios";
import HouseImage from "@/app/components/Carouel/house-image";
import SuggestHouse from "@/app/components/Carouel/suggest-house";

type Params = {
    params: {
        id: string
    }
}
export default async function Page({params: {id}}: Params) {
    const data = await axios.get(`https://anphuocland.com:7100/api/v1/property/${id}`);
    const house = data.data.data;
    const img = house.virtualImageListUrl;


    return (
        <main className={"h-fit grid grid-cols-3"}>
            <div></div>
            <div className={"h-fit w-full cursor-pointer"}>
                <HouseImage img={img}/>
                <div>
                    <div className="flex flex-col gap-2 mt-2">
                        <div className="flex"><h5 className="line-clamp-1"><span
                            className="text-gray-400 font-normal ng-star-inserted"> Bán / {house.provinceName} / {house.districtName} / </span> {house.title}
                        </h5></div>
                        <div className="mt-2"><span className="text-xl font-semibold text-gray-900">{house.title}</span>
                        </div>
                        <div><span
                            className="text-lg text-gray-900 font-normal"> {house.communeName}, {house.provinceName}, {house.districtName} </span>
                        </div>
                        <div className="mt-5">
                            <div className="border-2 border-t-2 border-gray-200">
                                <div className="grid grid-cols-5 my-2">
                                    <div><span className="text-sm text-gray-500 font-normal">Ngày đăng</span><br/><span
                                        className="text-sm text-gray-900 font-semibold">{new Date(house.createdOnDate).toLocaleDateString("en-GB")}</span>
                                    </div>
                                    <div><span className="text-sm text-gray-500 font-normal">Loại hình</span><br/><span
                                        className="text-sm text-gray-900 font-semibold ng-star-inserted">{house.transactionTypeCode == "SALE" ? "Bán" : ""} </span>
                                    </div>
                                    <div><span
                                        className="text-sm text-gray-500 font-normal">Loại bất động sản</span><br/><span
                                        className="text-sm text-gray-900 font-semibold">{house.propertyTypeString}</span>
                                    </div>
                                    <div></div>
                                    <div className="justify-end flex"></div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 gap-1 border-t border-b border-gray-200">
                            <div className="col-span-1">
                                <div className="mt-2"><label className="text-sm text-gray-400 font-normal">Mức
                                    giá</label></div>
                                <div className="mt-1"><span
                                    className="text-sm text-gray-900 font-semibold ng-star-inserted">{(house.totalPrice / 1e9).toFixed(1)} tỷ VND</span>
                                </div>
                                <div className="mt-1 mb-2"><span
                                    className="text-sm text-gray-400 font-normal ng-star-inserted"> ~{(house.totalPrice / house.totalArea / 1e6).toFixed(1)} triệu /m²</span>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="mt-2"><label className="text-sm text-gray-400 font-normal">Diện
                                    tích</label></div>
                                <div className="mt-1"><span
                                    className="text-sm text-gray-900 font-semibold"> {house.totalArea} m²</span></div>
                            </div>
                            <div className="col-span-1">
                                <div className="mt-2"><span
                                    className="text-sm text-gray-500 font-normal">Mã tin</span><br/></div>
                                <div className="mt-1"><span
                                    className="text-sm text-gray-900 font-semibold">{house.propertyNo}</span>
                                    <button className="ml-1"><i className="las la-copy text-red-900"></i>
                                    </button>
                                </div>
                            </div>
                            <div></div>
                            <div className="justify-end flex mt-2">
                            </div>
                        </div>
                        <div className="mt-5"><span className="text-lg font-medium text-gray-900">Thông tin mô tả</span>
                        </div>
                        <span
                            className="text-sm text-gray-900 font-normal whitespace-pre-line"> {house.description}</span>

                    </div>

                    <SuggestHouse/>
                </div>
            </div>
        </main>
    )
}