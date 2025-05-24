import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'query',
  initialState: {
    searchQuery: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export default slice.reducer;

export const { changeFilter } = slice.actions;
