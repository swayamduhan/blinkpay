import prisma from "@blinkpay/db";
import { NextRequest, NextResponse } from "next/server";

// 1. send txn to bank and get back token
// 2. store token and txn in db
// 3. send user to the banking website for txn
// 4. bank will return status to webhook for updation in db
// 5. push notification or re-render on site

// point 2 needs to be done here

interface OnRampAddParams {
    userId : number;
    token : string;
    amount : number;
    provider : string;
}

export async function POST(req : NextRequest){
    const body : OnRampAddParams = await req.json()

    try {
        const txn = await prisma.bankTransaction.create({
            data : {
                userId : body.userId,
                token : body.token, 
                amount : body.amount / 100,
                provider : body.provider,
                operationType : "TOPUP"
            }
        })

        return NextResponse.json({ message : "txn created in db!", txnId : txn.id }, { status : 200 })
    } catch ( err ) {
        return NextResponse.json({ error : err }, { status : 500 })
    }
}