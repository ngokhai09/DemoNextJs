"use client"
// @ts-ignore
import {Dropdown} from "flowbite-react";

export default function AreaDropdown(){
    return(
        <Dropdown label={"Diện tích"} arrowIcon={false}>
            <main  className="bg-white w-80 h-auto shadow rounded-lg space-y-2">
                <section 
                         className="px-4 pt-4 pb-2 space-y-2 border-b border-gray-200 ng-star-inserted">
                    <div  className="h-9 flex justify-between items-center"><input
                         min="0" max="100000"
                        className="w-[calc(50%-20px)] float-left h-8 rounded-md text-gray-900 border border-solid border-gray-200 outline-blue-400 text-center px-2 ng-untouched ng-pristine ng-valid"
                        placeholder="Từ"/><img
                                              src="https://anphuocland.com/assets/icons/component/to-right.svg" alt=""
                                              className="h-1/2 aspect-square"/><input  min="0"
                                                                                     max="100000"
                                                                                     className="w-[calc(50%-20px)] float-right h-8 rounded-md text-gray-900 border border-solid border-gray-200 outline-blue-400 text-center px-2 ng-untouched ng-pristine ng-valid !outline-blue-400"
                                                                                     placeholder="Đến"/></div>

                </section>
                
                <section  className="max-h-64 overflow-y-auto scroll-smooth custom-scroll mr-1">
                    <ul  
                        className="ant-dropdown-menu ant-dropdown-menu-root ant-dropdown-menu-light ant-dropdown-menu-vertical">
                        <li  
                            className="h-9 hover:bg-gray-100 flex justify-between cursor-pointer !px-4 active:bg-blue-200 text-black ant-dropdown-menu-item ng-star-inserted">
                            <span  className="my-auto">Dưới 30m²</span></li>
                        <li  
                            className="h-9 hover:bg-gray-100 flex justify-between cursor-pointer !px-4 active:bg-blue-200 text-black ant-dropdown-menu-item ng-star-inserted">
                            <span  className="my-auto">30m² - 50m²</span></li>
                        <li  
                            className="h-9 hover:bg-gray-100 flex justify-between cursor-pointer !px-4 active:bg-blue-200 text-black ant-dropdown-menu-item ng-star-inserted">
                            <span  className="my-auto">50m² - 80m²</span></li>
                        <li  
                            className="h-9 hover:bg-gray-100 flex justify-between cursor-pointer !px-4 active:bg-blue-200 text-black ant-dropdown-menu-item ng-star-inserted">
                            <span  className="my-auto">80m² - 100m²</span></li>
                        <li  
                            className="h-9 hover:bg-gray-100 flex justify-between cursor-pointer !px-4 active:bg-blue-200 text-black ant-dropdown-menu-item ng-star-inserted">
                            <span  className="my-auto">100m² - 150m²</span></li>
                        <li  
                            className="h-9 hover:bg-gray-100 flex justify-between cursor-pointer !px-4 active:bg-blue-200 text-black ant-dropdown-menu-item ng-star-inserted">
                            <span  className="my-auto">150m² - 200m²</span></li>
                        <li  
                            className="h-9 hover:bg-gray-100 flex justify-between cursor-pointer !px-4 active:bg-blue-200 text-black ant-dropdown-menu-item ng-star-inserted">
                            <span  className="my-auto">200m² - 250m²</span></li>
                        <li  
                            className="h-9 hover:bg-gray-100 flex justify-between cursor-pointer !px-4 active:bg-blue-200 text-black ant-dropdown-menu-item ng-star-inserted">
                            <span  className="my-auto">250m² - 300m²</span></li>
                        <li  
                            className="h-9 hover:bg-gray-100 flex justify-between cursor-pointer !px-4 active:bg-blue-200 text-black ant-dropdown-menu-item ng-star-inserted">
                            <span  className="my-auto">300m² - 500m²</span></li>
                        <li  
                            className="h-9 hover:bg-gray-100 flex justify-between cursor-pointer !px-4 active:bg-blue-200 text-black ant-dropdown-menu-item ng-star-inserted">
                            <span  className="my-auto">500m² - 1000m²</span></li>
                        <li  
                            className="h-9 hover:bg-gray-100 flex justify-between cursor-pointer !px-4 active:bg-blue-200 text-black ant-dropdown-menu-item ng-star-inserted">
                            <span  className="my-auto">Trên 1000m²</span></li>
                        </ul>
                </section>
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
                </main>
        </Dropdown>
    )
}