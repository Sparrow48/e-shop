import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from '../../utils/AxiosInstance'

let initialState = {
    user: {},
    fetchProfileStatus: '',
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

export const updateUserProfile = createAsyncThunk(
    'user/updateUserProfile',
    async (payload) => {
        try {
            console.log(payload);
            const response = await instance.patch('/user', payload)
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
        [fetchUserProfile.pending]: (state, action) => {
            state.fetchProfileStatus = 'loading'
        },
        [fetchUserProfile.fulfilled]: (state, action) => {
            state.user = action.payload
            state.fetchProfileStatus = 'succeeded'
        },
        [fetchUserProfile.rejected]: (state, action) => {
            state.fetchProfileStatus = 'failed'
        },
        [updateUserProfile.pending]: (state, action) => {
            state.fetchProfileStatus = 'loading'
        },
        [updateUserProfile.fulfilled]: (state, action) => {
            state.user = action.payload
            state.fetchProfileStatus = 'succeeded'
        },
        [updateUserProfile.rejected]: (state, action) => {
            state.fetchProfileStatus = 'failed'
        },


    },
});

export default userSlice.reducer;
