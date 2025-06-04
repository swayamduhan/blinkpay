"use client"
import { useSetAtom } from "jotai"
import { motion } from "motion/react"
import { useState } from "react"
import { SwitchText } from "./SwitchText"
import { NavItem } from "./NavItem"
import Image from "next/image"

export function Navbar(){
    return (
        <motion.nav
            className="h-[98vh] max-h-screen fixed w-[250px] m-2 origin-center rounded-xl z-10 bg-accent-background p-4 space-y-10 max-w-[300px]"
        >
            <div className="space-y-2 group">
                <h1 className="font-medium text-xl flex items-center gap-2"><div>BLINKPAY</div> <div className="group-hover:rotate-[45deg] duration-300 transition-all"><Image src={"/star.webp"} width={25} height={25} alt="star-logo"/></div></h1>
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


