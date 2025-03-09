"use client"

import { sendPayRequest } from "@/lib/actions/send_pay_request"
import { useState } from "react"

export function Button({ params } : { params : { [key: string] : string }}){
    const [loading, setLoading] = useState(false)
    return (
        <button
            className={`px-14 py-4 border text-lg text-black bg-white hover:text-white hover:bg-black/30 hover:border-transparent ${loading ? "pointer-events-none" : "cursor-pointer"}`}
            onClick={()=>sendPayRequest(params.token, params.amount, setLoading)}
        >
            {loading? "Processing..." : "Pay"}
        </button>
    )
}