"use client"
// @ts-ignore
import {Dropdown} from "flowbite-react";
import {useEffect, useState} from "react";
// @ts-ignore
import axios from "axios";

export default function MoreDropDown(){
    const [source, setSource]=useState([])
    useEffect(()=>{
        axios.get("https://anphuocland.com:7100/api/v1/code-type?filter=%7B%22type%22:%22PropertySourceCode%22%7D" ).then((data:any)=>{
            setSource(data.data.data.content)
        })
    }, [])
    return(
        <Dropdown label={"Lọc thêm"} arrowIcon={false}>
            <main  className="bg-white w-80 h-auto shadow rounded-lg space-y-2">
                <section  className="px-4 pt-4">
                    <div  className="mb-6">
                        <div  className="flex items-center w-full space-x-2"><h1
                             className="font-medium mb-2 whitespace-nowrap"> Nguồn hàng </h1>
                            <div  className="w-full h-[1px] bg-gray-100"></div>
                        </div>
                        <div  className="flex flex-wrap gap-2">
                            {source && source.map((item:any)=>(
                                <button
                                    className="rounded-3xl py-2 px-4 bg-gray-100 ng-star-inserted"> {item.title}
                                </button>
                            ))}


                            </div>
                    </div>
                </section>
                <section 
                         className="p-2 flex justify-between items-center border-t border-gray-200">
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