import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    updateLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { updateLocation } = locationSlice.actions;
