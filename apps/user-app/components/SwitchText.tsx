import { motion } from "motion/react"
import { usePathname } from "next/navigation"

export function SwitchText({ children } : Readonly<{ children: React.ReactNode}>){
    return (
        <div className="relative cursor-pointer group overflow-hidden">
            <div className="relative top-0 group-hover:top-6 transition-all duration-300">{children}</div>
            <div className="absolute italic underline bottom-6 group-hover:bottom-0 transition-all duration-300">{children}</div>
        </div>
    )
}


