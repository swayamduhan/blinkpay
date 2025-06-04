"use client"

import { useGSAP } from "@gsap/react";
import { ChartContainer } from "../components/dashboard/ChartContainer"
import { Chats } from "../components/dashboard/Chats";
import { MonthStats } from "../components/dashboard/MonthStats";
import { QuickPayTile } from "../components/dashboard/QuickPay";
import { RecentActivity } from "../components/dashboard/RecentActivity";
import { MaskedText } from "../components/MaskedText";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export default function Home() {

  useGSAP(() => {
    gsap.registerPlugin(SplitText)
  })
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
