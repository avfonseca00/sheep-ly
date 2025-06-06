import { ButtonHTMLAttributes } from "react";

type ButtonSize = 'sm' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    size?: ButtonSize;
}

const sizeClasses: Record<ButtonSize, string> = {
    sm: 'text-sm px-0 w-full md:w-[104px] py-1.5',
    lg: 'text-xl px-10 py-3.5 rounded-lg md:w-fit w-full',
};
export default function Button({ className = '', children, size = 'sm', ...props }: ButtonProps) {
    return (
        <button
        {...props}
        className={`flex items-center justify-center
        text-sm px-0 py-2.5 rounded-sm
        bg-cyan hover:bg-cyan-900 transition-all cursor-pointer
        text-white font-semibold tracking-wide ${sizeClasses[size]} ${className}`}>
            {children}
        </button>
    )
}