"use server"
import prisma from "@blinkpay/db"

export interface accountSummaryInterface {
    accountData: {
        balance: number,
        lastTransaction: {
            username: string,
            amount: number,
            type: "Sent" | "Received"
        },
        myname: string
    } | null,
    error: any | null
}

export async function getAccountSummary(userId: number): Promise<accountSummaryInterface>{
    try {
        const walletData = await prisma.wallets.findUnique({
            where: {
                user_id: userId
            }
        })

        const txn = await prisma.p2p_transactions.findMany({
            where: {
                OR: [
                    { sender_id: userId },
                    { receiver_id: userId }
                ]
            },
            include: {
                receiver_user: {
                    select: {
                        name: true
                    }
                },
                sender_user: {
                    select: {
                        name: true
                    }
                }
            },
            orderBy: {
                created_at: "desc"
            },
            take: 1
        })

        const balance = walletData?.balance || 0

        let type: "Sent" | "Received" = "Received"
        let username = txn[0]?.sender_user.name
        let myname = txn[0]?.receiver_user.name
        if(txn[0]?.sender_id === userId){
            type = "Sent"
            username = txn[0].receiver_user.name
            myname = txn[0].sender_user.name
        }

        const lastTransaction = {
            username: username || "",
            amount: txn[0]?.amount || 0,
            type
        }

        return {
            accountData: {
                balance,
                lastTransaction,
                myname: myname || ""
            },
            error: null
        }
    } catch (err: any) {
        return {
            accountData: null,
            error: err
        }
    }
}