import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { useEffect, useRef } from "react"

export default function Footer(){
    const quickLinks = ["About Us", "Careers", "Blog", "FAQ", "SignUp/LogIn"]
    const legal = ["Privacy Policy", "Terms of Service", "Refund Policy", "Security Practices"]
    const partners = ["American Express", "VISA", "Mastercard", "PayTM", "BHIM UPI", "Stripe", "PayPal"]
    const resources = ["Guides", "Customer stories", "Blog", "Licences", "Sitemap", "Cookie settings"]
    const developers = ["Documentation", "API reference", "API status", "API changelog"]
    return (
        <footer>
            <div className="h-[600px] pointer-events-none"></div>
            <div className="fixed bottom-0 w-full h-[600px] bg-[#222222] z-[0] text-pastel-100">
                <div className="p-10 grid grid-cols-2 h-[500px]">
                    <div>
                        <div className="text-[200px] font-instrument leading-[200px]">
                            BlinkPay
                        </div>
                        <div className="text-xl opacity-65">
                            All rights reserved &copy; Team BlinkPay / 2025
                        </div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="space-y-6">
                            <div>
                                <Header>Quick Links</Header>
                                {quickLinks.map((link) => (
                                    <FooterItem>{link}</FooterItem>
                                ))}
                            </div>
                            <div>
                                <Header>Resources</Header>
                                {resources.map((link) => (
                                    <FooterItem>{link}</FooterItem>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <Header>Partners</Header>
                                {partners.map((link) => (
                                    <FooterItem>{link}</FooterItem>
                                ))}
                            </div>
                            <div>
                                <Header>Developers</Header>
                                {developers.map((link) => (
                                    <FooterItem>{link}</FooterItem>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <Header>Legal</Header>
                                {legal.map((link) => (
                                    <FooterItem>{link}</FooterItem>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[100px] flex justify-start items-center gap-10 text-4xl px-10">
                    <a href="mailto:workplace.swayam@gmail.com">
                        <FooterRandomText>EMAIL US</FooterRandomText>
                    </a>
                    <a href="https://swayd.live" target="_blank">
                        <FooterRandomText>RAISE TICKET</FooterRandomText>
                    </a>
                    <a href="https://swayd.live" target="_blank">
                        <FooterRandomText>CONTACT</FooterRandomText>
                    </a>
                </div>
            </div>
        </footer>
    )
}


function FooterRandomText({ children }: { children: React.ReactNode }){
    const containerRef = useRef<HTMLDivElement>(null)
    const splitContainer = useRef<HTMLDivElement>(null)
    const timelineRef = useRef<GSAPTimeline>(null)

    useGSAP(() => {
        timelineRef.current = gsap.timeline({ paused: true, defaults: {
            ease: "power3.out"
        }})
        const split = SplitText.create(splitContainer.current, {
            type: "chars",
            onSplit: (self) => {
                gsap.set(self.chars, {
                    opacity: 0.7
                })
            }
        })


        timelineRef.current.to(split.chars, {
            y: "random([-8, 0, 8])",
            rotate: "random(-15, 15)",
            opacity: 1,
            stagger: 0.02,
            duration: 0.3
        }, "0")
    }, { scope: containerRef})

    useEffect(() => {
        if(!splitContainer.current || !containerRef.current){
            console.log("refs not found")
            return
        }

        const handleOver = () => timelineRef.current?.play()
        const handleLeave = () => timelineRef.current?.reverse()

        splitContainer.current.addEventListener("mouseenter", handleOver)
        splitContainer.current.addEventListener("mouseleave", handleLeave)

        return () => {
            splitContainer.current?.removeEventListener("mouseenter", handleOver)
            splitContainer.current?.removeEventListener("mouseleave", handleLeave)
        }
    }, [])
    return (
        <div ref={containerRef} className="cursor-pointer">
            <div ref={splitContainer}>
                <div className="split-me">
                    {children}
                </div>
            </div>
        </div>
    )
}

function Header({ children }: { children: React.ReactNode }){
    return (
        <div className="font-bold text-2xl">
            {children}
        </div>
    )
}

function FooterItem({ children }: { children: React.ReactNode }){
    return (
        <div className="opacity-75 hover:opacity-100 transition-all duration-300 cursor-pointer w-fit text-lg">{children}</div>
    )
}