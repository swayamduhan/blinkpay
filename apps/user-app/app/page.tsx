"use client"

import { ChartContainer } from "../components/dashboard/ChartContainer"

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-[40px] mb-10">Hi, Swayam. Good Morning!</h1>
      <ChartContainer />
      <div>Hello this is quick pay tile</div>
      <div>Hello this is chart balance</div>
    </div>
  );
}
