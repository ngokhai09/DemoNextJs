import React from "react";


interface Props {
    title: string,
    children: [],
    content: string,
    isDropdown: boolean
}


export default function DropDownMenu(props: Props) {
    const {title, children, content, isDropdown = true} = props;

    return (
        <>
            <div className="relative inline-block dropdown">
                <span>{title}</span>
                <div
                    className="hidden absolute bg-[#f9f9f9] min-w-[160px] shadow-md shadow-gray-400 pl-[12px] py-1.5 px-1.5 dropdown-content z-50">
                    {children && children.map((item: any) => (
                        <p key={item.id}
                           className={"whitespace-nowrap px-3 min-w-[230px] hover:bg-slate-300 duration-300 text-black cursor-pointer"}>
                            {content + " " + item.title}
                        </p>
                    ))}
                </div>
            </div>

        </>
    )
}