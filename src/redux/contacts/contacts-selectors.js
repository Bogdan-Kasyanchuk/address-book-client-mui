import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getCountDocuments = state => state.contacts.count;
export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],

  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(element =>
      element.name.toLowerCase().includes(normalizedFilter.trim()),
    );
  },
);
