import Link from 'next/link'
import React from 'react'

interface Comments {
    name: string;
    body: string;
}

const Activities = async () => {
    const resC = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=7',
        { next: { revalidate: 10 } }
    )
    const comments: Comments[] = await resC.json();

    return (
        <>
            <div className="grid grid-cols-3 text-primary mb-2 mt-12 md:mt-4">
                <div><h2 className='text-xl'>Activity</h2></div>
                <div className='col-span-2'>
                    <div className="flex h-full justify-end">
                        <Link href='#' className='text-xs inline-flex items-end hover:mr-2 duration-300'>
                            View timeline / Filter activities
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 size-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="divider divider-primary mt-0 mb-0"></div>
            {comments.map((comment, index) =>
                <div key={index} className="indicator w-full group relative bg-opacity-70 hover:bg-orange-200 hover:bg-opacity-20">
                    <span className="indicator-item badge badge-sm badge-primary text-secondary text-xs
                        opacity-0 scale-0 pointer-events-none
                        group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
                        transition-opacity transition-transform duration-300 ease-in-out cursor-pointer">X</span>
                    <div className="card card-side border-secondary border-2 hover:border-primary px-1 duration-300 cursor-pointer">
                        <figure>
                            <div className='w-32 h-16 bg-primary'></div>
                        </figure>
                        <div className="card-body py-1 px-2 gap-0 w-full">
                            <span className="text-primary text-sm font-bold capitalize">{comment.name.split(' ').slice(0, 2).join(' ')} <span className='font-light lowercase' style={{ fontSize: '0.625rem' }}>commented</span></span>
                            <p className='text-primary text-xs capitalize font-light'>{comment.body.length > 65 ? comment.body.substring(0, 65) + '...' : comment.body}</p>
                            <div className="card-actions justify-start text-primary mt-1" style={{ fontSize: '0.625rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                </svg>2 seconds ago

                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="divider divider-primary mt-0 mb-0"></div>
        </>
    )
}

export default Activities