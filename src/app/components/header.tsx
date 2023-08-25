
import React from "react";
// @ts-ignore
import axios from "axios";
import DropDownMenu from "@/app/components/Dropdown/dropdown";
// @ts-ignore
import Link from "next/link";

export default async function Header() {
    const data = await axios.get("https://anphuocland.com:7100/api/v1/code-type?filter=%7B%22type%22:%22PropertyTypeCode%22%7D");
    const homeType = data.data.data.content;

    return (

        <div className={"flex justify-between items-center h-20 pl-8 pr-4 text-black w-screen"}>
            <script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>

            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css"
                  integrity="sha512-vebUliqxrVkBy3gucMhClmyQP9On/HAWQdKDXRaAlb/FKuTbxkjPKUyqVOxAcGwFDka79eTF+YXwfke1h3/wfg=="
                  crossOrigin="anonymous" referrerPolicy="no-referrer"/>
            <div className={"flex items-center gap-x-10"}>
                <Link href={"/home"}>
                    <img src="https://anphuocland.com/assets/icons/imgpsh_fullsize_anim.svg"
                         className={"h-14 cursor-pointer"} alt="NMD" tabIndex={0}/>
                </Link>
                <ul className={"text-sm font-semibold hidden xl:flex gap-x-8 ant-menu ant-menu-root ant-menu-light ant-menu-horizontal"}>

                    <DropDownMenu title={"Nhà đất bán"} content={"Bán"} children={homeType} isDropdown={true}/>
                    <DropDownMenu title={"Nhà đất cho thuê"} content={"Cho thuê"} children={homeType} isDropdown={true}/>
                </ul>
            </div>
            <div className={"flex items-center justify-end h-3/5 text-sm font-semibold gap-4"}>
                <div className={"hidden xl:block"}>
                    <button className={"pr-4 hover:bg-slate-50 rounded-lg duration-300 p-4"}>
                        Đăng nhập
                    </button>
                    <span className="bg-gray-300 px-[0.5px]"></span>
                    <button className={"pr-4 hover:bg-slate-50 rounded-lg duration-300 p-4"}>
                        Đăng ký
                    </button>
                </div>
            </div>
        </div>
    )

}