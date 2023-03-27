import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import LogIn from '../components/auth/LogIn';
import CommonRoute from './CommonRoute';
import Profile from '../pages/Profile';
import SignUp from './../components/auth/SignUp'
import History from '../pages/History';
import { fetchUserProfile } from '../store/reducer/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import TrackOrder from '../pages/TrackOrder';
import ComingSoon from '../pages/ComingSoon';


const Navigation = () => {
    const { user } = useSelector(state => state.user)
    let loggedIn = localStorage.getItem('sessionId') ? true : false;

    const dispatch = useDispatch()

    useEffect(() => {
        if (Object.keys(user).length <= 0 && loggedIn) {
            dispatch(fetchUserProfile())
        }
    }, [loggedIn])

    if (loggedIn) {
        return (
            <>
                <CommonRoute />
                <Routes>
                    <Route path={'/profile'} element={<Profile />} />
                    <Route path={'/history'} element={<History />} />
                    <Route path={'/track-order'} element={<ComingSoon />} />
                    <Route path={'/dashboard'} element={<ComingSoon />} />
                    <Route path={'/settings'} element={<ComingSoon />} />
                </Routes>
            </>

        );
    }

    return (
        <div>
            <CommonRoute />
            <Routes>
                <Route exact path={'/login'} element={<LogIn />} />
                <Route exact path={'/signup'} element={<SignUp />} />
                <Route exact path={'/*'} element={<LogIn />} />

            </Routes>
        </div>
    );
};

export default Navigation;