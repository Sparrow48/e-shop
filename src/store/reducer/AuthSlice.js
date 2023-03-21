import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from '../../utils/AxiosInstance'

let initialState = {

}

export const userLogin = createAsyncThunk(
  'auth/userLogin',
  async (payload) => {
    try {
      const response = await instance.post('/auth/login', payload)
      localStorage.setItem(
        'sessionId',
        (response.data.accessToken)
      );

      window.location.replace('/profile');
      return response.data;
    } catch (error) {
      return Promise.reject(error)
    }
  }
)

export const userSignUp = createAsyncThunk(
  'auth/userSignUp',
  async (payload) => {
    const response = await instance.post('./auth/user', payload)
    window.location.replace('/login');
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
