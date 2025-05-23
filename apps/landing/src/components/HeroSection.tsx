import { useGSAP } from "@gsap/react";
import { Navbar } from "./Navbar";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import HeroButton from "./HeroButton";


export function HeroSection() {
    const heroTextRef = useRef<HTMLDivElement>(null)
    const heroContainer = useRef<HTMLDivElement>(null)

    useGSAP(() => {

        const tl = gsap.timeline({
            defaults: {
                ease: "power3.out"
            }
        })

        let split = SplitText.create(heroTextRef.current, {
            type: "lines",
            mask: "lines",
        })
        tl.from(".nav-star", {
            rotate: 360,
            x: -200,
            duration: 0.7,
            ease: "power3.out"
        })
        .from(".ellipse-1", {
            duration: 1,
            rx: 20,
            ry: 20,
            y: -100,
            ease: "power3.out",
            stagger: 1
        }, "<")
        .from(".ellipse-3", {
            duration: 1,
            rx: 20,
            ry: 20,
            y: 100,
            ease: "power3.out",
            stagger: 1
        }, "<")
        .from(".nav-item", {
            y: 10,
            stagger: 0.05,
            opacity: 0
        }, "-=0.5")
        .from(split.lines, {
            duration: 1.3,
            ease: "power3.out",
            yPercent: 100,
            opacity: 0,
            stagger: 0.1
        }, "-=0.5")
        .from(".hero-btn", {
            yPercent: 100
        }, "<")
        .from(".ellipse-2", {
            duration: 1,
            rx: 20,
            ry: 20,
            y: -100,
            ease: "power3.out",
        }, "-=0.5")
        .from(".ellipse-4", {
            duration: 1,
            rx: 20,
            ry: 20,
            y: 100,
            ease: "power3.out",
            stagger: 1
        }, "<")
        
    }, { scope: heroContainer })

  return (
    <div className='min-h-screen relative w-full border-b border-[#CBAFFF]' id="hero-section" ref={heroContainer}>
        {/* SVG LAYER */}
        <div className="h-screen absolute inset-0">
            <svg className='h-full w-full absolute' viewBox='0 0 100 100' shapeRendering="geometricPrecision">
                <ellipse cx="50" cy="-25" rx={100} ry={60} transform='rotate(15 55 -20)' fill='#CAAEFF' className="blur-md opacity-75 z-[0] ellipse-1"></ellipse>
                <ellipse cx="50" cy="-25" rx={100} ry={60} transform='rotate(15 55 -20)' fill='#F4EEFF' className="z-[5] ellipse-2" stroke="#CBAFFF" strokeWidth="0.1px"></ellipse>
            </svg>
            <svg className='h-full w-full absolute' viewBox='0 0 100 100' shapeRendering="geometricPrecision">
                <ellipse cx="65" cy="110" rx={100} ry={60} transform='rotate(20 55 -20)' fill='#CAAEFF' className="blur-lg opacity-75 z-[0] ellipse-3"></ellipse>
                <ellipse cx="65" cy="110" rx={100} ry={60} transform='rotate(20 55 -20)' fill='#F4EEFF' className="z-[5] ellipse-4" stroke="#CBAFFF" strokeWidth="0.1px"></ellipse>
            </svg>
        </div>

        {/* TEXT LAYER */}
        <div className="absolute inset-0">
            <Navbar />
            <div className="absolute bottom-[10%] left-10 max-w-[700px] space-y-8">
                <div ref={heroTextRef} className="-space-y-2">
                    <div className="leading-[1.2] text-6xl">Lightning fast payments in a blink with <span className="text-purple-700 font-instrument italic tracking-normal">BlinkPay</span>
                    </div>
                    <div className="text-xl text-neutral-500 mt-4">Trusted by 1Million+ customers & merchants</div>
                </div>
                <div className="overflow-hidden">
                    <div className="hero-btn">
                        <HeroButton text="Make a payment" accent="var(--color-pastel-300)"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}