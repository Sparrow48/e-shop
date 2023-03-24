import { Button, Table } from 'flowbite-react'
import React, { useEffect } from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserOrders } from '../store/reducer/userSlice'

const History = () => {
    const { orders } = useSelector(state => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        if (Object.keys(orders).length <= 0) {
            dispatch(fetchUserOrders())
        }
    }, [])

    const viewDetailsHandler = () => {

    }
    return (
        <div className='max-w-2xl px-10 py-16 mx-auto lg:px-0 md:max-w-3xl lg:max-w-4xl xl:max-w-6xl'>
            <Table>
                <Table.Head>
                    <Table.HeadCell>
                        Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Phone
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Amount
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Order At
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Action
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {Object.values(orders)?.map((order) => {
                        return (<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {order?.name}
                            </Table.Cell>
                            <Table.Cell>
                                {order?.phone}
                            </Table.Cell>
                            <Table.Cell>
                                {order?.amount} tk
                            </Table.Cell>
                            <Table.Cell>
                                {moment(order?.createdAt).format('ll')}
                            </Table.Cell>
                            <Table.Cell>
                                <Button size="xs" onClick={() => viewDetailsHandler(order._id)}>
                                    View Details
                                </Button>
                            </Table.Cell>
                        </Table.Row>)
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}

export default History