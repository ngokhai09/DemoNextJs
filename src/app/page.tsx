
import Header from "@/app/components/header";

export default async function Home() {
    const house = await fetch("https://anphuocland.com:7100/api/v1/property?size=16&page=1&filter=%7B%22transactionTypeCode%22:%22SALE%22,%22isHome%22:true%7D");
    const data = await house.json();
    console.log(data.data.content[0])
    return (
        <main className="flex min-h-screen">

        </main>
    )
}
