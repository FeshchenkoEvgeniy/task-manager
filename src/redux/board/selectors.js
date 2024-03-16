export const selectOneBoardLoading = state => state.board.isLoading;
export const selectBoardId = state => state.board.boardInfo._id;
export const selectColumns = state => state.board.boardInfo.columns;
export const selectBoardData = state => state.board.boardInfo;
