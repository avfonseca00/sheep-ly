import { BiMenu } from "react-icons/bi";
import ButtonLink from "./ButtonLink";
import ButtonRounded from "./ButtonRounded";

export default function Header() {
    return (
        <header className="flex justify-center bg-white">
            <nav className="flex justify-between w-full lg:max-w-5xl xl:max-w-6xl p-6">
                <div className="flex gap-10 items-center">
                    <a href="#" className="p-1.5">
                        <img src="/next.svg" className="w-auto h-6 bg-cy" alt="Logo"/>
                    </a>
                    <div className="hidden md:flex gap-9">
                        <a href="" className="text-sm text-grayish-violet font-bold">Features</a>
                        <a href="" className="text-sm text-grayish-violet font-bold">Pricing</a>
                        <a href="" className="text-sm text-grayish-violet font-bold">Resources</a>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="md:hidden">
                        <BiMenu size={36} className="fill-grayish-violet"/>
                    </button>
                    <div className="md:flex gap-4 hidden ">
                        <ButtonLink>Login</ButtonLink>
                        <ButtonRounded variant="sm">Sign Up</ButtonRounded>
                    </div>
                </div>
            </nav>
        </header>
    )
}
