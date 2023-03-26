import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from '../../utils/AxiosInstance'

let initialState = {
  loginStatus: ''

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
    [userLogin.pending]: (state, action) => {
      state.loginStatus = 'loading'
    },
    [userLogin.fulfilled]: (state, action) => {
      state.loginStatus = 'succeeded'
    },
    [userLogin.rejected]: (state, action) => {
      state.loginStatus = 'failed'
    },

  },
});

export default AuthSlice.reducer;
