import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}
export default function ButtonLink({className, children}: ButtonProps) {
    return (
        <button
        className={`flex 
        justify-center text-grayish-violet hover:text-very-dark-violet transition-all 
        cursor-pointer text-sm font-bold px-4 py-2.5 rounded-sm tracking-wide ${className}`}>
            {children}
        </button>
    )
}