
import prisma from "@blinkpay/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest) : Promise<NextResponse> {
    const { searchParams } = new URL(req.url)
    const uid = searchParams.get("id")
    if ( !uid || isNaN(Number(uid)) ) {
        return NextResponse.json({ error : "uid not provided / invalid"}, { status : 400 })
    }
    const userId = parseInt(uid)

    try {
        const wallet = await prisma.wallets.findUnique({
            where : { 
                user_id : userId
            }
        })
    
        if ( !wallet ){
            return NextResponse.json({ error : "Wallet doesnt exist"}, { status : 404 })
        }

        return NextResponse.json({ message : "wallet fetched!", wallet : {
            balance : wallet.balance,
            userId : wallet.user_id
        }})

    } catch ( err ){
        return NextResponse.json({ error : "Internal server error" }, { status : 500 })
    }

}