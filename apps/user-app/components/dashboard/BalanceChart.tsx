"use client";

import { curveCardinal } from "d3-shape";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

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
            <stop offset="0%" stopColor="#4f46e5" stopOpacity={0.4} />
            <stop offset="100%" stopColor="#4f46e5" stopOpacity={0} />
        </linearGradient>
        </defs>
        <Area type="monotone" dataKey="balance" stroke="#4f46e5" strokeWidth={1} fill="url(#balanceGradient)" />
        <Area type={cardinal} dataKey="balance" stroke="#4f46e5" strokeWidth={1} fill="url(#balanceGradient)"/>
        {/* <CartesianGrid stroke="#ddd" strokeDasharray="3 3" horizontal={true} vertical={false} /> */}
        <XAxis dataKey="name" tick={{ fill: "#888", fontSize: "12px" }}/>
        <YAxis tick={{ fill: "#888", fontSize: "12px" }}/>
        <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: "4px", color: "#000" }} />
    </AreaChart>
    </ResponsiveContainer>
  );
}
