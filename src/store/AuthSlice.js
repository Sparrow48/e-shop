import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signUpUser = createAsyncThunk(
  "auth/signUp",
  async (reqConfig, { rejectWithValue }) => {
    try {
      const response = await axios.post(reqConfig.url, {
        email: reqConfig.email,
        password: reqConfig.password,
      });
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const logInUser = createAsyncThunk(
  "auth/logIn",
  async (reqConfig, { rejectWithValue }) => {
    try {
      const response = await axios.post(reqConfig.url, {
        email: reqConfig.email,
        password: reqConfig.password,
      });
      console.log(response.data.idToken);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: JSON.parse(
      localStorage.getItem("isAuthenticated") || false
    ),
    error: "",
  },
  reducers: {
    logOut(state, action) {
      state.isAuthenticated = false;
      localStorage.setItem("isAuthenticated", false);
    },
  },
  extraReducers: {
    [signUpUser.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", true);
      state.error = "";
    },
    [signUpUser.rejected]: (state, action) => {
      state.isAuthenticated = false;
      localStorage.setItem("isAuthenticated", false);
      state.error = action.payload.error.message;
    },
    [logInUser.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", true);
      state.error = "";
    },
    [logInUser.rejected]: (state, action) => {
      state.isAuthenticated = false;
      localStorage.setItem("isAuthenticated", false);
      state.error = action.payload.error.message;
    },
  },
});

export const authActions = AuthSlice.actions;
export default AuthSlice;
