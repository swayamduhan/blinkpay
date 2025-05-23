"use client"
import { useGSAP } from "@gsap/react"
import CardImage1 from "../assets/why_2.avif"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

interface Card {
    img: any,
    imgText: string,
    description: string
}

const cards: Card[]  = [
    {
        img: CardImage1,
        imgText: "Blazing Fast",
        description: "BlinkPay, with it's cutting-edge tech, handles your transactions in under a second."
    },
    {
        img: CardImage1,
        imgText: "24*7",
        description: "Crazy huge uptime."
    }
]

export default function WhySection(){
    const container = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const cards = gsap.utils.toArray(".pin__card")
        

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cards[0],
                start: "center 60%",
                end: "+=2000",
                markers: true,
                pin: "#why-wrapper",
                pinSpacing: true,
                scrub: true,
                anticipatePin: 1
            }
        })

        cards.forEach((card, idx) => {
            const split = SplitText.create(`#text-${idx+1}`, {
                type: "words",
            })
    
            gsap.set(split.words, {
                opacity: "0.15"
            })
    
            tl.to(split.words, {
                opacity: 1,
                stagger: 0.05,
                ease: "power2.out",
            }, 0)
        })

    }, { scope: container })




    return (
        <div ref={container} id="why-wrapper">
            <section className="min-h-screen border">
                <div id="why-wrapper" className="p-10 pt-20 space-y-20">
                    <div className="text-2xl text-right border-b pb-10">
                        Why BlinkPay?
                    </div>

                    <div id="why__content" className="mt-[20vh] relative">
                        <WhyCard cards={cards}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

function WhyCard({ cards }: { cards: Card[] }){
    return (
        <div className="grid grid-cols-3 gap-20 pin__card">
            <div className="col-span-2">
                <div className="h-[50vh] w-full rounded-4xl relative overflow-hidden">
                    <div className="absolute font-instrument text-8xl text-pastel-100 bottom-5 right-10 z-10 border h-[120px] leading-[120px] overflow-hidden">
                        <div className="img-text-wrapper">
                            {cards.map(card => {
                                return <div>{card.imgText}</div>
                            })}
                        </div>
                    </div>
                    <div className="z-10 text-pastel-100 absolute text-8xl top-10 left-10 border h-[100px] leading-[100px] overflow-hidden">
                        <div className="index-wrapper">
                            {Array.from({ length: cards.length }).map((_, i) => (
                                <div>{i}</div>
                            ))}
                        </div>
                    </div>
                    <div className="inset-0 absolute bg-gradient-to-b from-transparent to-black/30 z-5">
                    </div>
                    <img src={cards[0].img} className="w-full -translate-y-[30%]"/>
                </div>
            </div>
            <div className="col-span-1 text-6xl border relative">
                {cards.map((card, idx) => {
                    if(idx != 0) return <div id={`text-${idx+1}`} className="hidden absolute">{card.description}</div>
                    return <div id={`text-${idx+1}`} className="absolute">{card.description}</div>
                })}
            </div>
        </div>
    )
}