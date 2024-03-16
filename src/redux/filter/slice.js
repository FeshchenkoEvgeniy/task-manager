import { createSlice } from '@reduxjs/toolkit';
import { priorityFilterOptions } from './variables';

const filterInitialState = priorityFilterOptions.all;

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    newFilterPriority: filterInitialState,
  },
  reducers: {
    updateFilterTasksByPriority: {
      reducer: (state, { payload }) => {
        return { ...state, newFilterPriority: payload };
      },
    },
  },
});

export const { updateFilterTasksByPriority } = filterSlice.actions;
export const priorityFilterReducer = filterSlice.reducer;
