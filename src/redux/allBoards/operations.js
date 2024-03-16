import { privateJsonAxios } from 'services/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllBoards = createAsyncThunk(
  'boards/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await privateJsonAxios.get('/api/boards');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const addNewBoards = createAsyncThunk(
  'boards/addNew',
  async (board, thunkAPI) => {
    try {
      const { data } = await privateJsonAxios.post('/api/boards', board);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const updatesBoardStatus = createAsyncThunk(
  'boards/updateStatus',
  async (boardData, thunkAPI) => {
    try {
      const { data } = await privateJsonAxios.patch(
        `api/boards/${boardData.boardId}/active`,
        boardData.body
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const editBoardsById = createAsyncThunk(
  'boards/editById',
  async (boardData, thunkAPI) => {
    try {
      const { data } = await privateJsonAxios.put(
        `/api/boards/${boardData.boardId}`,
        boardData.body
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const deleteBoards = createAsyncThunk(
  'boards/delete',
  async (boardId, thunkAPI) => {
    try {
      const { data } = await privateJsonAxios.delete(`/api/boards/${boardId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editBoardsBackground = createAsyncThunk(
  'boards/editBackground',
  async (boardData, thunkAPI) => {
    try {
      const { data } = await privateJsonAxios.patch(
        `/api/boards/${boardData.id}/background`,
        boardData.body
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
