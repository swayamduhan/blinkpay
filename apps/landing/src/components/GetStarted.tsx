import { ArrowTopRight } from "./ArrowTopRight";
import InteractiveMock from "./InteractiveMock";
import DashboardMockup from "../assets/mockup.png"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useRef } from "react";
import SectionHeader from "./Header";

export default function GetStarted(){

    const getStartedContainer = useRef<HTMLDivElement>(null)
    useGSAP(() => {
        const tl = gsap.timeline({
            paused: true,
            defaults: {
                ease: "power3.out"
            },
            
        })

        const split1 = SplitText.create("#text-1", {
            type: "lines",
            mask: "lines"
        })


        const split2 = SplitText.create("#text-2", {
            type: "lines",
            mask: "lines"
        })

        tl.from(split1.lines, {
            yPercent: 100,
            stagger: 0.05
        })
        .from(split2.lines, {
            yPercent: 100,
            stagger: 0.05
        }, "-=0.5")
        .fromTo("#mock-wrapper", {
            filter: "blur(20px)",
            opacity: 0
        }, {
            filter: "blur(0px)",
            opacity: 1
        }, "-=0.5")
        .fromTo("#dash-mockup", {
            filter: "blur(20px)",
            opacity: 0
        }, {
            filter: "blur(0px)",
            opacity: 1
        }, "-=0.5")

        ScrollTrigger.create({
            animation: tl,
            trigger: "#get-started-section",
            start: "30% 70%",
            toggleActions: "play none none reverse"
        })
    }, { scope: getStartedContainer})
    return (
        <div ref={getStartedContainer}>

        <section className="min-h-screen mb-20" id="get-started-section">
            <div id="get-started-wrapper" className="p-10 pt-20 space-y-20">
                <SectionHeader text="Get Started" />
                <div id="get-started-content" className="grid grid-cols-3">
                    <div className="col-span-1 text-[40px] lg:text-6xl space-y-4 lg:space-y-10">
                        <div id="text-1" className="leading-[50px] lg:leading-[65px] -space-y-2">
                            {/* for some reason, adding a border transparent fixed my arrow in split text */}
                            <span className="text-purple-700 relative group cursor-pointer border border-transparent">
                                <div className="w-6 lg:w-8 h-6 lg:h-8 absolute -right-4 lg:-right-5 -top-0 group-hover:-right-6 group-hover:-top-1 transition-all duration-300">
                                    <ArrowTopRight />
                                </div>
                                Signup
                            </span>
                            {" "}and setup your payments — within seconds
                        </div>
                        <div id="text-2" className="leading-[50px] lg:leading-[65px] -space-y-2">
                            Experience the interface designed for humans
                        </div>
                    </div>
                    <div className="col-span-2 h-[75vh] relative">
                        <InteractiveMock />
                        <div id="dash-mockup" className="w-[90%] lg:w-[80%] rounded-3xl overflow-hidden absolute bottom-4 lg:bottom-0 right-0 border-4 border-pastel-300/50 shadow-xl shadow-pastel-300/20 hover:scale-[1.01] transition-all duration-300 ease-out">
                            <img src={DashboardMockup} className="object-cover w-full h-full"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}