import { useGSAP } from "@gsap/react";
import { ArrowTopRight } from "./ArrowTopRight";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroButton(){
    const buttonContainerRef = useRef<HTMLButtonElement>(null)
    const arrowRef = useRef<HTMLDivElement>(null)
    const tl = useRef<GSAPTimeline>(null)
    
    useEffect(() => {
        if(!buttonContainerRef.current) return

        const handleOver = () => tl.current?.play()
        const handleLeave = () => tl.current?.reverse()

        buttonContainerRef.current.addEventListener("mouseover", handleOver)
        buttonContainerRef.current.addEventListener("mouseleave", handleLeave)

        return () => {
            buttonContainerRef.current?.removeEventListener("mouseover", handleOver);
            buttonContainerRef.current?.removeEventListener("mouseleave", handleLeave);
        };
    }, [])
    
    useGSAP(() => {
        if(!buttonContainerRef.current || !arrowRef.current) return

        tl.current = gsap.timeline({ paused: true })

        tl.current.to(arrowRef.current, {
            width: "30px",
            height: "30px",
            rotate: "0deg",
            ease: "back.out",
            duration: 0.3
        })
    })

    return (
        <button ref={buttonContainerRef} className="border px-3 py-2 rounded-[100px] flex items-center bg-pastel-300 space-x-2">
            <span className="text-xl py-[2px]">Make a payment</span>
            <span ref={arrowRef} className="border rounded-full p-1 bg-pastel-100 w-[8px] h-[8px] rotate-[-135deg]">
                <ArrowTopRight />
            </span>
        </button>
    )
}