import { ChartContainer } from "../components/dashboard/ChartContainer"
import { Chats } from "../components/dashboard/Chats";
import { MonthStats } from "../components/dashboard/MonthStats";
import { QuickPayTile } from "../components/dashboard/QuickPay";
import { RecentActivity } from "../components/dashboard/RecentActivity";
import { MaskedText } from "../components/MaskedText";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "../lib/actions/auth";

export default async function Home() {
  const userSession = await getServerSession(NEXT_AUTH_CONFIG)
  if(!userSession){
    redirect("/api/auth/signin?callbackUrl=/")
  }
  
  return (
    <div className="space-y-8">
      <h1 className="text-[40px] mb-10">
        <MaskedText>
          Hi, Swayam. Good Morning!
        </MaskedText>
      </h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-8">
        <ChartContainer />
        <RecentActivity />
        <QuickPayTile />
        <Chats />
        <MonthStats />
      </div>
    </div>
  );
}