import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appIdentifier = 'XWEo0IT3IBy6tskuJWZX';

export const getBookList = createAsyncThunk('booklist/getBooklist', async (URL, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${URL + appIdentifier}/books`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addBook = createAsyncThunk('booklist/addBook', async ({ URL, newBook }, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${URL + appIdentifier}/books`, newBook, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const removeBook = createAsyncThunk('bookList/removeBook', async ({ URL, itemId }, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`${URL + appIdentifier}/books/${itemId}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
