type Props = {
    children: string
}

export default function ButtonLink({children}: Props) {
    return (
        <button
        className="flex 
        justify-center text-gray 
        text-sm font-normal px-4 py-2.5 rounded-sm tracking-wide">
            {children}
        </button>
    )
}