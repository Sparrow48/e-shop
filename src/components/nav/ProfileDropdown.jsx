import React from 'react'
import { Avatar, Dropdown } from 'flowbite-react'
import CP from './../../assets/cp.png'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const ProfileDropdown = () => {
    const { user } = useSelector(state => state.user)

    const dispatch = useDispatch();

    const logOutHandler = () => {
        localStorage.removeItem("sessionId");
        window.location.replace('/login');
    };

    return (
        <>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar alt="User settings" img={CP} rounded={true} />}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            {user?.name}
                        </span>
                        <span className="block truncate text-sm font-medium">
                            {user?.username}
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        <NavLink className="flex space-x-1" to="/profile">
                            <h1 >Profile</h1>
                        </NavLink>

                    </Dropdown.Item>
                    <Dropdown.Item>
                        <NavLink className="flex space-x-1" to="/dashboard">
                            <h1 >Dashboard</h1>
                        </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <NavLink className="flex space-x-1" to="/settings">
                            <h1 >Settings</h1>
                        </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        <NavLink onClick={logOutHandler} className="flex space-x-1" to="/login">
                            <h1 >LogOut</h1>
                        </NavLink>
                    </Dropdown.Item>
                </Dropdown>
            </div>
        </>
    )
}

export default ProfileDropdown