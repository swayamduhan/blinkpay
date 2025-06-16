import prisma from "@blinkpay/db";
import { NextRequest, NextResponse } from "next/server";

interface RecipientParams {
    userId: number
}

export async function POST(req: NextRequest){
    const body: RecipientParams = await req.json()

    if(isNaN(body.userId)){
        return NextResponse.json({ message: "bad request"}, { status: 400 })
    }

    try{
        const user = await prisma.user.findUnique({
            where: {
                id: body.userId
            },
            select: {
                id: true,
                phone: true,
                name: true
            }
        })
        
        if(!user){
            return NextResponse.json({ message: "user doesnt exist"}, { status: 404 })
        }

        return NextResponse.json({ message: "user found", user }, { status: 200 })
    } catch(error){
        return NextResponse.json({ message: "error", error }, { status: 500 })
    }

}