import SectionHeader from "./Header";
import AnimatedSVG from "./AnimatedSvg";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import FAQItem from "./FAQItem";

interface FAQ {
    title: string,
    hoverText: string
}

const faqs: FAQ[] = [
    {
        title: "What can I do with BlinkPay?",
        hoverText: "You can send, receive and request money, track transactions, add money to your blink wallet, & many more."
    },
    {
        title: "Can I use BlinkPay internationally?",
        hoverText: "Yes, you can use BlinkPay all over the globe at no charge."
    },
    {
        title: "Is my bank information saved?",
        hoverText: "No, we don't save bank information. Card information is saved as per consent."
    },
    {
        title: "What happens when my transaction fails?",
        hoverText: "BlinkPay has a near 100% uptime and we process refunds swiftly. If you face an issue, please contact our support."
    },
    {
        title: "Do I need to verify my identity (KYC)?",
        hoverText: "No, currently, we don't require KYC for access."
    },
    {
        title: "Are there any limits on how much I can send or receive?",
        hoverText: "No, we don't apply limits on usage. However, you can set your own limits in your preferences."
    }
]

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
        .from(".faq-item", {
            y: 20,
            opacity: 0.5,
            stagger: 0.03
        }, "<")
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
            opacity: 0.2
        })

        loopTl.to(".wire.bank", {
            opacity: 1
        })
        .to(".wire.bank", {
            opacity: 0.2
        }, "+=1")
        .to(".wire.friend", {
            opacity: 1
        })
        .to(".wire.friend", {
            opacity: 0.2
        }, "+=1")
        .to(".wire.misc", {
            opacity: 1
        })
        .to(".wire.misc", {
            opacity: 0.2
        }, "+=1")
        .to(".wire.merchant", {
            opacity: 1
        })
        .to(".wire.merchant", {
            opacity: 0.2
        }, "+=1")


    }, { scope: FAQContainer})

    return (
        <div ref={FAQContainer}>
        <section className="min-h-screen pb-40" id="faq-section">
            <div id="faq-wrapper" className="p-10 pt-20">
                <SectionHeader text="Frequently Asked Questions"/>
            </div>
            <div id="faq-content" className="px-10 grid grid-cols-3 gap-6 lg:gap-10">
                <div id="faq-svg" className="col-span-1 mt-10 h-[70vh] border rounded-3xl bg-[#222222]">
                    <AnimatedSVG />
                </div>
                <div id="faqs" className="col-span-2 mt-10 grid grid-cols-2 grid-rows-3 gap-2 lg:gap-5">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} title={faq.title} hoverText={faq.hoverText}/>
                    ))}
                </div>
            </div>
        </section>
        </div>
    )
}