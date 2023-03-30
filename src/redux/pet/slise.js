import { createSlice } from '@reduxjs/toolkit';
import { addPet, refreshUserPets, deletePet, fetchPets } from './operations';

const petSlice = createSlice({
  name: 'pets',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    // FetchPets
    [fetchPets.pending](state) {
      state.isLoading = true;
    },
    [fetchPets.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchPets.error](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // AddPet
    [addPet.pending](state, action) {
      state.isLoading = true;
    },
    [addPet.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [addPet.error](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // DeletePet
    [deletePet.pending](state) {
      state.isLoading = true;
    },

    [deletePet.fulfilled](state, action) {
      console.log('stateDelete', state.items);

      state.isLoading = false;
      state.error = null;
    },
    [deletePet.error](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // RefreshPets
    [refreshUserPets.pending](state, action) {
      state.isLoading = true;
      state.error = null;
    },
    [refreshUserPets.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [refreshUserPets.error](state, action) {
      state.items = action.payload;
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const petsActions = petSlice.actions;
export const petsReducer = petSlice.reducer;
