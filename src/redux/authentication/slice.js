import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUser,
  registerUser,
  loginUser,
  logOutUser,
  editUserTheme,
  editUserProfile,
} from './operations';

const authInitialState = {
  users: { name: '', email: '', avatar: '', id: '' },
  token: '',
  theme: 'dark',
  isLogined: false,
  isLoading: false,
  isGetCurrentUser: false,
};
const authenticationSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder =>
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.users.name = action.payload.data.user.name;
        state.users.email = action.payload.data.user.email;
        state.users.avatar = action.payload.data.user.avatarUrl;
        state.users.id = action.payload.data.user._id;
        state.token = action.payload.data.token;
        state.theme = action.payload.data.user.theme;
        state.isLogined = true;
        state.isLoading = false;
      })
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerUser.rejected, state => {
        state.isLoading = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.users.name = action.payload.data.user.name;
        state.users.email = action.payload.data.user.email;
        state.users.avatar = action.payload.data.user.avatarUrl;
        state.users.id = action.payload.data.user._id;
        state.token = action.payload.data.token;
        state.theme = action.payload.data.user.theme;
        state.isLogined = true;
        state.isLoading = false;
      })
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginUser.rejected, state => {
        state.isLoading = false;
      })
      .addCase(logOutUser.fulfilled, state => {
        state.users = { name: '', email: '', avatar: '' };
        state.token = '';
        state.theme = 'dark';
        state.isLogined = false;
      })
      .addCase(editUserTheme.fulfilled, (state, action) => {
        state.theme = action.payload.data.theme;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.token = action.payload.data.token;
        state.isLogined = true;
        state.isGetCurrentUser = false;
        state.isLoading = false;
      })
      .addCase(getCurrentUser.pending, state => {
        state.isLoading = true;
        state.isGetCurrentUser = true;
      })
      .addCase(getCurrentUser.rejected, state => {
        state.isLoading = false;
        state.token = '';
        state.isGetCurrentUser = false;
      })
      .addCase(editUserProfile.pending, state => {
        state.isLoading = true;
      })
      .addCase(editUserProfile.rejected, state => {
        state.isLoading = false;
      })
      .addCase(editUserProfile.fulfilled, (state, action) => {
        state.users.name = action.payload.data.user.name;
        state.users.email = action.payload.data.user.email;
        state.users.avatar = action.payload.data.user.avatarUrl;
        state.users.id = action.payload.data.user._id;
        state.isLoading = false;
      }),
});

export const authenticationReducer = authenticationSlice.reducer;
