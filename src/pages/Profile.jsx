import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react'
import { Image } from 'cloudinary-react'
import CP from './../assets/cp.png'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from '../components/helper/Skeleton'
import { fetchUserProfile } from '../store/reducer/userSlice'
import EditUserProfileModal from '../components/profile/EditUserProfileModal'

const Profile = () => {

    const { user, fetchProfileStatus } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [isVisible, setVisible] = useState(false)
    const cloudName = import.meta.env.VITE_CLOUDINARY_NAME;

    useEffect(() => {
        if (Object.keys(user).length <= 0) {
            dispatch(fetchUserProfile())
        }
    }, [])

    const toggleEditProfileModal = () => {
        setVisible(!isVisible)
    }

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
            {isVisible && <EditUserProfileModal visibleModal={isVisible} toggleEditProfileModal={toggleEditProfileModal} profileData={user} />}
            <div className="max-w-sm mx-auto md:pt-10">
                <Card>
                    <div className="flex flex-col items-center pb-10">
                        <Image className="mb-3 h-24 w-24 rounded-full shadow-lg" cloudName={cloudName} publicId={user?.profilePicture} />

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
                            <button
                                className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={toggleEditProfileModal}
                            >
                                Edit
                            </button>

                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Profile