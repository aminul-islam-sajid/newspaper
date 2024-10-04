import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Images from '../../../images/Images';
import NavText from '../../../components/reUse/NavText';

const Section1 = () => {
    const today = new Date();
    const year = today.getUTCFullYear();
    const date = today.getUTCDate();
    const month = today.toLocaleString('default', { month: 'long' });
    const day = today.toLocaleString('default', { weekday: 'long' });
    const menuItems = (
        <>

            <NavText to={'/us'}>
                <li className='hover:bg-gray-300 rounded-sm px-1'>U.S.</li>
            </NavText>


            <NavText to={'/'}>
                <li className='hover:bg-gray-300 rounded-sm px-1'>International</li>
            </NavText>
            <Link>
                <li className='hover:bg-gray-300 rounded-sm px-1'>Canada</li>
            </Link>
            <Link>
                <li className='hover:bg-gray-300 rounded-sm px-1'>Español</li>
            </Link>
            <Link>
                <li className='hover:bg-gray-300 rounded-sm px-1'>中文</li>
            </Link>

        </>
    );

    return (
        <div className='relative'>
            <div className="navbar" >
                {/* Navbar Start */}
                <div className="navbar-start">
                    {/* <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-1 w-52  shadow">
                            {menuItems}
                        </ul>
                    </div> */}
                    <Icon icon="fluent:search-16-filled" />
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex justify-center">
                    <ul className="menu  menu-horizontal gap-4">
                        {menuItems}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end flex gap-4">
                    <button className="btn btn-xs bg-[#567b95] text-white">
                        SUBSCRIBE FOR $0.25/WEEK</button>
                    <button className="btn btn-xs bg-[#567b95] text-white">Log in</button>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='text-black'>
                    <data value={today.toISOString().split('T')[0]}>
                        {`${day}, ${month} ${date}, ${year}`}
                    </data>.
                    <p> Today’s Paper</p>
                </div>
                <img src={Images.logo} alt="logo" />
                {/* is painding */}
                <h>Stock Market</h>
            </div>
        </div>
    );
};

export default Section1;
