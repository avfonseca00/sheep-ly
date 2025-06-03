type Props = {
    children: string
}

export default function ButtonLink({children}: Props) {
    return (
        <button
        className="flex 
        justify-center text-grayish-violet hover:text-very-dark-violet transition-all 
        cursor-pointer text-sm font-bold px-4 py-2.5 rounded-sm tracking-wide">
            {children}
        </button>
    )
}