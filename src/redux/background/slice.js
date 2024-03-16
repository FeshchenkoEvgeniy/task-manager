import { createSlice } from '@reduxjs/toolkit';
import { fetchBackgrounds } from './operations';

const backgroundInitialState = {
  allBackgrounds: {},
  isLoading: false,
};

export const backgroundsSlice = createSlice({
  name: 'backgrounds',
  initialState: backgroundInitialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchBackgrounds.fulfilled, (state, action) => {
        state.backgrounds = action.payload.data;
        state.isLoading = false;
      })
      .addCase(fetchBackgrounds.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchBackgrounds.rejected, (state, action) => {
        state.isLoading = false;
      }),
});

export const backgroundsDataReducer = backgroundsSlice.reducer;
