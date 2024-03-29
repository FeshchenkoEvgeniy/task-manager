export const selectIsLogined = state => state.auth.isLogined;
export const selectIsUsersLoading = state => state.auth.isLoading;
export const selectUsersName = state => state.auth.users.name;
export const selectUsersAvatar = state => state.auth.users.avatar;
export const selectUsersId = state => state.auth.users.id;
export const selectThemes = state => state.auth.theme;
export const selectIsGettingCurrentUser = state => state.auth.isGetCurrentUser;
export const selectToken = state => state.auth.token;
export const selectUsersEmail = state => state.auth.users.email;
