"use client"
import React from "react";
// @ts-ignore
import { Dropdown, DropdownItemProps } from 'flowbite-react';
// @ts-ignore
import {DropdownItem} from "flowbite-react/lib/esm/components/Dropdown/DropdownItem";

export default function HouseTypeDropdown() {

    return (
        <>
           <Dropdown inline arrowIcon={false} label={<>
               <img src="https://anphuocland.com/assets/icons/home.svg" alt="" className="h-4 w-4"/>
               <span className="grow text-left text-black pl-2 w-11/12">Loại nhà đất</span>
           </>}>
               <DropdownItem className="flex gap-3 py-1.5 px-3 border-b border-gray-100 active:bg-blue-200 ant-dropdown-menu-item ng-star-inserted">
                       <img alt="" className="h-4 w-4 ng-star-inserted" src="https://anphuocland.com/assets/icons/home/icon/land.svg"/>
                   <span
                           className="grow">Đất</span>
               </DropdownItem>
               <DropdownItem className="flex gap-3 py-1.5 px-3 border-b border-gray-100 active:bg-blue-200 ant-dropdown-menu-item ng-star-inserted">
                   <img alt="" className="h-4 w-4 ng-star-inserted" src="https://anphuocland.com/assets/icons/home/icon/house.svg"/>
                   <span
                       className="grow">Nhà ở</span>
               </DropdownItem>
               <DropdownItem className="flex gap-3 py-1.5 px-3 border-b border-gray-100 active:bg-blue-200 ant-dropdown-menu-item ng-star-inserted">
                   <img alt="" className="h-4 w-4 ng-star-inserted" src="https://anphuocland.com/assets/icons/home/icon/building.svg"/>
                   <span
                       className="grow">Căn hộ, chung cư</span>
               </DropdownItem>
               <DropdownItem className="flex gap-3 py-1.5 px-3 border-b border-gray-100 active:bg-blue-200 ant-dropdown-menu-item ng-star-inserted">
                   <img alt="" className="h-4 w-4 ng-star-inserted" src="https://anphuocland.com/assets/icons/home/icon/warehouse.svg"/>
                   <span
                       className="grow">Kho, xưởng</span>
               </DropdownItem>

           </Dropdown>
        </>
    )
}