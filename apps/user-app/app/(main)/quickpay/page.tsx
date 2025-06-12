import { getServerSession } from "next-auth";
import { Button } from "../../../components/Button";
import { GradientDecor } from "../../../components/GradientDecor";
import { MaskedText } from "../../../components/MaskedText";
import { SwitchText } from "../../../components/SwitchText";
import { WalletSummary } from "../../../components/WalletSummary";
import { QuickPayContent } from "../../../components/quickpay/main";
import { NEXT_AUTH_CONFIG } from "../../../lib/actions/auth";
import { redirect } from "next/navigation";


export default async function QuickPayPage(){
    const session = await getServerSession(NEXT_AUTH_CONFIG)
    if(!session){
        console.log("active session not found")
        redirect("/api/auth/signin")
    }

    return (
        <div className="space-y-8">
            <h1 className="text-[40px] mb-10">
                <MaskedText>
                    Quick Pay
               </MaskedText>
            </h1>
            <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 rounded-md h-[400px] relative overflow-hidden p-4 border border-accent-background">
                    <GradientDecor />
                    <QuickPayContent />
                </div>
                <div className="col-span-1">
                    <WalletSummary />
                </div>
            </div>
        </div>
    )
}