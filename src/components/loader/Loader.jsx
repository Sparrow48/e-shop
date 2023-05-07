import { Modal } from 'flowbite-react'
import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = ({ visibleModal, toggleModal }) => {

    const onClose = () => {
        toggleModal()
    }

    return (
        <Modal
            show={visibleModal}
            onClose={onClose}
        >
            <Modal.Body>
                <div className=' flex mx-auto justify-center items-center h-96'>
                    <InfinitySpin
                        width='200'
                        color="#4fa94d"
                    />
                </div>
            </Modal.Body>

        </Modal>

    )
}

export default Loader