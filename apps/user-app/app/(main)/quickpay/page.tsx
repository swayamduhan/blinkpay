import { getServerSession } from "next-auth";
import { Button } from "../../../components/Button";
import { GradientDecor } from "../../../components/GradientDecor";
import { MaskedText } from "../../../components/MaskedText";
import { SwitchText } from "../../../components/SwitchText";
import { WalletSummary } from "../../../components/WalletSummary";
import { QuickPayContent } from "../../../components/quickpay/quickPayContent";
import { NEXT_AUTH_CONFIG } from "../../../lib/actions/auth";
import { redirect } from "next/navigation";
import axios from "axios";
import { getFavoritesAndRecents } from "../../../lib/actions/getFavoritesRecents";
import { getAccountSummary } from "../../../lib/actions/accountSummary";
import { QuickPayMain } from "../../../components/quickpay/quickPayMain";


export const dynamic = "force-dynamic"

export default async function QuickPayPage(){
    const session = await getServerSession(NEXT_AUTH_CONFIG)
    if(!session){
        console.log("active session not found")
        redirect("/api/auth/signin")
    }

    //@ts-expect-error
    const [favs, recs] = await getFavoritesAndRecents(session?.user?.id)
    //@ts-expect-error
    const { accountData, error } = await getAccountSummary(session?.user?.id)


    return (
        <div className="space-y-8">
            <h1 className="text-[40px] mb-10">
                <MaskedText>
                    Quick Pay
               </MaskedText>
            </h1>
            <div className="grid grid-cols-3 gap-8">
                {/* @ts-expect-error */}
                <QuickPayMain favs={favs} recs={recs} userId={session.user?.id}/>
                <div className="col-span-1">
                    <WalletSummary balance={accountData?.balance || 0} lastTransaction={accountData?.lastTransaction} myname={accountData?.myname || ""}/>
                </div>
            </div>
        </div>
    )
}