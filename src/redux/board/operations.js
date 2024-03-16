import { createAsyncThunk } from '@reduxjs/toolkit';

import { privateJsonAxios } from 'services/axios';

export const getSingleBoard = createAsyncThunk(
  'board/one',
  async (id, thunkAPI) => {
    try {
      const { data } = await privateJsonAxios.get(`/api/boards/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const addBoardColumn = createAsyncThunk(
  'board/addColumn',
  async (columnData, thunkAPI) => {
    try {
      const { data } = await privateJsonAxios.post(`/api/columns`, columnData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const addBoardCard = createAsyncThunk(
  'board/addCard',
  async (cardData, thunkAPI) => {
    try {
      const { data } = await privateJsonAxios.post(`/api/tasks`, cardData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const editBoardCard = createAsyncThunk(
  'board/editCard',
  async (cardData, thunkAPI) => {
    try {
      const { title, description, priority, deadline } = cardData;
      const newTask = { title, description, priority, deadline };
      const { data } = await privateJsonAxios.put(
        `/api/tasks/${cardData._id}`,
        newTask
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const deleteBoardCard = createAsyncThunk(
  'board/deleteCard',
  async (taskId, thunkAPI) => {
    try {
      const { data } = await privateJsonAxios.delete(`/api/tasks/${taskId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editBoardColumn = createAsyncThunk(
  'board/editColumn',
  async (columnData, thunkAPI) => {
    try {
      const { columnId, title } = columnData;
      const columnTitle = { title };
      const { data } = await privateJsonAxios.put(
        `/api/columns/${columnId}`,
        columnTitle
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const deleteBoardColumn = createAsyncThunk(
  'board/deleteColumns',
  async (columnId, thunkAPI) => {
    try {
      const { data } = await privateJsonAxios.delete(
        `/api/columns/${columnId}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editBoardCardOwner = createAsyncThunk(
  'board/editCardOwner',
  async (cardData, thunkAPI) => {
    const { taskId, info } = cardData;
    try {
      await privateJsonAxios.patch(`/api/tasks/${taskId}`, info);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);
