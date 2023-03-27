const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUser = state => state.auth.user;
const selectIsRefreshing = state => state.auth.isRefreshing;
const selectPending = state => state.auth.isPending;

export {selectIsLoggedIn, selectUser, selectIsRefreshing, selectPending};