import {
  handleFulfilledAuth,
  handleFulfilledAuthLogOut,
  handlePendingAuth,
  handlePendingAuthRefreshUser,
  handleRejectedAuth,
  handleRejectedAuthRefreshUser,
} from './hundleReducerAuth';
import { logIn, logOut, refreshUser, register } from './operationAuth';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const defaultStatus = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

const customArr = [register, logIn, logOut];
const customArrStatusActions = status => customArr.map(el => el[status]);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: buider => {
    buider
      .addCase(register.fulfilled, handleFulfilledAuth)
      .addCase(logIn.fulfilled, handleFulfilledAuth)
      .addCase(logOut.fulfilled, handleFulfilledAuthLogOut)
      .addCase(refreshUser.fulfilled, handleFulfilledAuth)
      .addCase(refreshUser.pending, handlePendingAuthRefreshUser)
      .addCase(refreshUser.rejected, handleRejectedAuthRefreshUser)
      .addMatcher(
        isAnyOf(...customArrStatusActions(defaultStatus.pending)),
        handlePendingAuth
      )
      .addMatcher(
        isAnyOf(...customArrStatusActions(defaultStatus.rejected)),
        handleRejectedAuth
      );
  },
});

export const authReducer = authSlice.reducer;
