import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { instance } from '../../utils/AxiosInstance'

const initialState = {
    products: {},
    updateProducts: {},
    items: JSON.parse(localStorage.getItem("cart")) || [],
    totalQuantity: JSON.parse(localStorage.getItem("total")) || 0,
    totalPrice: JSON.parse(localStorage.getItem("totalPrice")) || 0,
}

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async () => {
        try {
            const response = await instance.get('/product')
            return response.data

        } catch (error) {
            return Promise.reject(error)
        }
    }
)

const updateProductsByFilter = (state, products) => {
    products.map((product) => {
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
                updateProductsByFilter(state, filteredProducts)

            }
        },

        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item._id === newItem._id);
            state.totalQuantity = state.totalQuantity + newItem.quantity;
            state.totalPrice = state.totalPrice + newItem.quantity * newItem.price;
            if (!existingItem) {
                state.items.push({
                    _id: newItem._id,
                    price: newItem.price,
                    name: newItem.title,
                    image: newItem.image,
                    Available: newItem.Available,
                    quantity: newItem.quantity,
                    subTotal: newItem.quantity * newItem.price,
                });
            } else {
                existingItem.quantity = existingItem.quantity + newItem.quantity;
                existingItem.subTotal =
                    existingItem.subTotal + newItem.quantity * newItem.price;
            }

            localStorage.setItem("cart", JSON.stringify(state.items));
            localStorage.setItem("total", JSON.stringify(state.totalQuantity));
            localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
        },
        removeItemFromCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item._id === newItem._id);
            state.totalQuantity = state.totalQuantity - newItem.quantity;
            state.totalPrice = state.totalPrice - newItem.quantity * newItem.price;

            if (existingItem.quantity > 1 && newItem.singleUnit) {
                existingItem.quantity = existingItem.quantity - newItem.quantity;
                existingItem.subTotal = existingItem.subTotal - newItem.price;
            } else {
                state.items = state.items.filter((item) => item._id !== existingItem._id);
            }

            localStorage.setItem("cart", JSON.stringify(state.items));
            localStorage.setItem("total", JSON.stringify(state.totalQuantity));
            localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
        },
        removeAllItems(state, action) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
            localStorage.setItem("cart", JSON.stringify(state.items));
            localStorage.setItem("total", JSON.stringify(state.totalQuantity));
            localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
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
    filterProducts,
    addToCart,
    removeItemFromCart,
    removeAllItems
} = productSlice.actions;

export default productSlice.reducer;