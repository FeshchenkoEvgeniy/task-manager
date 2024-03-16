import { createSlice } from '@reduxjs/toolkit';
import {
  getSingleBoard,
  addBoardColumn,
  addBoardCard,
  editBoardCard,
  deleteBoardCard,
  editBoardColumn,
  deleteBoardColumn,
} from './operations';

const boardInitialState = {
  isLoading: false,
  boardInfo: {},
};

export const boardSlice = createSlice({
  name: 'board',
  initialState: boardInitialState,
  reducers: {
    changeBoardColumns: (state, action) => {
      state.boardInfo.columns = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getSingleBoard.fulfilled, (state, action) => {
        const boards = action.payload.data.board[0];
        state = {
          isLoading: false,
          boardInfo: boards,
        };
        return state;
      })
      .addCase(getSingleBoard.pending, state => {
        state.isLoading = true;
      })
      .addCase(getSingleBoard.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addBoardColumn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addBoardColumn.fulfilled, (state, action) => {
        const newColumns = {
          ...action.payload.data.column,
          tasks: [],
        };
        state.boardInfo.columns.push(newColumns);
        state.isLoading = false;
      })
      .addCase(addBoardColumn.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addBoardCard.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addBoardCard.fulfilled, (state, action) => {
        const columnIdUpdate = action.payload.data.taks.column;

        const changedBoardColumn = state.boardInfo.columns.find(
          column => column._id === columnIdUpdate
        );

        if (changedBoardColumn) {
          changedBoardColumn.tasks.push(action.payload.data.taks);
        }
        state.isLoading = false;
      })
      .addCase(addBoardCard.rejected, state => {
        state.isLoading = false;
      })
      .addCase(editBoardCard.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(editBoardCard.fulfilled, (state, action) => {
        const changeBoardColumnId = action.payload.data.task.column;
        const changeBoardTaskId = action.payload.data.task._id;
        const changedBoardColumn = state.boardInfo.columns.find(
          column => column._id === changeBoardColumnId
        );

        if (changedBoardColumn) {
          const changeBoardTask = changedBoardColumn.tasks.find(
            task => task._id === changeBoardTaskId
          );

          if (changeBoardTask) {
            changeBoardTask.title = action.payload.data.task.title;
            changeBoardTask.description = action.payload.data.task.description;
            changeBoardTask.priority = action.payload.data.task.priority;
            changeBoardTask.deadline = action.payload.data.task.deadline;
          }
        }
        state.isLoading = false;
      })
      .addCase(editBoardCard.rejected, state => {
        state.isLoading = false;
      })
      .addCase(editBoardColumn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(editBoardColumn.fulfilled, (state, action) => {
        const oldsData = action.payload.data.column;

        const indexes = state.boardInfo.columns.findIndex(
          column => column._id === oldsData._id
        );
        const newsData = {
          ...oldsData,
          tasks: [...state.boardInfo.columns[indexes].tasks],
        };

        state.boardInfo.columns.splice(indexes, 1, newsData);
        state.isLoading = false;
      })
      .addCase(editBoardColumn.rejected, state => {
        state.isLoading = false;
      })
      .addCase(deleteBoardColumn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteBoardColumn.fulfilled, (state, action) => {
        const deletedBoardColumnId = action.payload.data.deletedColumn._id;
        state.boardInfo.columns = state.boardInfo.columns.filter(
          column => column._id !== deletedBoardColumnId
        );
        state.isLoading = false;
      })
      .addCase(deleteBoardColumn.rejected, state => {
        state.isLoading = false;
      })
      .addCase(deleteBoardCard.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteBoardCard.fulfilled, (state, action) => {
        const deletedBoardTaskId = action.payload.data.deletedTask._id;
        state.boardInfo.columns.forEach(column => {
          column.tasks = column.tasks.filter(
            task => task._id !== deletedBoardTaskId
          );
        });
        state.isLoading = false;
      })
      .addCase(deleteBoardCard.rejected, state => {
        state.isLoading = false;
      }),
});

export const singleBoardReducer = boardSlice.reducer;

export const { changeBoardColumns } = boardSlice.actions;
