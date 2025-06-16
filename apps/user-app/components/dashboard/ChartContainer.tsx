"use client"
import { Currency } from "../Currency"
import { GradientDecor } from "../GradientDecor"
import { MaskedText } from "../MaskedText"
import WalletBalanceChart from "./BalanceChart"

export function ChartContainer(){
    return (
        <div className="relative space-y-8 col-span-2 rounded-lg p-4 w-full overflow-hidden bg-gradient-to-t from-accent-main to-accent-light text-[var(--background)]">
            <MaskedText>
                <div className="text-2xl flex items-baseline">
                        <div className="text-neutral-300">
                            Your wallet balance:
                        </div>
                        <div className="font-medium text-4xl ml-2">
                            <Currency>1353</Currency>
                        </div>
                </div>
            </MaskedText>
            <div className="flex">
                <WalletBalanceChart />
                <div className="flex-1 flex flex-col justify-end relative items-end space-y-4 -translate-y-[20px]">
                    <h1 className="font-medium border rounded-md px-4 text-center w-3/4 relative">Timeframe</h1>
                    <div className="space-y-1">
                        <AnalyticWindow>Daily</AnalyticWindow>
                        <AnalyticWindow>Weekly</AnalyticWindow>
                        <AnalyticWindow>Monthly</AnalyticWindow>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AnalyticWindow({ children } :  Readonly<{ children : React.ReactNode }>){
    return (
        <div className="relative group cursor-pointer italic text-right">
            <div className="relative top-6 border-b-2 border-[white] scale-x-0 group-hover:scale-x-100 transition-all" style={{transformOrigin: "left"}} ></div>
            {children}
        </div>
    )
}