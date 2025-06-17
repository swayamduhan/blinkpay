"use client"
import { Dispatch, RefObject, useEffect, useRef, useState, SetStateAction, ChangeEvent } from "react"
import { GradientDecor } from "../GradientDecor"
import { QuickPayContent } from "./quickPayContent"
import axios from "axios"
import { P2PTxnParams } from "../../app/api/pay/route"
import { Loader } from "../Loader"
import { cn } from "../../lib/utils/cn"
import { GreenTick } from "../GreenTick"
import { RenderAmountInput } from "../amountInput"

export function QuickPayMain({ favs, recs, userId }: { favs: any, recs: any, userId: number }){
    const [recipient, setRecipient] = useState<number>(0)
    const recipientDetails = useRef<{
        id: number,
        name: string,
        phone: string
    }>(null)

    return (
        <>
            {recipient ? (
                <PayToRecipient recipient={recipient} recipientDetails={recipientDetails} setRecipient={setRecipient} userId={userId}/>
            ) : (
                <div className="col-span-2 rounded-md h-[400px] relative overflow-hidden p-4 border border-accent-background">
                    <GradientDecor />
                    {/* @ts-ignore */}
                    <QuickPayContent favs={favs} recs={recs} setRecipient={setRecipient} recipientDetails={recipientDetails}/>
                </div>
            )}
        </>
    )
}


function PayToRecipient({ recipient, recipientDetails, setRecipient, userId }: { recipient: number, recipientDetails: RefObject<{id: number, name: string, phone: string} | null>, setRecipient: Dispatch<SetStateAction<number>>, userId: number }){
    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [remarks, setRemarks] = useState<string>("")
    const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "error">("idle")
    const timeout = useRef<NodeJS.Timeout | null>(null)

    async function getRecipientDetails(){
        const res = await axios.post("/api/fetch/recipient", {
            userId: recipient
        })
        setName(res.data.user.name)
        setPhone(res.data.user.phone)
        recipientDetails.current = res.data.user
    }

    useEffect(() => {
        if(!recipientDetails.current && recipient){
            getRecipientDetails()
        }
    }, [])

    function handleRemarksInput(e: any){
        const newInput = e.target.value
        if(newInput.length > 128) return
        setRemarks(newInput)
    }

    async function handlePayment(){
        if(paymentStatus === "processing") return
        // @ts-expect-error
        const amountString = document.getElementById("amount-input")?.value
        if(!amountString) return
        
        const amount = Number(amountString) * 100
        if(isNaN(amount) || amount <= 0) return
        try {
            if(timeout.current) clearTimeout(timeout.current)
            setPaymentStatus("processing")
            const reqBody: P2PTxnParams = {
                userId,
                receiverId: recipient,
                amount
            }
            await axios.post("/api/pay", reqBody)
            setPaymentStatus("success")
            timeout.current = setTimeout(() => {
                setPaymentStatus("idle")
            }, 5000)
            // document.getElementById("amount-title")?.value = ""
        } catch(error) {
            console.log("encountered error in payment holy shit fk this ho")
            setPaymentStatus("error")
            timeout.current = setTimeout(() => {
                setPaymentStatus("idle")
            }, 5000)
        }
    }


    return (
        <div className="col-span-2 flex">
            <div className="w-[30%] p-4 border-l border-t border-b translate-x-2 border-accent-background rounded-md">
                <div className="text-3xl text-neutral-500">Paying to &mdash;</div>
                <div className="mt-4 text-5xl">
                    <div>{recipientDetails.current?.name || name}</div>
                    <div className="text-neutral-500 font-thin">{recipientDetails.current?.phone || phone}</div>
                </div>
                <button onClick={() => setRecipient(0)} className="mt-4 w-fit text-lg px-2 rounded-sm hover:bg-accent-light hover:text-neutral-50 text-accent-main/60 border cursor-pointer">&larr; GO BACK</button>
            </div>
            <div className="col-span-1 flex-1 rounded-md h-[400px] relative overflow-hidden p-4 border border-accent-background">
                <GradientDecor />
                <RenderAmountInput id="amount-input"/>
                <div>
                    <textarea placeholder="Remarks? (Max 128 letters)" rows={3} className="mt-4 overflow-hidden resize-none w-full text-lg text-neutral-600 focus:outline-none" value={remarks} onChange={handleRemarksInput}></textarea>
                </div>
                <button 
                    disabled={paymentStatus === "processing"}
                    className={cn(
                        "group rounded-md px-4 py-2 text-4xl transition-all duration-300 bg-accent-light text-accent-background cursor-pointer flex gap-2 items-center",
                        paymentStatus === "processing" && "pointer-events-none opacity-50",
                        paymentStatus === "success" && "bg-green-300 text-white",
                        paymentStatus === "error" && "bg-red-300 text-white",
                    )}
                    onClick={handlePayment}>
                    <div>Pay to {(recipientDetails.current?.name || name).split(" ")[0]}</div>
                    {paymentStatus === "idle" && 
                        <div className="group-hover:translate-x-1 duration-200 ease-out transition-all will-change-transform">&rarr;</div>
                    }
                    {paymentStatus === "processing" && 
                        <div className="h-8 w-8 scale-175"><Loader /></div>
                    }
                    {paymentStatus === "success" && 
                        <div className="w-8 h-8 scale-150 hue-rotate-30"><GreenTick /></div>
                    }
                </button>
            </div>
        </div>
    )
}
