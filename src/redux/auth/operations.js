import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'Services/AxiosConfig';

//! add JWT
const setAuthHeader = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

//! remove JWT
const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = '';
};

//? REGISTRATION
const register = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post('/api/auth/signup', credentials);
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
    const response = await api.post('/api/auth/login', credentials);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//? LOGOUT
const logOut = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  try {
    await api.get('/api/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//? UPDATE USER
const updateUser = createAsyncThunk(
  '/auth/updateUser',
  async ({ value }, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const config = {
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${persistedToken}`,
          'Content-Type': 'application/json,multipart/form-data',
        },
      };

      const response = await api.patch('/api/auth/update', value, config);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//? DELETE USERS AVATAR
const deleteUsersAvatar = createAsyncThunk(
  '/auth/updateUser/deleteUsersAvatar',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const response = await api.get('/api/auth/deleteAvatar');

      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//? REFRESH USER
const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  // Reading the token from the state via getState()
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    // If there is no token, exit without performing any request
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    // If there is a token, add it to the HTTP header and perform the request
    setAuthHeader(persistedToken);
    const response = await api.get('/api/user-pets');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export { register, logIn, logOut, refreshUser, updateUser, deleteUsersAvatar };
