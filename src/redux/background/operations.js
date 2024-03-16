import { createAsyncThunk } from '@reduxjs/toolkit';

import { publicAxios } from 'services/axios';

export const fetchBackgrounds = createAsyncThunk(
  'backgrounds',
  async (_, thunkAPI) => {
    try {
      const { data } = await publicAxios.get('/api/backgrounds');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);
