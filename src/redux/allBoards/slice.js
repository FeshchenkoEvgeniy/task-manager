import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllBoards,
  addNewBoards,
  updatesBoardStatus,
  editBoardsById,
  deleteBoards,
  editBoardsBackground,
} from './operations';

const initialState = {
  allBoardInfo: [],
  isLoading: false,
};

export const allBoardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchAllBoards.fulfilled, (state, action) => {
        state.allBoardInfo = action.payload.data.boards;
        state.isLoading = false;
      })
      .addCase(fetchAllBoards.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllBoards.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addNewBoards.fulfilled, (state, action) => {
        state.allBoardInfo.push(action.payload.data.board);
        state.isLoading = false;
      })
      .addCase(addNewBoards.pending, state => {
        state.isLoading = true;
      })
      .addCase(addNewBoards.rejected, state => {
        state.isLoading = false;
      })
      .addCase(updatesBoardStatus.fulfilled, (state, action) => {
        const boardsIdToUpdate = action.payload.data.board._id;
        const changeBoard = state.allBoardInfo.find(
          board => board._id === boardsIdToUpdate
        );
        if (changeBoard) {
          changeBoard.active = action.payload.data.board.active;
        }
      })

      .addCase(editBoardsById.fulfilled, (state, action) => {
        const { _id: boardId } = action.payload.data.board;
        const indexes = state.allBoardInfo.findIndex(
          board => board._id === boardId
        );

        state.allBoardInfo.splice(indexes, 1, action.payload.data.board);
      })
      .addCase(editBoardsById.pending, state => {
        state.isLoading = true;
      })
      .addCase(editBoardsById.rejected, state => {
        state.isLoading = false;
      })
      .addCase(deleteBoards.fulfilled, (state, action) => {
        const deletedBoardById = action.payload.data.deletedBoard._id;
        state.allBoardInfo = state.allBoardInfo.filter(
          board => board._id !== deletedBoardById
        );
        state.isLoading = false;
      })
      .addCase(deleteBoards.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteBoards.rejected, state => {
        state.isLoading = false;
      })
      .addCase(editBoardsBackground.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        editBoardsBackground.fulfilled,
        (
          state,
          {
            payload: {
              data: { board },
            },
          }
        ) => {
          const boardsId = board._id;
          state.isLoading = false;
          state.allBoardInfo = [
            ...state.allBoardInfo.map(board =>
              board._id === boardsId
                ? { ...board, background: board.background }
                : board
            ),
          ];
        }
      )

      .addCase(editBoardsBackground.rejected, state => {
        state.isLoading = false;
      }),
});

export const allBoardsReducer = allBoardsSlice.reducer;
