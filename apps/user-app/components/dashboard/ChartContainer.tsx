import WalletBalanceChart from "./chart"
import { motion } from "motion/react"

export function ChartContainer(){
    return (
        <div className="space-y-4">
            <div className="text-xl font-medium text-neutral-600">Your wallet balance: $1353</div>
            <div className="flex">
                <WalletBalanceChart />
                <div className="flex-1 flex items-center justify-center flex-col -translate-y-[20px] space-y-[20px]">
                    <h1 className="font-medium border rounded-md px-4">Time Window</h1>
                    <AnalyticWindow>Daily</AnalyticWindow>
                    <AnalyticWindow>Weekly</AnalyticWindow>
                    <AnalyticWindow>Monthly</AnalyticWindow>
                </div>
            </div>
        </div>
    )
}

function AnalyticWindow({ children } :  Readonly<{ children : React.ReactNode }>){
    return (
        <div className="relative group cursor-pointer">
            <div className="relative top-6 border-b-2 border-indigo-500 scale-x-0 group-hover:scale-x-100 transition-all" style={{transformOrigin: "left"}} ></div>
            {children}
        </div>
    )
}