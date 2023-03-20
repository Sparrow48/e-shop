import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LogIn from '../components/auth/LogIn';
import CommonRoute from './CommonRoute';
import Profile from '../pages/Profile';

const Navigation = () => {

    let loggedIn = localStorage.getItem('sessionId') ? true : false;

    if (loggedIn) {
        return (
            <>
                <CommonRoute />
                <Routes>
                    <Route path={'/profile'} element={<Profile />} />
                </Routes>
            </>

        );
    }

    return (
        <div>
            <CommonRoute />
            <Routes>
                <Route path={'/login'} element={<LogIn />} />
            </Routes>
        </div>
    );

    return (
        <>
            <Routes>
                <Route exact path={'/login'} element={<LogIn />} />

            </Routes>
        </>
    );
};

export default Navigation;