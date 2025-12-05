import React from 'react';
import logo from '../../assets/logo.png'
const Logo = () => {
    return (
        <div className='flex items-end '>
            <img className='rounded-2xl' src={logo} alt="" />
        </div>
    );
};

export default Logo;