import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const baseChargeSlice = createSlice({
  name: 'getBaseCharge',
  initialState,
  reducers: {
    setBaseCharge: (state, action) => {
      state.date = action.payload.data;
    },
  },
});

export const { setBaseCharge } = baseChargeSlice.actions;

export default baseChargeSlice.reducer;
