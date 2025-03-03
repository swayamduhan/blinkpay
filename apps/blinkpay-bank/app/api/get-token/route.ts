import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";

interface GetTokenParams {
    amount : string
}

// make the bank as a full fledged api later on


export async function POST(req : NextRequest){
    const body : GetTokenParams = await req.json()
    const amount = body.amount

    if ( !amount ) return NextResponse.json({ error : "please provide amount"}, { status : 400 })

    const token = randomUUID()
    return NextResponse.json({ message : "success", token : token }, { status : 200 })
}


