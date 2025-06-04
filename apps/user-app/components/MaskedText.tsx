"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { motion } from "motion/react"
import { useRef } from "react"


export function MaskedText({ children }: Readonly<{ children: React.ReactNode }>){
    const container = useRef<HTMLDivElement>(null)
    useGSAP(() => {
        const split = SplitText.create(".split-me", {
            type: "lines",
            mask: "lines"
        })

        gsap.from(split.lines, {
            yPercent: 100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            stagger: 0.1
        })
    })


    return (
        <div className="relative" ref={container}>
            <div className="split-me">
                {children}
            </div>
        </div>
    )
}