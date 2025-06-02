type Props = {
    children: string
}

export default function Button({children}: Props) {
    return (
        <button
        className={`flex items-center justify-center w-full text-sm px-0 py-2.5 rounded-sm md:w-fit md:text-lg md:px-10 md:py-3.5 md:rounded-lg xl:text-xl bg-cyan text-white font-semibold tracking-wide`}>
            {children}
        </button>
    )
}