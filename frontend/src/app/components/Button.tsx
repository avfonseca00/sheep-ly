type Props = {
    children: string,
    variant: "sm" | "lg"
}

export default function Button({children, variant}: Props) {
    return (
        <button
        className={`flex items-center justify-center w-full 
        text-sm px-0 py-2.5 rounded-sm
        md:w-fit ${variant==="sm"? "text-sm px-8 py-1.5" : "text-xl px-10 py-3.5 rounded-lg"} 
        bg-cyan hover:bg-cyan-900 transition-all cursor-pointer text-white font-semibold tracking-wide`}>
            {children}
        </button>
    )
}