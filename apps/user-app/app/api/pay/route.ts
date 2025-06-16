import prisma from "@blinkpay/db";
import { NextRequest, NextResponse } from "next/server";

export interface P2PTxnParams {
    userId: number,
    receiverId: number,
    amount: number
}

// use a raw sql transaction to check for amount then decrement and increment amount
// then add a entry in the p2p transactions tab in a single transaction

export async function POST(req: NextRequest){
    const body: P2PTxnParams = await req.json()

    if(isNaN(body.amount) || isNaN(body.userId) || isNaN(body.receiverId)){
        return NextResponse.json({ message: "invalid inputs"}, { status: 400 })
    }


    try {
        const res = await prisma.$executeRawUnsafe(`
            DO $$
            DECLARE
                sender_balance numeric;
            BEGIN
                SELECT balance INTO sender_balance
                FROM wallets
                WHERE user_id = ${body.userId}
                FOR UPDATE;
            
                IF sender_balance < ${body.amount} THEN
                    RAISE EXCEPTION 'Insufficient balance!';
                END IF;

                UPDATE wallets SET balance = balance - ${body.amount} WHERE user_id = ${body.userId};
                UPDATE wallets SET balance = balance + ${body.amount} WHERE user_id = ${body.receiverId};

                INSERT INTO p2p_transactions (sender_id, receiver_id, amount)
                VALUES (${body.userId}, ${body.receiverId}, ${body.amount});
            END $$;
        `)

        return NextResponse.json({ message: "success"}, { status: 200 })
    } catch (err) {
        console.log("txn error", err)
        return NextResponse.json({ message: "error in txn", error: err }, { status: 500 })
    }
}