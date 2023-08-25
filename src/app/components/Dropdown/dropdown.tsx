"use client"
import React, {useState} from "react";


interface Props {
    title: string,
    children: [],
    content: string,
    isDropdown: boolean
}

export default function DropDownMenu(props: Props) {
    const {title, children, content, isDropdown = true} = props;
    const [isOpen, setOpen] = useState(false);
    const changeStatus = () => {
        setOpen(prev => !prev);
    }
    return (
        <>
            <li className={"cursor-pointer text-black ant-menu-submenu ant-menu-submenu-horizontal dropdown indent-0"}
                onMouseOver={changeStatus} onMouseOut={changeStatus}
                tabIndex={0}>
                <div className={"ant-menu-submenu-title"}>
                    <div className={"flex justify-between items-center ng-star-inserted"}>
                        <div className={"group relative"}>
                            <span>{title}</span>
                            <div id={"slider"}
                                 className={"z-10 h-[0.1rem] w-0 group-hover:w-full absolute left-1/2 -translate-x-1/2 bg-red-600 duration-200 ease-in translate-y-1"}>
                            </div>
                        </div>
                        {isDropdown && (
                            <i className={"pl-1"}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                    <path
                                        d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                                </svg>
                            </i>)}
                    </div>
                </div>
                {isOpen && (
                    <ul className={"absolute w-fit text-sm bg-white rounded shadow-xl py-13"} style={{zIndex: '99999'}}>
                        {children && children.map((item: any) => (
                            <li className={"whitespace-nowrap px-4 min-w-[230px] hover:bg-slate-100 duration-300 text-black cursor-pointer ant-menu-submenu ant-menu-submenu-vertical ng-star-inserted"}>

                                <div className="ant-menu-submenu-title"><p
                                    className="flex justify-between items-center ng-star-inserted"> {content + " " + item.title}
                                </p>
                                    <span className="ant-menu-submenu-arrow ng-star-inserted"></span></div>
                            </li>

                        ))}
                    </ul>
                )}
            </li>


        </>
    )
}