export const handleFulfilledAuth = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
};

export const handlePendingAuth = state => {
  state.isLoading = true;
};
export const handleRejectedAuth = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilledAuthLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledAuthRefreshUser = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.isLoading = false;
  state.error = null;
};

export const handlePendingAuthRefreshUser = state => {
  state.isRefreshing = true;
  state.isLoading = true;
};
export const handleRejectedAuthRefreshUser = (state, { payload }) => {
  state.isRefreshing = false;
  state.isLoading = false;
};
