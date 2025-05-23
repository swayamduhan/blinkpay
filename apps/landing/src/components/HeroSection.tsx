import { useGSAP } from "@gsap/react";
import { Navbar } from "./Navbar";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import HeroButton from "./HeroButton";


export function HeroSection() {
    const heroTextRef = useRef<HTMLDivElement>(null)
    // const splitText = useRef<SplitText>(null)

    useGSAP(() => {
        gsap.registerPlugin(SplitText)
        let split;
        SplitText.create(heroTextRef.current, {
            type: "lines",
            mask: "lines",
            onSplit: (self) => {
                split = gsap.from(self.lines, {
                    duration: 1,
                    ease: "power4.out",
                    yPercent: 100,
                    opacity: 0,
                    stagger: 0.1
                })
                return split
            }
        })
    })

  return (
    <div className='min-h-screen relative w-full border-b border-[#CBAFFF]'>
        {/* SVG LAYER */}
        <div className="h-screen absolute inset-0">
            <svg className='h-full w-full absolute' viewBox='0 0 100 100'>
                <ellipse cx="50" cy="-25" rx={100} ry={60} transform='rotate(15 55 -20)' fill='#CAAEFF' className="blur-md opacity-75 z-[0]"></ellipse>
                {/* <ellipse cx="50" cy="-15" rx={100} ry={60} transform='rotate(15 55 -20)' fill='#A06DFF' className="blur-xl opacity-50 z-[0]"></ellipse> */}
                <ellipse cx="50" cy="-25" rx={100} ry={60} transform='rotate(15 55 -20)' fill='#F4EEFF' className="z-[5]" stroke="#CBAFFF" strokeWidth="0.1px"></ellipse>
            </svg>
            <svg className='h-full w-full absolute' viewBox='0 0 100 100'>
                <ellipse cx="65" cy="110" rx={100} ry={60} transform='rotate(20 55 -20)' fill='#CAAEFF' className="blur-lg opacity-75 z-[0]"></ellipse>
                {/* <ellipse cx="65" cy="110" rx={100} ry={60} transform='rotate(20 55 -20)' fill='#A06DFF' className="blur-lg opacity-50 z-[0]"></ellipse> */}
                <ellipse cx="65" cy="110" rx={100} ry={60} transform='rotate(20 55 -20)' fill='#F4EEFF' className="z-[5]" stroke="#CBAFFF" strokeWidth="0.1px"></ellipse>
            </svg>
        </div>

        {/* TEXT LAYER */}
        <div className="absolute inset-0">
            <Navbar />
            <div className="absolute bottom-[10%] left-10 max-w-[700px] space-y-8">
                <div ref={heroTextRef}>
                    <div className="leading-[1.2] text-6xl">Lightning fast payments in a blink with <span className="text-purple-800 font-instrument italic tracking-normal">BlinkPay</span>
                    </div>
                    <div className="text-xl text-neutral-500 mt-4">Trusted by 1Million+ customers & merchants</div>
                </div>
                <HeroButton />
            </div>
        </div>
    </div>
  )
}