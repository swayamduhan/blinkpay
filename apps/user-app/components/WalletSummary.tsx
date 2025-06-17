"use client"
import { useRef, useState } from "react";
import { GradientDecor } from "./GradientDecor";
import { MaskedText } from "./MaskedText";
import { IconLocationDollar } from "@tabler/icons-react";

export function WalletSummary({ balance, lastTransaction, myname }: { balance: number, lastTransaction: any, myname: string }){

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
                            {showBalance ? `$${(balance/100).toString()}` : "*****"}
                        </span>
                        <span className="text-accent-light text-sm">AVAILABLE BALANCE*</span>
                    </div>
                    <div className="text-4xl font-thin">
                        {myname}
                    </div>
                </div>
                <div className="">
                    <div className="flex gap-2">
                        <div><IconLocationDollar stroke={2} /></div>
                        <div className="text-xl">{lastTransaction.type} <span className="text-2xl">${(lastTransaction.amount / 100).toString()}</span>, {lastTransaction.username}</div>
                    </div>
                    <div className="text-accent-light text-sm">LAST TRANSACTION | <span className="cursor-pointer">REPEAT?</span></div>
                </div>
            </div>
        </div>
    )
}