"use client"
import { useState } from "react";
import { RenderAmountInput } from "../amountInput";
import { GradientDecor } from "../GradientDecor";
import { MaskedText } from "../MaskedText";
import { cn } from "../../lib/utils/cn";

interface BankingProvider {
    bankName: string;
    bankUrl: string
}

const providers: BankingProvider[] = [
    {
        bankName: "BlinkPay Bank",
        bankUrl: process.env.NEXT_BANKING_URL || "http://localhost:3001"
    },
    {
        bankName: "SD Bank",
        bankUrl: process.env.NEXT_BANKING_URL || "http://localhost:3001"
    }
]

export function AddMoney(){
    const [provider, setProvider] = useState<BankingProvider | null>(null)
    return (
        <div className="col-span-2 rounded-md h-[400px] relative overflow-hidden p-4 border border-accent-background">
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
                    return <div className={cn("p-2 text-xl cursor-pointer hover:bg-accent-background", idx != providers.length - 1 && "border-b border-neutral-300")} onClick={() => setProvider(prov)}>{prov.bankName}</div>
                })}
            </div>
        </div>
    )
}