"use client"
import { useState } from "react";
import { RenderAmountInput } from "../amountInput";
import { GradientDecor } from "../GradientDecor";
import { MaskedText } from "../MaskedText";
import { cn } from "../../lib/utils/cn";
import axios from "axios";
import { OnRampAddParams } from "../../app/api/onramp/add/route";

interface BankingProvider {
    bankName: string;
    bankUrl: string
}

const providers: BankingProvider[] = [
    {
        bankName: "BlinkPay Bank",
        bankUrl: process.env.NEXT_PUBLIC_BANKING_URL || "http://localhost:3001"
    },
    {
        bankName: "SD Bank",
        bankUrl: process.env.NEXT_PUBLIC_BANKING_URL || "http://localhost:3001"
    }
]

export function AddMoney({ userId }: { userId: number }){
    const [provider, setProvider] = useState<BankingProvider | null>(null)

    function handleClear(){
        setProvider(null)

        //  TODO: figure out a way to still keep parent in quickpay as server side yet be able to manipulate values here
        const input = document.getElementById("addmoney-input") as HTMLInputElement | null
        if(input) {
            input.value = ""
        }
    }

    async function handleAddMoney(){
        if(!provider) return
        const input = document.getElementById("addmoney-input") as HTMLInputElement | null
        if(!input) return

        const amount = Math.round(Number(input?.value) * 100)
        if(isNaN(amount) || amount <= 0) return

        try {
            const reqBody : OnRampAddParams = {
                userId,
                amount,
                provider: provider.bankName
            }
            const res = await axios.post("/api/onramp/add", reqBody)
            const url = res.data.redirectUrl
            if(url){
                window.open(url, "_blank")
            } else {
                console.error("redirect url not found in response")
            }
        } catch(error){
            console.error(error)
        }
    }

    return (
        <div className="col-span-2 relative rounded-md h-[400px] overflow-hidden p-4 border border-accent-background">
            <GradientDecor />
            <div className="text-3xl">
                <MaskedText>
                    Add money to wallet
                </MaskedText>
            </div>
            <div className="">
                <RenderAmountInput id="addmoney-input"/>
                <RenderProviderDropdown provider={provider} setProvider={setProvider}/>
            </div>
            <div className="absolute bottom-0 right-0 flex">
                <button 
                    className={cn(
                        "group px-4 py-2 text-4xl transition-all duration-300 bg-red-400 text-accent-background cursor-pointer flex gap-2 items-center mt-8",
                    )}
                    onClick={handleClear}
                    >
                    <div>Clear</div>
                </button>
                <button 
                    className={cn(
                        "group px-4 py-2 text-4xl transition-all duration-300 bg-accent-light text-accent-background cursor-pointer flex gap-2 items-center mt-8",
                    )}
                    onClick={handleAddMoney}
                    >
                    <div>Add Money</div>
                </button>
            </div>
        </div>
    )
}

function RenderProviderDropdown({ provider, setProvider }: { provider: any, setProvider: any}){
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="w-[400px] mt-12" onClick={() => setIsOpen(!isOpen)}>
            <div className={cn("w-full h-[40px] relative group border-b-2 cursor-pointer border-accent-main/60", isOpen && "border-0")}>
                <div className={cn(
                    "absolute inset-0 pointer-events-none text-accent-main/60 text-lg flex gap-1",
                    !provider && "group-hover:gap-2 duration-200 ease-out",
                    provider && "text-sm -translate-y-[100%] h-fit"
                )}>
                    <div className={cn(
                        "h-fit duration-300 ease-out",
                        !provider && "group-hover:rotate-180 "
                    )}>&darr;</div>
                    <div>SELECT BANKING PROVIDER</div>
                </div>
                <div className="text-xl h-full w-full translate-y-[20%] translate-x-[3%]">{provider && provider.bankName}</div>
            </div>
            <div className={cn(
                "border-2 border-accent-main/60 rounded-md overflow-hidden",
                !isOpen && "hidden"
            )}>
                {providers.map((prov, idx) => {
                    if(provider?.bankName === prov.bankName) return
                    return <div key={`bank-provider-${idx}`} className={cn("p-2 text-xl cursor-pointer hover:bg-accent-background", idx != providers.length - 1 && "border-b border-neutral-300")} onClick={() => setProvider(prov)}>{prov.bankName}</div>
                })}
            </div>
        </div>
    )
}