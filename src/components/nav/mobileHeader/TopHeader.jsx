import React, { useState } from 'react'
import CP from '../../../assets/cp.png'
import SFLogo from '../../../assets/e-shop.png'
import { NavLink } from 'react-router-dom';
import ProfileDropdown from '../ProfileDropdown';
import Logo from '../Logo';



const TopHeader = () => {
    let isLoggedIn = localStorage.getItem('sessionId') ? true : false;

    return (
        <div className=' bg-gray-300'>
            <div className=' flex justify-between '>
                <NavLink to='/' className='flex py-1 px-4 space-x-3 bg-green-400 rounded-br-full drop-shadow-2xl'>
                    {/* <div className=''>
                        <img src={SFLogo} width="40" height="45" alt="" />
                    </div> */}
                    <p className='text-4xl font-semibold  text-white'><Logo /></p>
                </NavLink>
                <div className='flex items-center px-4'>
                    {isLoggedIn ?
                        <ProfileDropdown />

                        :
                        <div>
                            <NavLink to='/login' className='text-white p-2  font-medium'>Log In</NavLink>
                        </div>

                    }
                </div>
            </div>
        </div>
    )
}

export default TopHeader