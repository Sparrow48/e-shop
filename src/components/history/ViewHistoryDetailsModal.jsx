import React from 'react'
import { Button, Modal, Table } from 'flowbite-react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const ViewHistoryDetailsModal = ({ _id, visibleModal, toggleModal }) => {
    const { orders } = useSelector(state => state.user)
    const style = "grid  grid-cols-checkout_item gap-4 md:gap-16";
    const onClick = () => {

    }
    const onClose = () => {
        toggleModal()
    }

    return (
        <>
            <Modal
                show={visibleModal}
                onClose={onClose}
            >
                <Modal.Header>
                    Terms of Service
                </Modal.Header>
                <Modal.Body>
                    <Table>
                        <Table.Body className="divide-y">
                            {Object.values(orders[_id]?.products)?.map((_product, index) => {
                                const { product, quantity } = _product
                                return (<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell>
                                        <img src={product?.image} width={80} height={60} alt="" className=' rounded-md' />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <NavLink to={`/productDetails/${product?._id}`} className='text-blue-700'>{product?.title}</NavLink>
                                    </Table.Cell>
                                    <Table.Cell>
                                        {quantity}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {product?.price} tk
                                    </Table.Cell>
                                    <Table.Cell>
                                        {product?.price * quantity} tk
                                    </Table.Cell>
                                </Table.Row>)
                            })}
                        </Table.Body>
                    </Table>
                    <div className='flex items-end justify-end'>

                        <div className="flex flex-col p-5 space-y-4 rounded shadow-xl w-fit h-fit ">
                            <div className={`${style} font-medium md:font-semibold`}>
                                <p>Subtotal :</p>
                                <p>{orders[_id].amount - orders[_id]?.deliveryFee} tk</p>
                            </div>
                            <div className={`${style}`}>
                                <p>Shipping Fee :</p>
                                <p>{orders[_id]?.deliveryFee} tk</p>
                            </div>
                            <div>
                                <p className="border-b "></p>
                            </div>
                            <div
                                className={`${style} text-xl md:text-2xl font-medium md:font-bold`}
                            >
                                <p>Order Total :</p>
                                <p>{orders[_id].amount} tk</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ViewHistoryDetailsModal