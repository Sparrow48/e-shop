import React, { useEffect } from 'react'
import { Card, Dropdown } from 'flowbite-react'
import CP from './../assets/cp.png'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from '../components/helper/Skeleton'
import { fetchUserProfile } from '../store/reducer/userSlice'
import EditUserProfileModal from '../components/profile/EditUserProfileModal'

const Profile = () => {

    const { user, fetchProfileStatus } = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        if (Object.keys(user).length <= 0) {
            dispatch(fetchUserProfile())
        }
    }, [])

    if (fetchProfileStatus === 'loading') {
        return (
            <>
                <div role="status" className="max-w-sm mx-auto md:pt-28 animate-pulse">
                    <Skeleton />
                </div>
            </>
        )
    }

    return (
        <>
            {<EditUserProfileModal visibleModal={true} />}
            <div className="max-w-sm mx-auto md:pt-10">
                <Card>
                    <div className="flex flex-col items-center pb-10">
                        <img
                            className="mb-3 h-24 w-24 rounded-full shadow-lg"
                            src={CP}
                            alt="Profile image"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                            {user?.name}
                        </h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            {user?.username}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            {user?.email}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            {user?.address}
                        </span>

                        <div className="mt-4 flex space-x-3 lg:mt-6">
                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Edit
                            </a>

                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Profile