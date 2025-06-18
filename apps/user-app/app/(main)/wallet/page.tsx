import { getServerSession } from "next-auth";
import { MaskedText } from "../../../components/MaskedText";
import { WalletSummary } from "../../../components/WalletSummary";
import { getAccountSummary } from "../../../lib/actions/accountSummary";
import { NEXT_AUTH_CONFIG } from "../../../lib/actions/auth";
import { redirect } from "next/navigation";
import { AddMoney } from "../../../components/wallet/addMoney";

export default async function Wallet(){
    const session = await getServerSession(NEXT_AUTH_CONFIG)
    if(!session) redirect("/api/auth/signin?callbackUrl=/wallet")

    // @ts-expect-error
    const {accountData, error} = await getAccountSummary(session.user?.id)
    if(error) return (
        <div className="text-6xl"><MaskedText>Error fetching data... Refresh maybe?</MaskedText></div>
    )
    return (
        <div className="space-y-8">
            <h1 className="text-[40px] mb-10">
                <MaskedText>
                    Wallet
               </MaskedText>
            </h1>
            <div className="grid grid-cols-3 gap-8">
                {/* @ts-expect-error */}
                <AddMoney userId={session.user?.id}/>
                <div className="col-span-1">
                    <WalletSummary balance={accountData?.balance || 0} lastTransaction={accountData?.lastTransaction} myname={accountData?.myname || ""}/>
                </div>
            </div>
        </div>
    )
}