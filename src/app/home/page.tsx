import Search from "@/app/components/search";
import React, {Profiler} from "react";
import ListHouse from "@/app/components/listHouse";
import {callback} from "@/app/layout";

type Repo = {
    name: string
    stargazers_count: number
}



export default function Home() {


    return (
        <main>

            <section>
                <div className={"relative group"}>

                    <div className="absolute z-10 w-full h-0 top-[calc(50%-1.125rem)]">

                        <Profiler id={"Search Bar"} onRender={callback}>
                            <Search></Search>
                        </Profiler>
                    </div>
                </div>
            </section>
            <section className={"pt-[600px]"}>
                 {/*@ts-ignore */}
                    <ListHouse/>

            </section>
        </main>
    )
}