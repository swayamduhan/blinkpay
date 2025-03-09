// user clicks on pay, bank sets its status with a 85% chance of being success as just a mock
// bank pushes the status onto the redis queue deployed on another server
// the workers pick up and send over to webhook service of blinkpay
// if webhook is down, set it again in the queue and retry later

import txnClient from "@/lib/grpc-client";
import { AddTransactionRequest } from "@/lib/proto-gen/proto/AddTransactionRequest";
import { NextRequest, NextResponse } from "next/server";

export interface PayParams {
    token : string;
    amount : string;
}

export async function POST(req : NextRequest) {
    let body : PayParams;
    try {
        body = await req.json()
    } catch {
        return NextResponse.json({ message : "invalid json" }, { status : 400 })
    }
    if (!body.token || !body.amount){
        return NextResponse.json({ message : "invalid request" }, { status : 400 })
    }

    // simulate success
    // const isSuccess = Math.random() < 0.85

    // grpc call to queue-worker
    const requestBody : AddTransactionRequest = {
        token : body.token,
        success : true,
        amount : body.amount,
        type : "TOPUP"
    }

    return new Promise((resolve) => {
        txnClient.AddTxnToQueue(requestBody,(error : any, response : any) => {
            if (error) {
                console.log(error)
                resolve(NextResponse.json({ message : "Transaction failed!", error : error }, { status : 500 }))
            } else {
                resolve(NextResponse.json({ message : "Transaction added to queue!", response : response }, { status : 200 }))
            }
        })

    })
}