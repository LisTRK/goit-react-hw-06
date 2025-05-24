import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'query',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default slice.reducer;

export const { changeFilter } = slice.actions;
