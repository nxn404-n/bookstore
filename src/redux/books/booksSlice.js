/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { addBook, getBookList, removeBook } from '../getApiData';

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: '',
};

const booksSlice = createSlice({
  name: 'bookList',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBookList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBookList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload;
      })
      .addCase(getBookList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      })
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBook.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addBook.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      })
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBook.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(removeBook.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      });
  },
});

export default booksSlice.reducer;
