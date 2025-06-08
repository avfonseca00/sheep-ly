import React, { useState } from 'react'
import Button from './Button'

type Props = {
    link: string,
    short: string
}

export default function LinkCard({link, short}: Props) {

    const [copied, setCopied] = useState<boolean>(false);
    const copyToClipboard = async (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();

        try {
            await navigator.clipboard.writeText(short);
            setCopied(true)
        } catch (error) {
            console.log('error', error)
            setCopied(false)
        }
    }

    return (
        <div className="flex flex-col md:flex-row md:justify-between bg-white rounded-md mx-6">
            <div className="flex items-center min-w-0 border-b md:border-none border-[hsl(0,0%,85%)] p-3.5">
                <p className="text-md md:text-lg w-full overflow-hidden whitespace-nowrap overflow-ellipsis">{link}</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 p-4">
                <a href={short} className="text-md md:text-lg w-auto text-cyan overflow-hidden overflow-ellipsis whitespace-nowrap">{short}</a>
                <Button size='sm' className={copied ? 'bg-dark-violet':''} onClick={copyToClipboard}>
                    {copied? 'Copied!': 'Copy'}
                </Button>
            </div>
        </div>
    )
}