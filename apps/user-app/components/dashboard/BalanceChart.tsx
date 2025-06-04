"use client";

import { curveCardinal } from "d3-shape";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Currency } from "../Currency";
import { useRef } from "react"

const data = [
  { name: "Jan", balance: 1200 },
  { name: "Feb", balance: 1500 },
  { name: "Mar", balance: 1800 },
  { name: "Apr", balance: 2200 },
  { name: "May", balance: 2500 },
  { name: "Jun", balance: 2700 },
  { name: "Jul", balance: 1500 },
];

export default function WalletBalanceChart() {
  const cardinal = curveCardinal.tension(0.3)
  return (
    <ResponsiveContainer width="80%" height={300}>
    <AreaChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 5 }}>
        <defs>
        <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--background)" stopOpacity={0.4} />
            <stop offset="100%" stopColor="var(--background)" stopOpacity={0} />
        </linearGradient>
        </defs>
        <Area type="monotone" dataKey="balance" stroke="" strokeWidth={1} fill="url(#balanceGradient)" />
        <Area type={cardinal} dataKey="balance" stroke="#fff" strokeWidth={1} fill="url(#balanceGradient)"/>
        {/* <CartesianGrid stroke="#ddd" strokeDasharray="3 3" horizontal={true} vertical={false} /> */}
        <XAxis stroke="#fff" dataKey="name" tick={{ fill: "#fff", fontSize: "12px" }}/>
        <YAxis stroke="#fff" tick={{ fill: "#fff", fontSize: "12px" }}/>
        <Tooltip content={<CustomTooltip active={false} payload={[]} label={""}/>}/>
    </AreaChart>
    </ResponsiveContainer>
  );
}


function CustomTooltip({ payload, label, active } : { payload: any, label: any, active: any}) {
  const prevPayload = useRef<number>(0)
  let animating = useRef<boolean>(false)

  // if value changes and not animating then animate 
  // if value doesnt change and animating, then do nothing
  // if value changes and animating then kill tween and do another animation

  function showPayload(){
    return payload[0].value
    if(prevPayload != payload[0].value){
      const prev = prevPayload.current
      prevPayload.current = payload[0].value
      return `from ${prev} to ${payload[0].value}`
    } else {
      return payload[0].value
    }
  }

  if (active) {
    return (
      <div className="custom-tooltip rounded-full bg-accent-background text-accent-main p-4">
        <div className="flex flex-col items-center">
          <div>
            {label}
          </div>
          <div className="text-xl font-semibold">
            {showPayload()}
          </div>
        </div>
      </div>
    );
  }

  return null;
}