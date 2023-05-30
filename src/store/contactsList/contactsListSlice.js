import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  handleFulfilled,
  handleFulfilledAdd,
  handleFulfilledDelete,
  handlePending,
  handleRejected,
} from './handleReducers';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './operationContacts';

const defaultStatus = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const customArr = [getContactsThunk, addContactThunk, deleteContactThunk];
const customArrStatusActions = status => customArr.map(el => el[status]);

const contactsListSlice = createSlice({
  name: 'contactsList',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilled)
      .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(
        isAnyOf(...customArrStatusActions(defaultStatus.pending)),
        handlePending
      )
      .addMatcher(
        isAnyOf(...customArrStatusActions(defaultStatus.rejected)),
        handleRejected
      );
  },
});

export const contactsListReducer = contactsListSlice.reducer;
