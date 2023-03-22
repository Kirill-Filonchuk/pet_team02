import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, updateUser } from './operations';

const initialState = {
  user: {
    email: null,
    avatarURL: null,
    name: null,
    city: null,
    phone: null,
    birthday: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.result;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.result;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.result.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload.result;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(register.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(logIn.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(logOut.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(updateUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(register.rejected, (state, payload) => {
        state.error = payload.error;
        state.isRefreshing = false;
      })
      .addCase(logIn.rejected, (state, payload) => {
        state.error = payload.error;
        state.isRefreshing = false;
      })
      .addCase(logOut.rejected, (state, payload) => {
        state.error = payload.error;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(updateUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
