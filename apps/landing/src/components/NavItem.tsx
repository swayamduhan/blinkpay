import { useGSAP } from "@gsap/react";
import { ArrowTopRight } from "./ArrowTopRight";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export function NavItem({ children, onClick }: { children: React.ReactNode, onClick? : () => void }){
    const arrowRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const tl = useRef<GSAPTimeline>(null)

    useGSAP(() => {
        if(!arrowRef.current){
            console.log("arrow ref not found")
            return
        }
        tl.current = gsap.timeline({ paused: true })

        tl.current.to(arrowRef.current, {
            x: -5,
            y: -2.5,
            opacity: 1,
            ease: "power4.out",
            onComplete: () => console.log("animation completed")
        })

    })

    useEffect(() => {
        if(!containerRef.current){
            console.log("container ref not found")
            return
        }

        const handleMouseOver = () => tl.current?.play()
        const handleMouseLeave = () => tl.current?.reverse()

        containerRef.current.addEventListener("mouseover", handleMouseOver)
        containerRef.current.addEventListener("mouseleave", handleMouseLeave)

    }, [])

    return (
        <div className="relative" ref={containerRef} onClick={onClick ? onClick: (() => {})}>
            <div className="absolute w-4 h-4 -right-5 top-0 -translate-x-[10px] translate-y-[5px] opacity-0" ref={arrowRef}>
                <ArrowTopRight />
            </div>
            {children}
        </div>
    )
}