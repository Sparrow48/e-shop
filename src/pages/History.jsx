import { Button, Card, ListGroup, Table } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserOrders } from '../store/reducer/userSlice'
import ViewHistoryDetailsModal from '../components/history/ViewHistoryDetailsModal'

const History = () => {
    const { orders } = useSelector(state => state.user)

    const [visibleModal, setVisibleModal] = useState(false)
    const [productId, setProductId] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        if (Object.keys(orders).length <= 0) {
            dispatch(fetchUserOrders())
        }
    }, [])

    const toggleModal = () => {
        setVisibleModal(!visibleModal)
    }

    const viewDetailsHandler = (id) => {
        setProductId(id)
        toggleModal()
    }
    return (
        <div className='max-w-2xl px-10 py-16 mx-auto lg:px-0 md:max-w-3xl lg:max-w-4xl xl:max-w-6xl'>
            {visibleModal && <ViewHistoryDetailsModal _id={productId} visibleModal={visibleModal} toggleModal={toggleModal} />}
            <div className=' hidden md:inline'>
                <Table>
                    <Table.Head>
                        <Table.HeadCell>
                            Order No
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Order Date
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Order Status
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Amount
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Action
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {Object.values(orders)?.map((order, index) => {
                            return (<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>
                                    #481{index}
                                </Table.Cell>
                                <Table.Cell>
                                    {moment(order?.createdAt).format('ll')}
                                </Table.Cell>
                                <Table.Cell>
                                    Pending
                                </Table.Cell>
                                <Table.Cell>
                                    {order?.amount} tk
                                </Table.Cell>
                                <Table.Cell>
                                    <Button size="xs" onClick={() => viewDetailsHandler(order._id)}>
                                        Details
                                    </Button>
                                </Table.Cell>
                            </Table.Row>)
                        })}
                    </Table.Body>
                </Table>
            </div>
            <div className='md:invisible'>
                <div className=' flex flex-col gap-5'>
                    {
                        Object.values(orders)?.map((order, index) => {
                            return (<div className=' border-2 shadow-md flex flex-col gap-3 justify-center items-center pb-2 rounded-md'>
                                <ul className=' flex flex-col w-full'>
                                    <li className='flex justify-between border-b-2'>
                                        <p className=' pl-4 py-2'>ORDER NO</p>
                                        <p className=' pr-4 py-2'>#481{index}</p>
                                    </li>
                                    <li className='flex justify-between border-b-2'>
                                        <p className=' pl-4 py-2'>ORDER DATE</p>
                                        <p className=' pr-4 py-2'>{moment(order?.createdAt).format('ll')}</p>
                                    </li>
                                    <li className='flex justify-between border-b-2'>
                                        <p className=' pl-4 py-2'>ORDER STATUS</p>
                                        <p className=' pr-4 py-2'>Pending</p>
                                    </li>
                                    <li className='flex justify-between border-b-2'>
                                        <p className=' pl-4 py-2'>AMOUNT</p>
                                        <p className=' pr-4 py-2'>{order?.amount} tk</p>
                                    </li>
                                </ul>
                                <Button onClick={() => viewDetailsHandler(order._id)}>
                                    Details
                                </Button>
                            </div>)

                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default History