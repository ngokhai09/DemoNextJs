import './globals.css'
// @ts-ignore
import type { Metadata } from 'next'

import Header from "@/app/components/header";
import Footer from "./components/footer";




export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export async function callback(
    id: any,
    phase: any,
    actualDuration: any,
    baseDuration: any,
    startTime: any,
    commitTime: any
) {
    "use server"
    console.log(`${id} took ${actualDuration}ms to render.`);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
    <html lang="en">

      <body >
      {/*@ts-ignore */}
        <Header/>
        {children}
      <Footer/>
      </body>
    </html>

  )
}
