import { createReducer } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import * as contactsOperations from 'redux/contacts/contacts-operations';
import * as authOperations from 'redux/auth/auth-operations';

export const loadingReducer = createReducer(initialState.loading, {
  [contactsOperations.getContact.pending]: () => true,
  [contactsOperations.getContact.fulfilled]: () => false,
  [contactsOperations.getContact.rejected]: () => false,
  [contactsOperations.addContact.pending]: () => true,
  [contactsOperations.addContact.fulfilled]: () => false,
  [contactsOperations.addContact.rejected]: () => false,
  [contactsOperations.deleteContact.pending]: () => true,
  [contactsOperations.deleteContact.fulfilled]: () => false,
  [contactsOperations.deleteContact.rejected]: () => false,
  [contactsOperations.editFavoriteContact.pending]: () => true,
  [contactsOperations.editFavoriteContact.fulfilled]: () => false,
  [contactsOperations.editFavoriteContact.rejected]: () => false,
  [contactsOperations.updateContact.pending]: () => true,
  [contactsOperations.updateContact.fulfilled]: () => false,
  [contactsOperations.updateContact.rejected]: () => false,
  [contactsOperations.deleteAvatarContact.pending]: () => true,
  [contactsOperations.deleteAvatarContact.fulfilled]: () => false,
  [contactsOperations.deleteAvatarContact.rejected]: () => false,
  [authOperations.registerUser.pending]: () => true,
  [authOperations.registerUser.fulfilled]: () => false,
  [authOperations.registerUser.rejected]: () => false,
  [authOperations.logInUser.pending]: () => true,
  [authOperations.logInUser.fulfilled]: () => false,
  [authOperations.logInUser.rejected]: () => false,
  [authOperations.logOutUser.pending]: () => true,
  [authOperations.logOutUser.fulfilled]: () => false,
  [authOperations.logOutUser.rejected]: () => false,
  [authOperations.currentUser.pending]: () => true,
  [authOperations.currentUser.fulfilled]: () => false,
  [authOperations.currentUser.rejected]: () => false,
  [authOperations.updateUser.pending]: () => true,
  [authOperations.updateUser.fulfilled]: () => false,
  [authOperations.updateUser.rejected]: () => false,
  [authOperations.deleteAvatarUser.pending]: () => true,
  [authOperations.deleteAvatarUser.fulfilled]: () => false,
  [authOperations.deleteAvatarUser.rejected]: () => false,
});