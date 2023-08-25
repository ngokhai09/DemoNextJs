import {Profiler, useEffect, useState} from "react";
// @ts-ignore
import axios from "axios";
import House from "@/app/components/house";
import LoadMore from "@/app/components/load-more";
import {callback} from "@/app/layout";

type Repo = {
    data: []
}


export default async function ListHouse() {
    // const t1 = performance.now();
    const data = await axios.get("https://anphuocland.com:7100/api/v1/property?filter=%7B%22transactionTypeCode%22:%22SALE%22,%22isHome%22:true%7D");
    // const t2 = performance.now();
    // console.log(`Page took ${t2 - t1}ms`);
    const house = data.data.data.content;
    [...house].splice(0,8)


    return (
        <Profiler id={"list house"} onRender={callback}>
            <div className="max-w-screen-xl mx-auto pt-10 pb-7 px-3 sm:px-10 rounded-md">
                <div className="flex justify-between items-center mb-5"><h3
                    className="text-lg sm:text-2xl font-semibold text-black">Bất động sản dành cho bạn</h3>
                    <div className="hidden xl:flex items-center"><a className="text-black hover:text-slate-400"
                                                                    href="/property/sale">Tin nhà đất bán mới nhất</a>
                        <div className="bg-black px-[0.75px] h-3 mx-2.5"></div>
                        <a className="text-black hover:text-slate-400" href="/property/rent">Tin nhà đất cho thuê mới
                            nhất</a>
                        <div className="bg-black px-[0.75px] h-3 mx-2.5"></div>
                        <a className="text-black flex items-center gap-1 py-1 px-2 hover:bg-gray-200"><span>Mới nhất</span><i
                            className="las text-lg la-sort"></i></a>
                        <div className="bg-black px-[0.75px] h-3 mx-2.5"></div>
                        <a className="text-black flex items-center gap-1 py-1 px-2 hover:bg-gray-200"><span>Giá</span><i
                            className="las text-lg la-sort"></i></a></div>
                </div>
                <div className="ant-spin-container ng-star-inserted">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 overflow-hidden relative">
                        {house && house.map((item: any) => (
                            <House key={item.id} item={item}/>
                        ))}
                        <LoadMore house={[...house].splice(8, 8)}/>
                    </div>
                </div>


            </div>
        </Profiler>
    )
}