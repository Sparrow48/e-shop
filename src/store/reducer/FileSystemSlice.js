import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from '../../utils/AxiosInstance'

let initialState = {

}

export const uploadImage = createAsyncThunk(
    'file/uploadImage',
    async (payload) => {
        try {
            const response = await instance.post('/upload/image', payload)
            console.log(response);
            return response.data;
        } catch (error) {
            return Promise.reject(error)
        }
    }
)


const FileSlice = createSlice({
    name: "file",
    initialState,
    reducers: {
    },
    extraReducers: {
        [uploadImage.pending]: (state, action) => {
            state.loginStatus = 'loading'
        },
        [uploadImage.fulfilled]: (state, action) => {
            state.loginStatus = 'succeeded'
        },
        [uploadImage.rejected]: (state, action) => {
            state.loginStatus = 'failed'
        },

    },
});

export default FileSlice.reducer;
