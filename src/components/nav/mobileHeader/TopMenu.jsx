import React from 'react'
import { NavLink } from 'react-router-dom'

const TopMenu = () => {
    return (
        <div className='border-b bg-white'>
            <div className=' flex py-3 mx-2 space-x-5 justify-center'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>Product</NavLink>
                <NavLink to='/history'>History</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
        </div>
    )
}

export default TopMenu