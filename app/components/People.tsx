import Link from 'next/link'
import React from 'react'
import UploadBox from './UploadBox';

interface People {
    name: string;
    email: string;
}

const People = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5',
        { next: { revalidate: 10 } }
    )
    const people: People[] = await res.json();
    return (
        <>
            <div className="grid grid-cols-3 text-primary mb-2 mt-8">
                <div><h2 className='text-xl'>People</h2></div>
                <div className='col-span-2'>
                    <div className="flex h-full justify-end">
                        <Link href='#' className='text-xs inline-flex items-end hover:mr-2 duration-300'>
                            View all
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 size-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid-cols-3 grid-rows-3 gap-3 hidden md:grid">
                {people.map((i, index) =>
                    <div key={index} className={`${index === 0 ? "col-span-2 row-span-2" : ""
                        } bg-primary text-secondary p-3 flex flex-col justify-between hover:bg-opacity-70 cursor-pointer duration-300 pt-20`}>
                        <div></div>
                        <div className='items-end'>
                            {index === 0 ? (
                                <>
                                    <h2 className="text-lg font-semibold capitalize">
                                        {i.name}
                                    </h2>
                                    <p className='text-xs'>{i.email}</p>
                                </>
                            ) : (
                                <h2 className="text-xs font-semibold capitalize">
                                    {i.name}
                                </h2>
                            )}
                        </div>
                    </div>
                )}

                <UploadBox
                    text="Show<br/>Your Work"
                    Icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                        </svg>

                    }
                />
            </div>
            <div className="relative w-full max-w-4xl mx-auto md:hidden">
                <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
                    {people.map((i, index) =>
                        <div key={index} className={`flex-shrink-0 w-4/6`}>
                            <div className='relative w-full h-40 bg-primary text-secondary p-3 flex flex-col justify-between hover:bg-opacity-70 cursor-pointer duration-300'>
                                <div></div>
                                <div>
                                    <h2 className="text-lg font-semibold capitalize">
                                        {i.name}
                                    </h2>
                                    <p className='text-xs'>{i.email}</p>

                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default People