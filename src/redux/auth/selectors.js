const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUser = state => state.auth.user;
const selectIsRefreshing = state => state.auth.isRefreshing;
const isSubmitting = state => state.auth.isSubmitting;

export {selectIsLoggedIn, selectUser, selectIsRefreshing, isSubmitting};