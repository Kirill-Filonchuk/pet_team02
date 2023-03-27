import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'Services/AxiosConfig';

export const fetchPets = createAsyncThunk('api/pets', async (_, thunkAPI) => {
  try {
    const { data } = await api.get(`api/pets`);
    return data.result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.massage);
  }
});

export const addPet = createAsyncThunk(
  'api/pets',
  async (credentials, thunkAPI) => {
    try {
      const config = {
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json,multipart/form-data',
        },
      };
      const { data } = await api.post('api/pets', credentials, config);
      return data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const deletePet = createAsyncThunk(
  'pets/deletePet',
  async (_id, thunkAPI) => {
    console.log('deletePet', _id);
    
    try {
      const { data } = await api.delete(`api/pets/${_id}`);
      console.log(data);
      return data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const refreshUserPets = createAsyncThunk(
  'userPets/fetch',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      // setAuthHeader(persistedToken);
      const { data } = await api.get('/api/user-pets');
      console.log("refreshUserPets---->",data);
          return data.result.pets;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
