import { ArrowTopRight } from "./ArrowTopRight";

export default function FAQItem({ title, hoverText }: { title: string, hoverText: string }){
    return (
        <div className="relative rounded-3xl p-6 pr-12 text-lg lg:text-xl text-pastel-100 bg-[#222222] group faq-item">
            <div className="opacity-75 title-text">
                {title}
            </div>
            <div className="h-6 lg:h-8 w-6 lg:w-8 absolute right-6 top-6 group-hover:rotate-[45deg] duration-300 transition-all">
                <ArrowTopRight />
            </div>
            <div className="text-xl lg:text-2xl hover-text">
                {hoverText}
            </div>
        </div>
    )
}