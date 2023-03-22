import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from 'components/Services/AxiosConfig';
axios.defaults.baseURL = BASE_URL;
//! add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

//! remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

//? REGISTRATION
const register = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/auth/signup', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//? LOGIN
const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('/api/auth/login', credentials);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//? LOGOUT
const logOut = createAsyncThunk('/api/auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/api/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//? REFRESH USER
const refreshUser = createAsyncThunk('/api/auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    setAuthHeader(persistedToken);
    const response = await axios.patch('/api/auth/update');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export { register, logIn, logOut, refreshUser };
