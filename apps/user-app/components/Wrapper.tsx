"use client"

import { useAtomValue } from "jotai";
import { motion } from "motion/react"

export function Wrapper({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return (
      <div className="relative isolate">
      <motion.div 
        className="absolute inset-0 pointer-events-none z-5"
      />
  
      {/* Main Content */}
      <motion.div 
        className={`relative z-0 px-[32px] py-4 space-y-4`}
      >
        {children}
      </motion.div>
    </div>
    )
  }