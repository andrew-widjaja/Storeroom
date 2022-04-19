import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  display: 'default',
};

export const displaySlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setDisplay: (state, action) => {
      state.display = action.payload;
    },
  },
});

export const { setDisplay } = displaySlice.actions;

export default displaySlice.reducer;
