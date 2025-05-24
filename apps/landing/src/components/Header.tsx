export default function SectionHeader({ text }: { text: string }){
    return (
        <div className="text-2xl text-right border-b pb-10">
            <div className="hover:-translate-x-2 transition-all duration-300">
                {text}
            </div>
        </div>
    )
}