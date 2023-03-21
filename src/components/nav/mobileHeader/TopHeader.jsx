import React, { useState } from 'react'
import CP from '../../../assets/cp.png'
import SFLogo from '../../../assets/e-shop.png'
import { NavLink } from 'react-router-dom';



const TopHeader = () => {
    let isLoggedIn = localStorage.getItem('sessionId') ? true : false;

    return (
        <div className=' bg-gray-300'>
            <div className=' flex justify-between '>
                <NavLink to='/' className='flex py-1 px-4 space-x-3 bg-green-400 rounded-br-full drop-shadow-2xl'>
                    {/* <div className=''>
                        <img src={SFLogo} width="40" height="45" alt="" />
                    </div> */}
                    <p className='text-4xl font-semibold  text-white'>e-Shop</p>
                </NavLink>
                <div className='flex items-center px-4'>
                    {isLoggedIn ?
                        <NavLink to='/profile' className='text-white p-2  font-medium'><img src={CP} className='relative mx-auto rounded-full overflow-hidden w-8 h-8' alt="" /></NavLink>

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