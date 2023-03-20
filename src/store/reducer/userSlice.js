import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from '../../utils/AxiosInstance'

let initialState = {
    user: {}

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

    },
});

export default userSlice.reducer;
