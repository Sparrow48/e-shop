import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from '../../utils/AxiosInstance'

let initialState = {
    user: {},
    orders: {}
}

export const fetchUserProfile = createAsyncThunk(
    'user/fetchUserProfile',
    async () => {
        try {
            const response = await instance.get('/user/profile')
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


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchUserProfile.fulfilled]: (state, action) => {
            state.user = action.payload
        },
        [fetchUserProfile.rejected]: (state, action) => {

        },
        [fetchUserOrders.fulfilled]: (state, action) => {
            action.payload.map((order) => {
                state.orders[order?._id] = order
            })
        },
        [fetchUserOrders.rejected]: (state, action) => {

        },

    },
});

export default userSlice.reducer;
