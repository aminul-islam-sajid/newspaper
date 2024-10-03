import React from 'react';
import { NavLink } from 'react-router-dom';

const NavText = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isPending
                    ? "pending"
                    : isActive
                        ? "text-gray-400 border-b-1  active py-2  block mx-4"
                        : "hover:text-red-100 py-2 hover:border-b-1  block  mx-4"
            }
        >
            {children}
        </NavLink>
    );
};

export default NavText;
