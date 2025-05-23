"use client"
import { useGSAP } from "@gsap/react"
import CardImage1 from "../assets/why_2.avif"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

/*
ANIMATION FLOW:
1. keep main section pinned for full offset width
2. stagger opacity text scroll trigger scrubbed timeline
3. when timeline completes, shift to new text and data, 
*/

interface Card {
    img: any,
    imgText: string,
    description: string
}

const cards: Card[]  = [
    {
        img: CardImage1,
        imgText: "Blazing Fast",
        description: "BlinkPay, with it's industry-leading tech, handles your transactions in under a second."
    },
    {
        img: CardImage1,
        imgText: "Always Up",
        description: "Your money doesn't sleep and neither do we. We operate 24*7 with a 99% uptime!"
    },    {
        img: CardImage1,
        imgText: "Secure By Design",
        description: "We don’t just guard your data — we engineer for peace of mind."
    },    {
        img: CardImage1,
        imgText: "Built for Globe",
        description: "Pay a friend or scale a biz, globally, we handle every transaction with the same power and precision."
    }
]

export default function WhySection(){
    const container = useRef<HTMLDivElement>(null)

    useGSAP(() => {        
        // global timeline to controll full
        const globalTimeline = gsap.timeline({ paused: true })

        // pin the whole section for until needed
        ScrollTrigger.create({
            animation: globalTimeline,
            trigger: "#why-wrapper",
            start: "top top",
            end: "+=4000px",
            // markers: true,
            pin: true,
            scrub: 1
            // anticipatePin: 1
        })

        let splitArray : SplitText[] = Array.from({ length: cards.length - 1})
        // split text for all
        cards.forEach((card, idx) => {
            splitArray[idx] = SplitText.create(`#text-${idx+1}`, {
                type: "lines, words",
                mask: "lines"
            })
        })

        // make mini timelines
        cards.forEach((card, idx) => {

            // if not first card, set all text hidden in mask
            if(idx != 0){
                gsap.set(splitArray[idx].lines, {
                    y: 65,
                    opacity: 0
                })
            }
            gsap.set(splitArray[idx].words, {
                opacity: 0.15
            })

            const localTimeline = gsap.timeline({
                onComplete: () => {
                    console.log("a local timeline was completed")
                }
            })

            // if not last card
            if(idx != cards.length - 1){
                localTimeline.to(splitArray[idx].words, {
                    opacity: 1,
                    stagger: 0.02,
                    duration: 0.1
                })
                .to(splitArray[idx].lines, {
                    opacity: 0,
                    y: -65
                })
                .to(".img-text-wrapper", {
                    y: -120 * (idx+1)
                }, "<")
                .to(".index-wrapper", {
                    y: -100 * (idx+1)
                }, "<")
                .to(splitArray[idx+1].lines, {
                    opacity: 1,
                    y: 0
                }, "<")
            } else {
                localTimeline.to(splitArray[idx].words, {
                    opacity: 1,
                    stagger: 0.02,
                    duration: 0.1
                })
            }

            globalTimeline.add(localTimeline)
        })

    }, { scope: container })




    return (
        <div ref={container} id="why-blinkpay">
            <section className="min-h-screen mb-20">
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
                    <div className="absolute font-instrument text-8xl text-pastel-100 bottom-5 right-10 z-10 h-[120px] leading-[120px] overflow-hidden">
                        <div className="img-text-wrapper">
                            {cards.map(card => {
                                return <div className="text-right">{card.imgText}</div>
                            })}
                        </div>
                    </div>
                    <div className="z-10 text-pastel-100 absolute text-8xl top-10 left-10 h-[100px] leading-[100px] overflow-hidden">
                        <div className="index-wrapper">
                            {Array.from({ length: cards.length }).map((_, i) => (
                                <div>{i+1}</div>
                            ))}
                        </div>
                    </div>
                    <div className="inset-0 absolute bg-gradient-to-b from-transparent to-black/30 z-5">
                    </div>
                    <img src={cards[0].img} className="w-full -translate-y-[30%]"/>
                </div>
            </div>
            <div className="col-span-1 text-6xl relative leading-[65px]">
                {cards.map((card, idx) => {
                    if(idx != 0) return <div id={`text-${idx+1}`} className="absolute">{card.description}</div>
                    return <div id={`text-${idx+1}`} className="absolute">{card.description}</div>
                })}
            </div>
        </div>
    )
}