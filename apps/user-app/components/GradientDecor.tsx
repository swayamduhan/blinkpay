// keep parent relative and overflow-hidden to make it work

export function GradientDecor(){
    return (
        <>
            <div className="h-[100%] w-[100%] absolute bg-[#4f46e5] rounded-[50%] blur-xl opacity-5 bottom-[-30%] right-[-30%] border"></div>
            <div className="h-[100%] w-[100%] absolute bg-[#4f46e5] rounded-[50%] blur-3xl opacity-5 top-[-30%] left-[-30%] border"></div>
        </>
    )
}