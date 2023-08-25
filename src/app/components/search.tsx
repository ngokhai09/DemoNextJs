

import React, {useEffect, useState} from "react";
// @ts-ignore
import axios from "axios";
import HouseTypeDropdown from "@/app/components/Dropdown/house-type-dropdown";
import AddressDropDown from "@/app/components/Dropdown/address-drop-down";
import PriceDropdown from "@/app/components/Dropdown/price-dropdown";
import AreaDropdown from "@/app/components/Dropdown/area-dropdown";
import MoreDropDown from "@/app/components/Dropdown/more-dropdown";
// @ts-ignore
import {Carousel} from "flowbite-react";
import DefaultCarousel from "@/app/components/Carouel/carosel";


export default function Search() {

    const img = [
        {
            url: "https://list.vn/wp-content/uploads/2021/01/1_image7-1.png"
        }, {
            url: "https://static1.cafeland.vn/cafelandData/upload/tintuc/thitruong/2016/07/tuan-01/dubai-2-1467643985.jpg"
        }, {
            url: "https://s3.cloud.cmctelecom.vn/tinhte2/2020/01/4875839_united_arab_emirates_skyscrapers_dubai_megapolis-wallpaper-1920x1080.jpg"
        }
    ]
    return (
        <>
            <script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>
            <div
                className="backdrop-invert-0 max-w-screen-sm md:max-w-screen-md lg:max-w-[900px] absolute z-10 top-8 mx-auto left-0 right-0">
                <ul className="flex h-8 w-full space-x-2">
                    <li className="flex items-center hover:bg-gray-900/80 hover:text-white text-gray-700 font-medium rounded-t text-center px-8 cursor-pointer bg-gray-900/80 text-white">
                        <span>Nhà đất bán</span></li>
                    <li className="flex items-center hover:bg-gray-900/80 hover:text-white text-gray-700 font-medium rounded-t text-center px-8 cursor-pointer">
                        <span>Nhà đất cho thuê</span></li>
                </ul>
                <div className="p-4 bg-gray-900/80 rounded-b rounded-tr shadow-xl">
                    <div className="flex h-10">
                        <button
                            className="ant-dropdown-trigger flex items-center justify-between px-1 w-48 bg-white border-r border-gray-200 rounded-l-lg">
                            <HouseTypeDropdown/>
                            <i className="las text-xs h-6 w-6 p-1.5 la-angle-down"></i>
                        </button>

                        <div className="relative grow"><input id="search"
                                                              className="w-full !h-full p-3 text-sm text-gray-900 rounded-tr-lg rounded-br-lg focus:outline-none ng-untouched ng-pristine ng-valid"
                                                              placeholder="Tìm kiếm theo tên nhà đất cho thuê..."/>
                            <button
                                className="h-2/3 text-white absolute top-1/2 -translate-y-1/2 px-3 right-2 bg-red-500 font-medium rounded text-sm hover:bg-red-400 flex items-center space-x-2">
                                <img src="https://anphuocland.com/assets/icons/home/icon/search-white.svg" alt=""
                                     className="h-1/2"/><span>Tìm kiếm</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center items-end gap-4 mt-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                            <p
                                className="rounded w-full h-8 text-white border-2 border-rose-500 flex justify-between items-center px-3">
                                <AddressDropDown/>

                                <span className="anticon !text-xs text-gray-400 anticon-down"><svg
                                    viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em"
                                    height="1em"
                                    data-icon="down" aria-hidden="true"><path
                                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
                            </span>
                            </p>
                            <button
                                className="ant-dropdown-trigger rounded w-full h-8 text-white border border-white flex justify-between items-center px-3">
                                <PriceDropdown></PriceDropdown>
                                <span
                                    className="anticon !text-xs text-gray-400 anticon-down"><svg
                                    viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em"
                                    height="1em"
                                    data-icon="down" aria-hidden="true"><path
                                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></span>
                            </button>
                            <button
                                className="ant-dropdown-trigger rounded w-full h-8 text-white border border-white flex justify-between items-center px-3">
                                <AreaDropdown/><span
                                className="anticon !text-xs text-gray-400 anticon-down"><svg
                                viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em"
                                data-icon="down" aria-hidden="true"><path
                                d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></span>
                            </button>
                            <button
                                className="ant-dropdown-trigger rounded w-full h-8 text-white border border-white flex justify-between items-center px-3">
                                <MoreDropDown/><span
                                className="anticon !text-xs text-gray-400 anticon-down"><svg
                                viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em"
                                data-icon="down" aria-hidden="true"><path
                                d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></span>
                            </button>
                        </div>
                        <img src="https://anphuocland.com//assets/icons/component/sync.svg" alt=""
                             className="h-7 w-7 bg-white rounded-full cursor-pointer hover:opacity-80 active:bg-blue-200"/>
                    </div>
                </div>
            </div>
            <div className={"w-screen h-[600px] py-2 relative"}>

                <DefaultCarousel img={img}/>
            </div>
        </>
    )
}