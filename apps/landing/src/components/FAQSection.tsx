import SectionHeader from "./Header";
import AnimatedSVG from "./AnimatedSvg";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

export default function FAQSection(){
    const FAQContainer = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.set("text", {
            stroke: "var(--color-pastel-100)"
        })
        
        const loopTl = gsap.timeline({
            paused: true,
            repeat: -1,
            defaults: {
                ease: "power4.inOut"
            }
        })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#faq-section",
                start: "20% 75%"
            },
            defaults: {
                ease: "power4.inOut"
            },
            onComplete: () => {
                loopTl.play()
            }
        })


        tl.from("path", {
            drawSVG: 0,
            duration: 1.5,
            opacity: 0,
            stagger: 0.05
        })
        .to(".rect", {
            fill: "var(--color-pastel-100)"
        })
        .to(".conn", {
            fill: "var(--color-pastel-300)",
            duration: 0.3
        }, "<")
        .fromTo("image", {
            filter: "blur(20px)",
            opacity: 0,
            duration: 1
        }, {
            filter: "blur(0px)",
            opacity: 1,
            duration: 1
        }, "-=0.5")
        .fromTo("text", {
            filter: "blur(20px)",
            opacity: 0,
            duration: 1
        }, {
            filter: "blur(0px)",
            opacity: 1,
            duration: 1
        }, "<")
        .to(".wire", {
            opacity: 0.1
        })

        loopTl.to(".wire.bank", {
            opacity: 1
        })
        .to(".wire.bank", {
            opacity: 0.1
        }, "+=1")
        .to(".wire.friend", {
            opacity: 1
        })
        .to(".wire.friend", {
            opacity: 0.1
        }, "+=1")
        .to(".wire.misc", {
            opacity: 1
        })
        .to(".wire.misc", {
            opacity: 0.1
        }, "+=1")
        .to(".wire.merchant", {
            opacity: 1
        })
        .to(".wire.merchant", {
            opacity: 0.1
        }, "+=1")


    }, { scope: FAQContainer})

    return (
        <div ref={FAQContainer}>
        <section className="min-h-screen mb-20" id="faq-section">
            <div id="faq-wrapper" className="p-10 pt-20 space-y-20">
                <SectionHeader text="Frequently Asked Questions"/>
            </div>
            <div id="faq-content" className="px-10 grid grid-cols-3">
                <div id="faq-svg" className="col-span-1 mt-10 h-[70vh] border rounded-3xl bg-[#222222]">
                    <AnimatedSVG />
                </div>
                <div id="faqs" className="col-span-2">
                </div>
            </div>
        </section>
        </div>
    )
}