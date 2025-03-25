"use client"

import { useAtomValue } from "jotai";
import { motion } from "motion/react"
import { SidebarHoverAtom } from "../lib/store/atoms/SidebarAtom";

export function Wrapper({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    const sidebarHoverValue = useAtomValue(SidebarHoverAtom)
    return (
      <div className="relative isolate">
      <motion.div 
        className="absolute inset-0 pointer-events-none z-5"
        animate={sidebarHoverValue ? { backdropFilter: "blur(5px)", background: "rgba(0,0,0,0.1)" } : { background: "transparent" }}
        transition={{ ease: "anticipate" }}
      />
  
      {/* Main Content */}
      <motion.div 
        className={`relative z-0 px-[32px] py-4 space-y-4`}
        animate={sidebarHoverValue ? { translateX: "50px" } : { translateX: "0px" }}
        transition={{ ease: "anticipate" }}
      >
        {children}
      </motion.div>
    </div>
    )
  }