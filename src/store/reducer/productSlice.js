import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { instance } from '../../utils/AxiosInstance'

const initialState = {
    products: {},
    updateProducts: {}
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

const updateProductsByFilter = (state, products) => {
    products.map((product) => {
        console.log(product);
        state.updateProducts[product?._id] = product
    })
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        filterProducts(state, action) {
            const { searchString, active: category } = action.payload;
            let newProducts;
            let filteredProducts;
            state.updateProducts = {}

            if (category === "All" && !searchString) {
                updateProductsByFilter(state, Object.values(state.products))
            } else {
                if (category === "All") {
                    newProducts = Object.values(state.products);
                } else {
                    newProducts = Object.values(state.products)?.filter((product) => {
                        return product.category === category;
                    });
                }

                if (!searchString) {
                    filteredProducts = newProducts;
                } else {
                    filteredProducts = newProducts.filter((product) => {
                        return product.title
                            .toLowerCase()
                            .includes(searchString.toLowerCase());
                    });
                }
                // state.updateProducts = [];
                // state.updateProducts.push(...filteredProducts);
                console.log(filteredProducts);
                updateProductsByFilter(state, filteredProducts)

            }
        },
    },
    extraReducers: {
        [fetchProduct.fulfilled]: (state, action) => {
            action.payload.map((product) => {
                state.products[product?._id] = product
            })

            state.updateProducts = state.products

        },
        [fetchProduct.rejected]: (state, action) => {

        },

    },
});

export const {
    filterProducts
} = productSlice.actions;

export default productSlice.reducer;