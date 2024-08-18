import Link from 'next/link'
import React from 'react'
import UploadBox from './UploadBox';

interface Documents {
    title: string;
}

const Documents = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1/todos?_limit=5',
        { next: { revalidate: 10 } }
    )
    const documents: Documents[] = await res.json();
    return (
        <>
            <div className="grid grid-cols-3 text-primary mb-2 mt-8">
                <div><h2 className='text-xl'>Documents</h2></div>
                <div className='col-span-2'>
                    <div className="flex h-full justify-end">
                        <Link href='#' className='text-xs inline-flex items-end hover:mr-2 duration-300'>
                            Browse all documents
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 size-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid-cols-3 grid-rows-3 gap-3 hidden md:grid">
                {documents.map((i, index) =>
                    <div key={index} className={`${index === 0 ? "col-span-2 row-span-2" : ""
                        } bg-primary text-secondary p-3 flex flex-col justify-between hover:bg-opacity-70 cursor-pointer duration-300 pt-20`}>
                        <div></div>
                        <div>
                            {index === 0 ? (
                                <>
                                    <h2 className="text-lg font-semibold capitalize">
                                        {i.title}
                                    </h2>
                                    <p className='text-xs'>By Bagus Edghar</p>
                                </>
                            ) : (
                                <h2 className="text-xs font-semibold capitalize">
                                    {i.title}
                                </h2>
                            )}
                        </div>
                    </div>
                )}

                <UploadBox
                    text="Share<br/>Your Document"
                    Icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    }
                />
            </div>
            <div className="relative w-full max-w-4xl mx-auto md:hidden">
                <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
                    {documents.map((i, index) =>
                        <div key={index} className={`flex-shrink-0 w-4/6`}>
                            <div className='relative w-full h-40 bg-primary text-secondary p-3 flex flex-col justify-between hover:bg-opacity-70 cursor-pointer duration-300'>
                                <div></div>
                                <div>
                                    <h2 className="text-lg font-semibold capitalize">
                                        {i.title}
                                    </h2>
                                    <p className='text-xs'>By Bagus Edghar</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Documents