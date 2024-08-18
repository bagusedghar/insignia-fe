import Link from 'next/link'
import React from 'react'

const Channel = async () => {
    const channelList = [
        { label: 'Google' },
        { label: 'Dribble' },
        { label: 'Microsoft' },
        { label: 'Behance' },
        { label: 'Weather Channel' },
        { label: 'Gutus' },
        { label: 'iMedia' },
        { label: 'Creativeye' },
        { label: 'Khan Studios' },
        { label: 'Yahoo' }
    ];

    return (
        <>
            <div className="grid grid-cols-3 text-primary mb-2 mt-8">
                <div><h2 className='text-xl'>Channels</h2></div>
                <div className='col-span-2'>
                    <div className="flex h-full justify-end">
                        <Link href='#' className='text-xs inline-flex items-end hover:mr-2 duration-300'>
                            Browse all channels
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 size-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="divider divider-primary mt-0 mb-0"></div>

            <div className="grid grid-cols-3 md:grid-cols-2 text-primary mb-2 mt-4 gap-3">
                {channelList.map((i, index) =>
                    <div key={index} className={`${index > 8 ? "hidden md:flex" : ""
                        } bg-primary h-20 text-center flex items-center justify-center hover:bg-opacity-70 cursor-pointer duration-300 `}>
                        <h3 className='text-secondary text-md'>{i.label}</h3>
                    </div>
                )}
            </div>
            
            <div className="divider divider-primary mt-4 mb-0"></div>
        </>
    )
}

export default Channel