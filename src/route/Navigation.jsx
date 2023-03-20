import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LogIn from '../components/auth/LogIn';
import CommonRoute from './CommonRoute';
import Profile from '../pages/Profile';
import SignUp from './../components/auth/SignUp'
import History from '../pages/History';


const Navigation = () => {

    let loggedIn = localStorage.getItem('sessionId') ? true : false;

    if (loggedIn) {
        return (
            <>
                <CommonRoute />
                <Routes>
                    <Route path={'/profile'} element={<Profile />} />
                    <Route path={'/history'} element={<History />} />
                </Routes>
            </>

        );
    }

    return (
        <div>
            <CommonRoute />
            <Routes>
                <Route path={'/login'} element={<LogIn />} />
                <Route path={'/signup'} element={<SignUp />} />
                <Route path={'/*'} element={<LogIn />} />

            </Routes>
        </div>
    );
};

export default Navigation;