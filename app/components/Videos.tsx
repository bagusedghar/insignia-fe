import Link from 'next/link'
import React from 'react'
import UploadBox from './UploadBox';

interface Videos {
    id: number;
    albumId: number;
    title: string;
    url: string;
}

const Videos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=5',
        { next: { revalidate: 10 } }
    )
    const videos: Videos[] = await res.json();
    return (
        <>
            <div className="grid grid-cols-3 text-primary mb-2 mt-4">
                <div><h2 className='text-xl'>Videos</h2></div>
                <div className='col-span-2'>
                    <div className="flex h-full justify-end">
                        <Link href='#' className='text-xs inline-flex items-end hover:mr-2 duration-300'>
                            Browse all videos
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 size-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid-cols-3 grid-rows-3 gap-3 hidden md:grid">
                {videos.map((video, index) =>
                    <div key={index} className={`${index === 0 ? "col-span-2 row-span-2" : ""
                        } bg-primary`}>
                        <div className='relative'>
                            <img
                                src={video.url}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col justify-left items-left text-primary p-3 bg-secondary bg-opacity-50 hover:cursor-pointer hover:bg-opacity-20 duration-300">
                                {index === 0 && (
                                    <h2 className="text-lg font-semibold capitalize absolute bottom-10">
                                        {video.title}
                                    </h2>
                                )}
                                <p className="text-sm absolute bottom-3">Video id {video.id}</p>
                                <p className="text-xs absolute bottom-3 right-0 pr-3">Album ke {video.albumId}</p>
                            </div>
                        </div>
                    </div>
                )}

                <UploadBox
                    text="Upload<br/>Your Own Video"
                    Icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                        </svg>
                    }
                />
            </div>
            <div className="relative w-full max-w-4xl mx-auto md:hidden">
                <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
                    {videos.map((video, index) =>
                        <div key={index} className={`flex-shrink-0 w-4/6`}>
                            <div className='relative'>
                                <img
                                    src={video.url}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex flex-col justify-left items-left text-primary p-3 bg-secondary bg-opacity-50 hover:cursor-pointer hover:bg-opacity-20 duration-300">
                                    <h2 className="text-lg font-semibold capitalize absolute bottom-10 pr-2">
                                        {video.title}
                                    </h2>
                                    <p className="text-sm absolute bottom-3">Video id {video.id}</p>
                                    <p className="text-xs absolute bottom-3 right-0 pr-3">Album ke {video.albumId}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Videos