import prisma from "@blinkpay/db";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

// 1. send txn to bank and get back token
// 2. store token and txn in db
// 3. send user to the banking website for txn
// 4. bank will return status to webhook for updation in db
// 5. push notification or re-render on site

interface OnRampAddParams {
    userId : number;
    amount : string;
    provider : string;
}

export async function POST(req : NextRequest){
    const body : OnRampAddParams = await req.json()

    try {
        // call blinkpay bank to get token
        const res = await axios.post(`${process.env.BANKING_API}/get-token`, {
            amount : body.amount,
        })

        const token = res.data.token

        const txn = await prisma.bank_transactions.create({
            data : {
                user_id : body.userId,
                token : token, 
                amount : body.amount,
                provider : body.provider,
                operation_type : "TOPUP"
            }
        })

        return NextResponse.json({ message : "txn created in db!", txnId : txn.id, redirectUrl : `${process.env.BANKING_API}/pay?token=${token}` }, { status : 200 })
    } catch ( err ) {
        return NextResponse.json({ error : err }, { status : 500 })
    }
}