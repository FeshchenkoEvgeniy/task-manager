import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  publicAxios,
  privateJsonAxios,
  privateFormDataAxios,
} from 'services/axios';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const { data } = await publicAxios.post(`/api/users/register`, user);
      const { email, password } = user;
      let userData;
      if (data.status === 'success') {
        const { data } = await publicAxios.post('/api/users/login', {
          email,
          password,
        });
        userData = data;

        return userData;
      }
      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      const { data } = await publicAxios.post(`/api/users/login`, user);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await privateJsonAxios.post('/api/users/logout');

      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    try {
      const { data } = await privateJsonAxios.get(`/api/users/current`);
      if (!data) {
        throw new Error();
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const editUserProfile = createAsyncThunk(
  'auth/profile',
  async (userData, thunkAPI) => {
    try {
      const { data } = await privateFormDataAxios.put(
        `/api/users/current/${userData.userId}`,
        userData.formData
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const editUserTheme = createAsyncThunk(
  'auth/theme',
  async (userData, thunkAPI) => {
    try {
      const { data } = await privateJsonAxios.patch(
        `/api/users/current/${userData.id}/theme`,
        userData.body
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);
