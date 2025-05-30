type Props = {
    children: string,
    variant: "sm" | "lg"
}

export default function Button({children, variant}: Props) {
    return (
        <button
        className={`flex justify-center w-full bg-cyan text-white ${variant==='sm'? 'text-sm': 'text-lg'} font-semibold py-2.5 rounded-sm tracking-wide`}>
            {children}
        </button>
    )
}