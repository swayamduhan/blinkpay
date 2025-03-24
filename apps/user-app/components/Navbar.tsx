"use client"
import { motion } from "motion/react"

export function Navbar(){
    return (
        <motion.nav
            className="bg-black h-screen max-h-screen fixed w-[10em] z-10 text-white"
            whileHover={{ width: "20em"}}
            transition={{ ease: "anticipate" }}
            >
                BLINKPAY<br />
            this is a rectractable navbar
        </motion.nav>
    )
}