/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.categories = 'Inactive';
    },
  },
});

export const { addCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
