import Link from 'next/link'
import React from 'react'

const Header = () => {
    const navItems = [
        { label: 'Videos', href: '#' },
        { label: 'People', href: '#' },
        { label: 'Documents', href: '#' },
        { label: 'Events', href: '#' },
        { label: 'Communities', href: '#' },
        { label: 'Favorites', href: '#' },
        { label: 'Channels', href: '#' }
    ];

    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100 mb-0 md:mb-0">
                <div className="navbar-start w-2/3 md:w-1/3">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-primary pl-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-primary text-secondary border-2 border-secondary" style={{ width: '87vw' }}>
                            {navItems.map((item, index) => (
                                <React.Fragment key={index}>
                                    <li className='py-3'><Link href={item.href}>{item.label}</Link></li>
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>
                    <span className="text-primary text-xl md:text-4xl"><span className="font-semibold">Social</span><span className="font-light">Network</span></span>
                </div>
                <div className="navbar-center hidden lg:flex w-1/2 px-5">
                    <label className="input input-bordered flex items-center gap-2 bg-primary text-secondary w-full">
                        <input type="text" className="grow placeholder:text-secondary" placeholder="Find..." />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
                <div className="hidden md:flex navbar-end w-1/3 md:w-1/3 space-x-2">
                    <button className="btn text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                        </svg>
                        Upload
                    </button>
                    <button className="btn text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </button>
                    <div className="indicator">
                        <span className="indicator-item badge badge-sm badge-primary"></span>
                        <p className='text-primary leading-4 pr-3'>Bagus<br /><span className='text-xs'>Edghar</span></p>
                    </div>
                </div>
                <div className="md:hidden navbar-end w-1/3 md:w-1/3 space-x-3 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </div>
            </div>

            <div className="hidden md:flex divider divider-primary mb-0"></div>

            <ul className="menu menu-horizontal text-primary p-0 hidden md:inline-flex">
                {navItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <li><Link href={item.href}>{item.label}</Link></li>
                        {index < navItems.length - 1 && (
                            <li><span className='pointer-events-none'>/</span></li>
                        )}
                    </React.Fragment>
                ))}
            </ul>

            <label className="md:hidden input input-bordered flex items-center gap-2 bg-primary text-secondary w-full mb-5">
                <input type="text" className="grow placeholder:text-secondary" placeholder="Find..." />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
            </label>

            <div className="hidden md:flex divider divider-primary mt-0"></div>

        </div>
    )
}

export default Header