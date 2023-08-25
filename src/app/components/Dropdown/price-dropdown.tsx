"use client"
// @ts-ignore
import {Dropdown} from "flowbite-react";
import {useState} from "react";

export default function PriceDropdown() {
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(0);
    const [value, setValue] = useState(0);
    const addCommas = (num: any) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const removeNonNumeric = (num: any) => num.toString().replace(/[^0-9]/g, "");
    const changeValue = (e:any)=>{
        setValue(addCommas(removeNonNumeric(e.target.value)));
    }
    return (
        <Dropdown inline label={"Mức giá"} className={"w-70"} arrowIcon={false}>
            <section
                className="px-4 pt-4 pb-2 space-y-2 border-b border-gray-200 ng-star-inserted">
                <div className="h-9 flex justify-between items-center"><input value={from}
                    min="0" max="100000000000"
                    className="w-[calc(50%-20px)] float-left h-8 rounded-md text-gray-900 border border-solid border-gray-200 outline-blue-400 text-center px-2 "
                    placeholder="Từ"/><img src="https://anphuocland.com/assets/icons/component/to-right.svg"
                                           alt="" className="h-1/2 aspect-square"/><input min="0" value={to}
                                                                                          max="100000000000"

                                                                                          className="w-[calc(50%-20px)] float-right h-8 rounded-md text-gray-900 border border-solid border-gray-200 outline-blue-400 text-center px-2 !outline-red-400 "
                                                                                          placeholder="Đến"/></div>
            </section>
            <Dropdown.Divider/>
            <section  className="max-h-64 overflow-y-auto scroll-smooth custom-scroll mr-1">
                <ul  
                    className="ant-dropdown-menu ant-dropdown-menu-root ant-dropdown-menu-light ant-dropdown-menu-vertical">
                    <li  
                        className="h-9 hover:bg-gray-100 flex justify-between cursor-pointer !px-4 active:bg-blue-200 text-black ant-dropdown-menu-item ng-star-inserted">
                        <span  className="my-auto">Dưới 500 triệu</span></li>
                    <li  
                        className="h-9 hover:bg-gray-100 flex justify-between cursor-pointer !px-4 active:bg-blue-200 text-black ant-dropdown-menu-item ng-star-inserted">
                        <span  className="my-auto">500 - 800 triệu</span></li>
                    <li  
                        className="h-9 hover:bg-gray-100 flex justify-between cursor-pointer !px-4 active:bg-blue-200 text-black ant-dropdown-menu-item ng-star-inserted">
                        <span  className="my-auto">800 triệu - 1 tỷ</span></li>
                    <li  
                        className="h-9 hover:bg-gray-100 flex justify-between cursor-pointer !px-4 active:bg-blue-200 text-black ant-dropdown-menu-item ng-star-inserted">
                        <span  className="my-auto">1- 2 tỷ</span></li>
                    <li  
                        className="h-9 hover:bg-gray-100 flex justify-between cursor-pointer !px-4 active:bg-blue-200 text-black ant-dropdown-menu-item ng-star-inserted">
                        <span  className="my-auto">2- 3 tỷ</span></li>
                    <li  
                        className="h-9 hover:bg-gray-100 flex justify-between cursor-pointer !px-4 active:bg-blue-200 text-black ant-dropdown-menu-item ng-star-inserted">
                        <span  className="my-auto">3 - 5 tỷ</span></li>
                    <li  
                        className="h-9 hover:bg-gray-100 flex justify-between cursor-pointer !px-4 active:bg-blue-200 text-black ant-dropdown-menu-item ng-star-inserted">
                        <span  className="my-auto">5 - 7 tỷ</span></li>
                    <li  
                        className="h-9 hover:bg-gray-100 flex justify-between cursor-pointer !px-4 active:bg-blue-200 text-black ant-dropdown-menu-item ng-star-inserted">
                        <span  className="my-auto">7 - 10 tỷ</span></li>
                    <li  
                        className="h-9 hover:bg-gray-100 flex justify-between cursor-pointer !px-4 active:bg-blue-200 text-black ant-dropdown-menu-item ng-star-inserted">
                        <span  className="my-auto">10 - 20 tỷ</span></li>
                    <li  
                        className="h-9 hover:bg-gray-100 flex justify-between cursor-pointer !px-4 active:bg-blue-200 text-black ant-dropdown-menu-item ng-star-inserted">
                        <span  className="my-auto">20 - 30 tỷ</span></li>
                    </ul>
            </section>
            <Dropdown.Divider />
            <section 
                     className="p-2 flex justify-between items-center border-t border-gray-200 ng-star-inserted">
                <button 
                        className="bg-white px-3 h-8 rounded-md hover:bg-gray-200 inline-flex items-center gap-1 justify-center font-medium">
                    <img  src="https://anphuocland.com/assets/icons/component/sync.svg" alt=""
                         className="h-2/3 aspect-square"/><span >Đặt lại</span></button>
                <button
                        className="bg-red-600 text-white px-4 h-8 rounded-md hover:!bg-red-400 inline-flex items-center gap-1 justify-center font-medium ant-dropdown-menu-item"> Áp
                    dụng
                </button>
            </section>
        </Dropdown>
    )
}