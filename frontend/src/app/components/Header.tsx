"use client"

import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import ButtonLink from "./ButtonLink";
import ButtonRounded from "./ButtonRounded";

type Props = {
    onTop: boolean
}

export default function Header({ onTop }:Props) {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const toggleMenu = () => { 
        const overlay = document.querySelector('.overlay');
        const menu = document.querySelector('.menu');

        if(menu && overlay){
            if(!menuOpen){
                overlay.classList.replace('hidden', 'flex')
                menu.classList.replace('opacity-0', 'opacity-100')
                setMenuOpen(true)
            }else{
                overlay.classList.replace('flex', 'hidden')
                menu.classList.replace('opacity-100', 'opacity-0')
                setMenuOpen(false)
            }
        }
    }

    return (
        <header className={`flex justify-center bg-white sticky top-0 z-10 ${onTop? 'shadow-none' : 'shadow-md'}`}>
            <nav className="flex justify-between w-full lg:max-w-5xl xl:max-w-6xl p-6">
                <div className="flex gap-10 items-center">
                    <a href="/" className="p-1.5">
                        <img src="/sheeply.svg" className="w-auto h-8 bg-cy" alt="Logo"/>
                    </a>
                    <div className="hidden md:flex gap-9">
                        <a href="" className="text-sm text-grayish-violet hover:text-very-dark-violet transition-all font-bold">Features</a>
                        <a href="" className="text-sm text-grayish-violet hover:text-very-dark-violet transition-all font-bold">Pricing</a>
                        <a href="" className="text-sm text-grayish-violet hover:text-very-dark-violet transition-all font-bold">Resources</a>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="md:hidden" onClick={toggleMenu}>
                        <BiMenu size={36} className="fill-grayish-violet"/>
                    </button>
                    <div className="md:flex gap-4 hidden ">
                        <ButtonLink>Login</ButtonLink>
                        <ButtonRounded size="sm">Sign Up</ButtonRounded>
                    </div>
                </div>
                <div onClick={toggleMenu} className="overlay hidden flex-col items-center justify-start w-full h-dvh
                fixed top-24 left-0 z-10">
                    <div className="menu flex flex-col items-center gap-7
                        px-6 py-[38px] w-[calc(100%-48px)] 
                        bg-dark-violet rounded-xl opacity-0 transition-opacity">
                        <a href="" className="text-lg text-white hover:text-very-dark-violet transition-all font-bold">Features</a>
                        <a href="" className="text-lg text-white hover:text-very-dark-violet transition-all font-bold">Pricing</a>
                        <a href="" className="text-lg text-white hover:text-very-dark-violet transition-all font-bold">Resources</a>
                        <hr className="text-[#5a4e79] h-px w-full"/>
                        <a href="" className="text-lg text-white hover:text-very-dark-violet transition-all font-bold">Login</a>
                        <ButtonRounded size="md">
                            Signup
                        </ButtonRounded>
                    </div>
                </div>
            </nav>
        </header>
    )
}
