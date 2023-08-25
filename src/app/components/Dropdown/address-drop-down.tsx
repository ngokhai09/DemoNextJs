"use client"
// @ts-ignore
import {DropdownItem} from "flowbite-react/lib/esm/components/Dropdown/DropdownItem";
// @ts-ignore
import {Button, Dropdown, Tooltip} from 'flowbite-react';
import React, {useState} from "react";
// @ts-ignore
import {DropdownHeader} from "flowbite-react/lib/esm/components/Dropdown/DropdownHeader";

export default function AddressDropDown() {
    const [city, setCity] = useState("Haf Nooij");
    const [district, setDistrict] = useState("");
    const [ward, setWard] = useState("");
    const [address, setAddress] = useState("Toàn quốc")
    return (
        <Dropdown inline arrowIcon={false} label={<>
            <span className="truncate mr-3 border-0">{address}</span>

        </>} className={"w-2/6 focus:border-0"}>
            <DropdownHeader>
                Khu vực
            </DropdownHeader>
            <DropdownItem className={"w-full"}>
                <button
                    className="h-14 w-full pl-4 pr-2 border border-gray-300 rounded-lg flex justify-between items-center active:bg-blue-200">
                    <div className="text-left"><p>Tỉnh/Thành</p><p
                        className="font-medium text-black text-base"></p></div>
                    <img src="https://anphuocland.com/assets/icons/component/right.svg" alt=""
                         className="h-2/3 aspect-square p-1 ng-star-inserted"/></button>
            </DropdownItem>
            <DropdownItem className={"w-full"}>

                <button className={`h-14 w-full pl-4 pr-2 border border-gray-300 rounded-lg flex justify-between items-center active:bg-blue-200 ${city !== ""? "":"cursor-not-allowed"}`}>
                    <div className="flex justify-between w-full text-left text-black font-[400]">
                        <p className={"flex"}>Quận/Huyện</p>
                        <p className="text-black flex justify-end">
                            <img  src="https://anphuocland.com/assets/icons/component/right.svg" alt="" className="h-10 w-10 aspect-square p-1 ng-star-inserted"/>
                        </p>
                    </div>
                    </button>


            </DropdownItem>
            <DropdownItem >
                <button
                    className="h-14 w-full pl-4 pr-2 border border-gray-300 rounded-lg flex justify-between items-center active:bg-blue-200 cursor-not-allowed">
                    <div className="text-left"><p>Phường/Xã</p><p
                        className="font-medium text-black text-base"></p></div>
                    <img src="https://anphuocland.com/assets/icons/component/right.svg" alt=""
                         className="h-2/3 aspect-square p-1 ng-star-inserted"/></button>
            </DropdownItem>
            <Dropdown.Divider/>
            <button
                className="bg-white px-3 h-8 rounded-md hover:bg-gray-200 inline-flex items-center gap-1 justify-center font-medium">
                <img src="https://anphuocland.com/assets/icons/component/sync.svg" alt=""
                     className="h-2/3 aspect-square"/><span>Đặt lại</span></button>
            <button
                className="ml-20 bg-red-600 text-white px-4 h-8 rounded-md hover:!bg-red-400 inline-flex items-center gap-1 justify-center font-medium ant-dropdown-menu-item">
                Áp dụng
            </button>

        </Dropdown>
    )
}