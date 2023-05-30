import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'store/filter/selectorsFilter';

export const selectContacts = state => state.contactsList.items;

export const selectStatusLoading = state => state.contactsList.isLoading;

export const selectError = state => state.contactsList.error;

export const selectFilterContacts = createSelector(
  [selectContacts, selectFilter],
  (contactList, filter) => {
    if (contactList.length === 0) {
      return [];
    }
    if (isNaN(filter[0])) {
      return contactList.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contactList.filter(item => item.number.includes(filter));
    }
  }
);
