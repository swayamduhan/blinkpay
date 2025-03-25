import { Currency } from "../Currency"
import { GradientDecor } from "../GradientDecor"
import { MaskedText } from "../MaskedText"
import WalletBalanceChart from "./BalanceChart"

export function ChartContainer(){
    return (
        <div className="relative space-y-8 col-span-2 rounded-lg p-4 w-full overflow-hidden">
            <GradientDecor />
            <MaskedText>
                <div className="text-2xl space-x-2">
                        <span className="text-neutral-600">
                            Your wallet balance:
                        </span>
                        <span className="font-medium text-4xl">
                            <Currency>1353</Currency>
                        </span>
                </div>
            </MaskedText>
            <div className="flex">
                <WalletBalanceChart />
                <div className="flex-1 flex items-center justify-center flex-col -translate-y-[20px] space-y-[20px]">
                    <h1 className="font-medium border rounded-md px-4">Timeframe</h1>
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
        <div className="relative group cursor-pointer italic">
            <div className="relative top-6 border-b-2 border-[#4f46e5] scale-x-0 group-hover:scale-x-100 transition-all" style={{transformOrigin: "left"}} ></div>
            {children}
        </div>
    )
}