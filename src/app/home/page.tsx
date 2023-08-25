
import Search from "@/app/components/search";
import React, {useEffect, useState} from "react";
import DefaultCarousel from "@/app/components/Carouel/carosel";
import ListHouse from "@/app/components/listHouse";
import {GetStaticProps} from "next";
type Repo = {
    name: string
    stargazers_count: number
}


export default function Home() {
    let t1, t2;
    return (
        <main>

            <section>
                <div className={"relative group"}>

                    <div className="absolute z-10 w-full h-0 top-[calc(50%-1.125rem)]">

                        <Search></Search>
                    </div>
                </div>
            </section>
            <section className={"pt-[600px]"}>
                {/*{t1 = performance.now()}*/}
                <ListHouse/>
                {/*{t2 = performance.now()}*/}
                {/*{( " - "+ t2 + " - " + t1) + "ms"}*/}
            </section>
        </main>
    )
}