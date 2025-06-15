import prisma from "@blinkpay/db"

export async function getFavoritesAndRecents(userId: number){
    try {
        const favsData = await prisma.favorites.findMany({
            where: {
                user_id: userId
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
                user_id: userId
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

        return [favs, recents]
    } catch(err) {
        console.log("error in fetching favorites and recents")
        return [null, null]
    }
}