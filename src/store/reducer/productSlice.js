import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { instance } from '../../utils/AxiosInstance'

const initialState = {
    products: {}
}

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async () => {
        try {
            const response = await instance.get('/product')
            console.log(response);
            return response.data

        } catch (error) {
            return Promise.reject(error)
        }
    }
)



const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchProduct.fulfilled]: (state, action) => {
            action.payload.map((product) => {
                state.products[product?._id] = product
            })

        },
        [fetchProduct.rejected]: (state, action) => {

        },

    },
});

export default productSlice.reducer;