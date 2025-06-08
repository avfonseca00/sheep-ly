import { ButtonHTMLAttributes } from "react";

type ButtonSize = 'sm' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    size?: ButtonSize;
}

const sizeClasses: Record<ButtonSize, string> = {
    sm: 'text-sm px-0 w-full md:w-[104px] py-2.5',
    lg: 'text-lg py-2.5 md:text-xl px-10 md:py-3.5 rounded-lg md:w-fit w-full',
};
export default function Button({ className = '', children, size = 'sm', ...props }: ButtonProps) {
    return (
        <button
        {...props}
        className={`flex items-center justify-center
        rounded-sm
        bg-cyan hover:bg-cyan-900 transition-all cursor-pointer
        text-white font-bold tracking-wide ${sizeClasses[size]} ${className}`}>
            {children}
        </button>
    )
}