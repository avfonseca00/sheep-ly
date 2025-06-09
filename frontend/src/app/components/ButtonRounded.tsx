import { AnchorHTMLAttributes } from "react";

type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    size?: ButtonSize;
    link?: string;
}

const sizeClasses: Record<ButtonSize, string> = {
    sm: 'text-sm px-6 py-2',
    md: 'py-2 px-4 text-base',
    lg: 'text-lg px-10 py-3.5',
};
export default function ButtonRounded({className, children, size = "sm", link, ...props}: ButtonProps) {
    return (
        <a
        {...props} 
        href={link}
        className={`flex 
        justify-center items-center w-fit bg-cyan hover:bg-cyan-900 
        transition-all text-white cursor-pointer
        font-bold rounded-full tracking-wider ${sizeClasses[size]} ${className}`}>
            {children}
        </a>
    )
}