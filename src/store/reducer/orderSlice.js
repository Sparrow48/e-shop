import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from '../../utils/AxiosInstance'

let initialState = {
    orders: {}

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



const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
    },
    extraReducers: {
        [createOrder.fulfilled]: (state, action) => {
            state.orders[action.payload?._id] = action.payload
        },
        [createOrder.rejected]: (state, action) => {

        },

    },
});

export default orderSlice.reducer;
