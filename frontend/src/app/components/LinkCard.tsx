import React from 'react'
import Button from './Button'

type Props = {
    link: string,
    short: string
}

export default function LinkCard({link, short}: Props) {
    return (
        <div className="flex flex-col md:flex-row md:justify-between bg-white rounded-md mx-6">
            <div className="flex items-center border-b md:border-none border-[hsl(0,0%,85%)] p-3.5">
                <p className="text-md md:text-lg w-full overflow-hidden whitespace-nowrap overflow-ellipsis">{link}</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 p-4">
                <p className="text-md md:text-lg w-full text-cyan ">{short}</p>
                <Button variant='sm'>
                    Copy
                </Button>
            </div>
        </div>
    )
}