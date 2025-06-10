// user clicks on pay, bank sets its status with a 85% chance of being success as just a mock
// bank pushes the status onto the redis queue deployed on another server
// the workers pick up and send over to webhook service of blinkpay
// if webhook is down, set it again in the queue and retry later

import { grpcClient } from "@/lib/grpc-client";
import { AddTransactionRequest } from "@/lib/main";
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

    const amount = Number(body.amount)
    if(isNaN(amount)) return NextResponse.json({ message: "invalid amount" }, { status: 400 })
    // simulate success
    // const isSuccess = Math.random() < 0.85

    // grpc call to queue-worker
    const requestBody : AddTransactionRequest = {
        token : body.token,
        success : true,
        amount : amount,
        type : "TOPUP"
    }

    try {
        const res = await addTxn(requestBody)
        return NextResponse.json({ message: "Transaction added to queue!", res}, { status: 200 })
    } catch(err) {
        return NextResponse.json({ message: "Transaction failed!", error: err }, { status: 500 })
    }
}

function addTxn(reqBody : AddTransactionRequest): Promise<any> {
    return new Promise((resolve, reject) => {
        grpcClient.addTxnToQueue(reqBody, (err, response) => {
            if(err) return reject(err)
            resolve(response)
        })
    })
}