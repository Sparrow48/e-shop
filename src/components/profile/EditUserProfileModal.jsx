import React from 'react'
import { Avatar, Button, FileInput, Label, Modal, TextInput, Textarea } from 'flowbite-react'
import { useState } from 'react';
import { debounce } from '../../utils/Debounce';
import { uploadImage } from '../../store/reducer/FileSystemSlice';
import { useDispatch } from 'react-redux';

const EditUserProfileModal = ({ visibleModal }) => {

    const [file, setFile] = useState();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const dispatch = useDispatch()


    function handleChange(e) {
        console.log(e.target.files[0]);
        // setFile(URL.createObjectURL(e.target.files[0]));
        const _file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(_file);
        reader.onloadend = () => {
            setFile(reader.result);
        };
    }

    const onClose = () => {
        // toggleModal()
    }

    const submitHandler = async (e) => {
        e.preventDefault();
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

    const nameHandler = (event) => {
        setName(event.target.value);
    };

    const emailHandler = (event) => {
        setEmail(event.target.value);
    };

    const addressHandler = (event) => {
        setAddress(event.target.value);
    };

    const optimize_NameHandler = debounce(nameHandler, 500);
    const optimize_EmailHandler = debounce(emailHandler, 500);
    const optimize_AddressHandler = debounce(addressHandler, 500);
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
                    <form className="flex flex-col gap-4" onSubmit={(e) => submitHandler(e)}>

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
                                    <label className='px-4 py-2 bg-gray-300 rounded cursor-pointer	' for='upload_file'>Upload</label>
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
                                    id="base"
                                    type="text"
                                    sizing="md"
                                    value='Nasib'
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="email2"
                                        value="Email"
                                    />
                                </div>
                                <TextInput
                                    id="email2"
                                    type="email"
                                    placeholder="name@email.com"
                                    required={true}
                                    shadow={true}
                                    value='a@a.com'
                                />
                            </div>
                            <div id="textarea">
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="comment"
                                        value="Address"
                                    />
                                </div>
                                <Textarea
                                    id="comment"
                                    placeholder="Input your address..."
                                    required={true}
                                    rows={3}
                                    value='address'
                                />
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