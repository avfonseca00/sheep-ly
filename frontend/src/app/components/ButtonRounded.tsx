type Props = {
    children: string,
    variant: "sm" | "lg"
}

export default function ButtonRounded({children, variant}: Props) {
    return (
        <a href="#"
        className={`flex 
        justify-center w-fit bg-cyan text-white 
        ${variant==='sm'? 'text-sm': 'text-lg'} font-semibold ${variant==='sm'? 'px-6 py-2': 'px-10 py-3.5'} rounded-full tracking-wider`}>
            {children}
        </a>
    )
}