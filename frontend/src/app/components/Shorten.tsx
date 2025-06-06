"use client"
import { useState } from "react";
import Button from "./Button"
import LinkCard from "./LinkCard"
import axios from "axios";

export default function Shorten() {

    
    const [url, setUrl] = useState('');
    const [links, setLinks] = useState<{ link: string; shortLink: string }[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    };

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        
        e.preventDefault();

        if (!url) return;

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI}/api/links/shorten`, {
                originalLink: url,
            });
            const { shortLink } = response.data;

            // Agregar el nuevo link a la lista para mostrar
            setLinks(prev => [...prev, { link:url, shortLink }]);

        } catch (error) {
            console.error('Error al acortar:', error);
        }
    };

    return (
        <div className="flex flex-col items-center relative w-full bg-grayish-violet-light pt-25 md:pt-27">
            <div className="flex flex-col gap-4 w-full lg:max-w-5xl xl:max-w-6xl absolute top-0 -translate-y-20">
                <form className="flex flex-col md:flex-row gap-4 md:gap-6 mx-6 bg-dark-violet bg-[url(/images/bg-shorten-mobile.svg)] md:bg-[url(/images/bg-shorten-desktop.svg)] bg-no-repeat bg-top-right p-6 xl:px-16 xl:py-13 rounded-lg">
                    <input onChange={handleChange} type="text" name="" className="bg-white xl:text-[20px] p-3 xl:p-4 rounded-sm md:rounded-lg md:flex-1" placeholder="Shorten a link here..." />
                    <Button size="lg" onClick={handleClick}>
                        Shorten It!
                    </Button>
                </form>
            </div>
            <div className="flex flex-col gap-6 md:gap-4 w-full lg:max-w-5xl xl:max-w-6xl">
                {links.map((linkData, index) => (
                    <LinkCard key={index} link={linkData.link} short={linkData.shortLink} />
                ))}
            </div>
        </div>
    )
}