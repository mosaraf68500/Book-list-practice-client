import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='flex justify-center items-center   bg-gray-200 py-3'>
              <NavLink className="text-lg  mr-8 font-semibold" to="/">Home</NavLink>
            <NavLink className=" text-lg font-semibold" to="/books">Add Book</NavLink>
        </div>
    );
};

export default Header;