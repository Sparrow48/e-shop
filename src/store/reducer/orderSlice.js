import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from '../../utils/AxiosInstance'

let initialState = {
    orders: {},
    createOrderStatus: '',
    orders: {},
    fetchOrderStatus: '',

}

export const createOrder = createAsyncThunk(
    'order/createOrder',
    async (payload) => {
        try {
            const response = await instance.post('/order', payload)
            return response.data;
        } catch (error) {
            return Promise.reject(error)
        }
    }
)

export const fetchUserOrders = createAsyncThunk(
    'user/fetchUserOrders',
    async () => {
        try {
            const response = await instance.get('/user/purchase-history')
            return response.data;
        } catch (error) {
            return Promise.reject(error)
        }
    }
)



const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
    },
    extraReducers: {
        [createOrder.pending]: (state, action) => {
            state.createOrderStatus = 'loading'
        },
        [createOrder.fulfilled]: (state, action) => {
            state.orders[action.payload?._id] = action.payload
            state.createOrderStatus = 'succeeded'
        },
        [createOrder.rejected]: (state, action) => {
            state.createOrderStatus = 'failed'

        },
        [fetchUserOrders.pending]: (state, action) => {
            state.fetchOrderStatus = 'loading'
        },
        [fetchUserOrders.fulfilled]: (state, action) => {
            action.payload.map((order) => {
                state.orders[order?._id] = order
            })
            state.fetchOrderStatus = 'succeeded'
        },
        [fetchUserOrders.rejected]: (state, action) => {
            state.fetchOrderStatus = 'failed'


        },
    },
});

export default orderSlice.reducer;
