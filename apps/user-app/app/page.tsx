"use client"

import { ChartContainer } from "../components/dashboard/ChartContainer"
import { Chats } from "../components/dashboard/Chats";
import { MonthStats } from "../components/dashboard/MonthStats";
import { QuickPayTile } from "../components/dashboard/QuickPay";
import { RecentActivity } from "../components/dashboard/RecentActivity";
import { MaskedText } from "../components/MaskedText";

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-[40px] mb-10">
        <MaskedText>
          Hi, Swayam. Good Morning!
        </MaskedText>
      </h1>
      <div className="grid grid-cols-3 gap-8">
        <ChartContainer />
        <RecentActivity />
      </div>
      <div className="grid grid-cols-3 gap-8">
        <QuickPayTile />
        <Chats />
        <MonthStats />
      </div>
    </div>
  );
}
