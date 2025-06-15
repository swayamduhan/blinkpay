import prisma from "@blinkpay/db";
import { Favorites, User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export interface FetchFavoritesParams {
    userId: number
}

export async function POST(req: NextRequest){
    const body: FetchFavoritesParams = await req.json()

    try {
        const favsData = await prisma.favorites.findMany({
            where: {
                user_id: body.userId
            },
            include: {
                favUser: {
                    select: {
                        id: true,
                        name: true,
                        phone: true
                    }
                }
            },
        })

        const recentData = await prisma.recentRecipients.findMany({
            where: {
                user_id: body.userId
            },
            include: {
                recipient: {
                    select: {
                        id: true,
                        name: true,
                        phone: true
                    }
                }
            }
        })

        let favs: {id: number, name: string, phone: string | null}[] = []
        favsData.forEach(fav => {
            favs.push(fav.favUser)
        })

        let recents: {id: number, name: string, phone: string | null}[] = []
        recentData.forEach(rec => {
            recents.push(rec.recipient)
        })



        return NextResponse.json({ message: "success", favs, recents }, { status: 200 })
    } catch(err) {
        return NextResponse.json({ message: "error" }, { status: 500 })
    }
}