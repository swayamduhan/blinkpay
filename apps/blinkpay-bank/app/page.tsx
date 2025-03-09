import { Button } from "@/components/Button";
import Image from "next/image";

export default async function Home({ searchParams }: { searchParams: { [key: string]: string } }) {
  const params = await searchParams

  let hasParams = true
  if( !params.amount || !params.token ) {
    hasParams = false
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="text-4xl font-black">Blinkpay Bank</header>
      <main className="">
        {
          hasParams ? 
          <>
            <PayComponent params={params}/>
          </>
          :
          <div>
            Params not found! Can't proceed further
          </div>
        }
      </main>
      <footer className="text-neutral-500">All rights reserved &copy; BLINKPAY // 2025</footer>
    </div>
  );
}


function PayComponent({ params } : { params : {
  [key : string] : string
}}){
  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="text-xl">Amount: {params.amount}</div>
      <Button params={params}/>
    </div>
  )
}