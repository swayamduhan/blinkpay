import PayOverlay from "../assets/pay-overlay.webp"
import HeroButton from "./HeroButton"

export default function InteractiveMock(){
    return (
        <div id="mock-wrapper" className="w-[400px] h-[400px] z-10 absolute rounded-3xl overflow-hidden isolate bg-[#DDDAFD] shadow-2xl group">
            <div className="absolute h-[30%] w-full top-0">
                <img src={PayOverlay} className="h-full w-[110%] translate-x-[10%]"/>
            </div>
            <div className="h-[20%] relative z-0 p-6">
                <div className="space-x-1 group-hover:scale-[1.05] transition-all origin-top-left">
                    <span className="text-xl text-neutral-700">Paying to</span>
                    <span className="text-2xl">Swayam</span>
                </div>
            </div>
            <div className="h-[80%] w-full border rounded-3xl z-10 shadow-[0px_0px_40px_20px_#00000020] relative bg-[#222222] group-hover:translate-y-[5px] transition-all p-6 text-pastel-100">
                <div className="space-y-2">
                    <div className="font-instrument text-6xl">$999</div>
                    <textarea rows={3} className="opacity-80 p-1 focus:outline-none w-full resize-none" placeholder="Add remarks?"/>
                </div>
            </div>
            {/* <button className="absolute bottom-5 right-5 border z-10 text-pastel-100">
                
            </button> */}
            <div className="absolute z-10 bottom-5 right-5">
                <HeroButton text="Pay" accent="#DDDAFD"/>
            </div>
        </div>
    )
}