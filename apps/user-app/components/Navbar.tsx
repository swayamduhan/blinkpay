"use client"
import { useSetAtom } from "jotai"
import { motion } from "motion/react"
import { useState } from "react"
import { SwitchText } from "./SwitchText"
import { NavItem } from "./NavItem"
import Image from "next/image"
import { IconHistory, IconLayout, IconLocationDollar, IconLogout, IconMessageCirclePlus, IconSettings, IconUserCog, IconWallet } from "@tabler/icons-react"
import Link from "next/link"

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
                <NavItem href="/">
                    <div className="flex gap-1">
                        <IconLayout stroke={1.7}/>
                        Dashboard
                    </div>
                </NavItem>
                <NavItem href="/quickpay">
                    <div className="flex gap-1">
                        <IconLocationDollar stroke={1.7}/>
                        Quick Pay
                    </div>
                </NavItem>
                <NavItem href="/wallet">
                    <div className="flex gap-1">
                        <IconWallet stroke={1.7}/>
                        Wallet
                    </div>
                </NavItem>
                <NavItem href="/chat">
                    <div className="flex gap-1">
                        <IconMessageCirclePlus stroke={1.7}/>
                        Chat
                    </div>
                </NavItem>
                <NavItem href="/txn-history">
                    <div className="flex gap-1">
                        <IconHistory stroke={1.7}/>
                        Transaction History
                    </div>
                </NavItem>
                <NavItem href="/profile">
                    <div className="flex gap-1">
                        <IconUserCog stroke={1.7}/>
                        Profile
                    </div>
                </NavItem>
                <NavItem href="/settings">
                    <div className="flex gap-1">
                        <IconSettings stroke={1.7}/>
                        Site Settings
                    </div>
                </NavItem>
                <NavItem href="/logout">
                    <div className="flex gap-1">
                        <IconLogout stroke={1.7}/>
                        LogOut
                    </div>
                </NavItem>
            </ul>
        </motion.nav>
    )
}


