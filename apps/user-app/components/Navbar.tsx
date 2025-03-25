"use client"
import { useSetAtom } from "jotai"
import { motion } from "motion/react"
import { useState } from "react"
import { SidebarHoverAtom } from "../lib/store/atoms/SidebarAtom"
import { SwitchText } from "./SwitchText"
import { NavItem } from "./NavItem"

export function Navbar(){
    const setSidebarHover = useSetAtom(SidebarHoverAtom)
    return (
        <motion.nav
            className="h-screen max-h-screen fixed w-[250px] z-10 bg-[#DDDAFD] p-4 space-y-10 max-w-[300px]"
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
                <NavItem>Dashboard</NavItem>
                <NavItem>Quick Pay</NavItem>
                <NavItem>Add Money</NavItem>
                <NavItem>Wallet</NavItem>
                <NavItem>Chat</NavItem>
                <NavItem>Transaction History</NavItem>
                <NavItem>Profile</NavItem>
                <NavItem>Site Settings</NavItem>
                <NavItem>LogOut</NavItem>
            </ul>
        </motion.nav>
    )
}


