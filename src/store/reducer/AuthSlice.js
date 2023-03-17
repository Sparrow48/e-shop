import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from '../../utils/AxiosInstance'

let initialState = {

}

export const userLogin = createAsyncThunk(
  'auth/userLogin',
  async (payload) => {
    try {
      const response = await instance.post('/auth/login', payload)
      console.log(response);

    } catch (error) {
      return Promise.reject(error)
    }
  }
)


const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  },
  extraReducers: {
    [userLogin.fulfilled]: (state, action) => {

    },
    [userLogin.rejected]: (state, action) => {

    },

  },
});

export default AuthSlice.reducer;