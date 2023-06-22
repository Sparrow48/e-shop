import React from 'react'
import { Button, Modal, Table } from 'flowbite-react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import moment from 'moment'

const ViewHistoryDetailsModal = ({ _id, visibleModal, toggleModal }) => {
    const { orders } = useSelector(state => state.order)
    const style = "grid  grid-cols-checkout_item gap-4 md:gap-16";
    const blocksItem = 'flex justify-between'
    const divider = 'border-b-2 -mx-2'
    const onClick = () => {

    }
    const onClose = () => {
        toggleModal()
    }
    console.log(orders[_id]);

    return (
        <>
            <Modal
                show={visibleModal}
                onClose={onClose}
            >
                <Modal.Header>
                    <span className=' font-semibold'>Order Date :  </span> <span className=' font-normal'>{moment(orders[_id]?.createdAt).format('ll')}</span>
                </Modal.Header>
                <Modal.Body>
                    <div className=' md:w-3/4 mx-auto p-4 shadow-md rounded-lg'>
                        <div className=' flex flex-col px-2'>
                            <div className=' pb-1 '>
                                <p className=' font-medium'>Delivered to</p>
                                <p>{orders[_id]?.name}</p>
                                <p>{orders[_id]?.deliveredTo}</p>
                            </div>
                            <div className={`${divider}`}></div>
                            <div className=' py-1'>
                                {Object.values(orders[_id]?.products)?.map((_product, index) => {
                                    return (
                                        // grid grid-cols-order-item-mobile sm:grid-cols-order-item gap-3 pb-3
                                        <div className='flex'>
                                            <p className=' md:basis-1/9 basis-1/6'>{_product?.quantity}x</p>
                                            <p className='md:basic-6/9 basis-3/4'> <NavLink to={`/productDetails/${_product?.product?._id}`} className=" text-blue-700">{_product?.product?.title}</NavLink></p>

                                            <p className='text-right md:basis-2/9 basis-2/4'>{_product?.quantity * _product?.price} Tk</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className={`${divider}`}></div>
                            <div className={`${blocksItem} pt-1`}>
                                <p>Subtotal</p>
                                <p>{orders[_id]?.amount - orders[_id]?.deliveryFee} Tk</p>
                            </div>
                            <div className={`${blocksItem}`}>
                                <p>Delivery fee</p>
                                <p>{orders[_id]?.deliveryFee} Tk</p>
                            </div>
                            <div className={`${blocksItem} pb-1`}>
                                <p>Total</p>
                                <p>{orders[_id]?.amount} Tk</p>
                            </div>
                            <div className={`${divider}`}></div>
                            <p className=' pt-1 font-medium'>Paid with</p>
                            <div className={`${blocksItem}`}>
                                <p>Cash on delivery</p>
                                <p>{orders[_id]?.amount} Tk</p>
                            </div>

                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='flex w-full justify-end' >
                        <Button onClick={onClose}>
                            Close
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ViewHistoryDetailsModal