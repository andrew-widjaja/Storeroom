import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: 'false',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state) => {
      state.login = true;
    },
  },
});

export const { setLogin } = loginSlice.actions;

export default loginSlice.reducer;
