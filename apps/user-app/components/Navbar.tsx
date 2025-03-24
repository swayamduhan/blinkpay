"use client"
import { useSetAtom } from "jotai"
import { motion } from "motion/react"
import { useState } from "react"
import { SidebarHoverAtom } from "../lib/store/atoms/SidebarAtom"

export function Navbar(){
    const setSidebarHover = useSetAtom(SidebarHoverAtom)
    return (
        <motion.nav
            className="h-screen max-h-screen fixed w-[250px] z-10 bg-neutral-100 p-4 space-y-10"
            whileHover={{ width: "300px" }}
            transition={{ ease: "anticipate" }}
            onMouseEnter={()=> setSidebarHover(true)}
            onMouseLeave={()=> setSidebarHover(false)}
        >
            <div className="space-y-2">
                <h1 className="font-medium text-xl">BLINKPAY &copy;</h1>
                <div className="border-b-1"></div>
            </div>
            <ul className="space-y-4">
                <li>Dashboard</li>
                <li>Quick Pay</li>
                <li>Add Money</li>
                <li>Wallet</li>
                <li>Transaction History</li>
                <li>Profile</li>
                <li>Site Settings</li>
                <li>LogOut</li>
            </ul>
        </motion.nav>
    )
}