// keep parent relative and overflow-hidden to make it work

export function GradientDecor(){
    return (
        <div className="w-full h-full absolute inset-0 pointer-events-none">
            <div className="h-[100%] w-[100%] absolute bg-accent-main rounded-[50%] blur-xl opacity-5 bottom-[-30%] right-[-30%] border"></div>
            <div className="h-[100%] w-[100%] absolute bg-accent-main rounded-[50%] blur-3xl opacity-10 top-[-30%] left-[-30%] border"></div>
        </div>
    )
}