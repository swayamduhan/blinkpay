"use client"
import { motion } from "motion/react"
export function MaskedText({ children }: Readonly<{ children: React.ReactNode }>){
    return (
        <div className="overflow-hidden relative">
            <motion.div
                className="relative"
                initial={{top: "50px"}}
                animate={{top: "0px"}}
                transition={{ duration: 0.2 }}
            >
                {children}
            </motion.div>
        </div>
    )
}