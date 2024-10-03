import React, { useState } from 'react';
import NavText from '../../../components/reUse/NavText';

const Section2 = () => {
    const [isSubmenuOpen, setSubmenuOpen] = useState(false);

    const handleMouseEnter = () => {
        setSubmenuOpen(true);
    };
    const handleMouseLeave = () => {
        setSubmenuOpen(false);
    };
    const handleSubmenuClick = () => {
        setSubmenuOpen(false);
    };

    const navList = (
        <>
            <NavText to={'/'}>
                <li className='font-textFamily'>Home</li>
            </NavText>
            <NavText to={'/blog'}>
                <li>Blog</li>
            </NavText>
            <NavText to={'/a'}>
                <li>Blog</li>
            </NavText>
            <NavText to={'/b'}>
                <li>Blog</li>
            </NavText>
            <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative"
            >
                <a className="flex items-center justify-between w-full focus:outline-none">
                    Parent
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transition-transform duration-300 ${isSubmenuOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </a>
                {/* Submenu for Parent */}
                {isSubmenuOpen && (
                    <ul className="p-2 bg-gray-100 rounded shadow-lg absolute left-0 mt-1 z-10">
                        <li>
                            <a
                                href="#"
                                onClick={handleSubmenuClick}
                                className="block px-4 py-2 hover:bg-gray-200"
                            >
                                Submenu 1
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={handleSubmenuClick}
                                className="block px-4 py-2 hover:bg-gray-200"
                            >
                                Submenu 2
                            </a>
                        </li>
                    </ul>
                )}
            </li>
            <NavText to={'/c'}>
                <li>Blog</li>
            </NavText>
        </>
    );

    return (
        <div>
            <div className="navbar md:bg-white bg-gray-100 justify-center">
                <div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navList}
                        </ul>
                    </div>
                </div>
                <div className="hidden md:flex">
                    <ul className="md:flex-wrap align-middle cursor-pointer menu-horizontal py-2 gap-4">
                        {navList}
                    </ul>
                </div>
            </div>
            <div className="mb-4">
                <hr className="border-t-2 border-black mb-1" />
                <hr className="border-t border-black" />
            </div>
        </div>
    );
};

export default Section2;
