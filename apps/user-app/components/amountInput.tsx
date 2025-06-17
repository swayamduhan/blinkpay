"use client"
import { ChangeEvent, useState } from "react"

export function RenderAmountInput({ id }: { id: string }){
    const [amount, setAmount] = useState<string>("")

    function handleAmountChange(e: ChangeEvent<HTMLInputElement>){
        let newAmount = e.target.value
        if (/^\d*\.?\d{0,2}$/.test(newAmount)) {
            setAmount(newAmount)
        }
    }

    const [integerPart, decimalPart] = amount.split(".")

    return (
        <div className="text-8xl flex items-center group">
            <div>$</div>
            <div className="relative">
                <div className="absolute inset-0 pointer-events-none overflow-hidden grid items-center">
                    {amount ? (
                        <div>
                            <span>{integerPart}</span>
                            {integerPart !== amount && <span className="font-thin">.</span>}
                            {decimalPart && <span className="font-thin">{decimalPart}</span>}
                        </div>
                    ) : (
                        <div className="text-neutral-400 -translate-x-[55px] group-hover:translate-x-[0px] duration-300 ease-out">0<span className="text-lg text-accent-main/60">&rarr; ENTER AMOUNT</span></div>
                    )}
                </div>
                <input id={id} type="text" className="focus:outline-none w-full border text-transparent caret-black" value={amount} onChange={(e) => handleAmountChange(e)}/>
            </div>
        </div>
    )
}