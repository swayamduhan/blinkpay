export function Button({children }: {children: React.ReactNode }){
    return (
        <button className="bg-gradient-to-r from-accent-main to-accent-light text-white px-4 py-1 rounded-md h-10 leading-[30px] min-w-24 cursor-pointer text-lg group overflow-hidden relative">
            <div className="absolute left-[50%] -translate-x-[50%] -translate-y-[100%] group-hover:-translate-y-[0%] italic underline transition-all duration-200 ease-out">
                {children}
            </div>
            <div className="relative group-hover:translate-y-[100%] transition-all duration-300">
                {children}
            </div>
        </button>
    )
}