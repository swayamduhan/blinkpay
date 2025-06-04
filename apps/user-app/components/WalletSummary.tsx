"use client"
import { useRef, useState } from "react";
import { GradientDecor } from "./GradientDecor";
import { MaskedText } from "./MaskedText";

export function WalletSummary(){

    const [showBalance, setShowBalance] = useState(false)
    return (
        <div className="rounded-md h-[400px] overflow-hidden relative p-4 border border-accent-background">
            <GradientDecor />
            <div className="text-3xl">
                <MaskedText>
                    Account Summary
                </MaskedText>
            </div>
            <div className="mt-4 space-y-4">
                <div>
                    <div className="">
                        <span className="text-6xl tracking-tighter font-thin cursor-pointer" onClick={() => setShowBalance(!showBalance)}>
                            {showBalance ? "$879" : "*****"}
                        </span>
                        <span className="text-accent-light text-sm">AVAILABLE BALANCE*</span>
                    </div>
                    <div className="text-4xl font-thin">
                        Mr. Swayam Duhan
                    </div>
                </div>
                <div className="">
                    <div className="flex gap-2 items-baseline">
                        <div><DollarTransact /></div>
                        <div className="text-xl">Sent <span className="text-2xl">$120</span>, Yves</div>
                    </div>
                    <div className="text-accent-light text-sm">LAST TRANSACTION | <span className="cursor-pointer">REPEAT?</span></div>
                </div>
            </div>
        </div>
    )
}

function DollarTransact(){
    return (
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.7"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-location-dollar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13.08 20.162l-3.08 -6.162l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-2.55 7.063" /><path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" /><path d="M19 21v1m0 -8v1" /></svg>
    )
}