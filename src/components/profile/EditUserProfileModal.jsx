import React from 'react'
import { Avatar, Button, FileInput, Label, Modal, TextInput, Textarea } from 'flowbite-react'
import { useState } from 'react';
import { debounce } from '../../utils/Debounce';
import { uploadImage } from '../../store/reducer/FileSystemSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { generateImageURL } from '../../utils/constant'; import { useForm } from "react-hook-form";


const EditUserProfileModal = ({ visibleModal, toggleEditProfileModal, profileData }) => {

    const [file, setFile] = useState();

    const dispatch = useDispatch()

    useEffect(() => {
        const myUrl = generateImageURL('eShop/ytxq22cirm6tvj0aulnj')
        setFile(myUrl)
    }, [])


    const { register, formState: { errors }, handleSubmit } = useForm();

    function handleChange(e) {
        console.log(e.target.files[0]);
        const _file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(_file);
        reader.onloadend = () => {
            setFile(reader.result);
        };
    }

    const onClose = () => {
        toggleEditProfileModal()
    }

    const submitHandler = async (value) => {
        const { name, email, address } = value

        let payload = {
            name,
            address,
            email
        }
        const response = await dispatch(uploadImage({ file }))
        if (response.payload) {
            payload = {
                ...payload,
                image: response.payload.key
            }
        }

        console.log(payload);
    }

    return (
        <>
            <Modal
                show={visibleModal}
                onClose={onClose}
            >
                <Modal.Header>
                    <span className=' font-semibold'>Edit Profile</span>
                </Modal.Header>
                <Modal.Body>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitHandler)}>

                        <div className='flex w-full gap-3 justify-center' >
                            <div className=' flex flex-col gap-3 justify-center text-center'>
                                <Avatar
                                    className="mb-2"
                                    placeholderInitials="RR"
                                    size="xl"
                                    img={file}
                                />

                                <div>

                                    <input class="hidden" type="file" id='upload_file' onChange={handleChange} />
                                    <label className='px-4 py-2 bg-gray-300 rounded cursor-pointer	' for='upload_file'>Chose Image</label>
                                </div>
                            </div>


                        </div>
                        <div className="flex flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="base"
                                        value="Name"
                                    />
                                </div>
                                <TextInput
                                    {...register("name", { required: true })}
                                    aria-invalid={errors.name ? "true" : "false"}
                                    defaultValue={profileData?.name}
                                />
                                {errors.name?.type === 'required' && <p role="alert">First name is required</p>}
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="email2"
                                        value="Email"
                                    />
                                </div>
                                <TextInput
                                    {...register("email", { required: "Email Address is required" })}
                                    aria-invalid={errors.email ? "true" : "false"}
                                    defaultValue={profileData?.email}
                                />
                                {errors.email && <p role="alert">{errors.email?.message}</p>}
                            </div>
                            <div id="textarea">
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="comment"
                                        value="Address"
                                    />
                                </div>
                                <Textarea
                                    {...register("address", { required: "Email Address is required" })}
                                    aria-invalid={errors.address ? "true" : "false"}
                                    defaultValue={profileData?.address}
                                />
                                {errors.address && <p role="alert">{errors.address?.message}</p>}
                            </div>
                        </div>
                        <div className='flex w-full gap-3 justify-end' >
                            <Button onClick={onClose}>
                                Close
                            </Button>
                            <Button type='submit' >
                                submit
                            </Button>
                        </div>
                    </form>

                </Modal.Body>

            </Modal>
        </>
    )
}

export default EditUserProfileModal 