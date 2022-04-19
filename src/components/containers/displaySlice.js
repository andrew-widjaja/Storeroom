import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  display: 'default',
};

export const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    setDisplay: (state, action) => {
      state.display = action.payload;
    },
  },
});

export const { setDisplay } = displaySlice.actions;

export default displaySlice.reducer;
