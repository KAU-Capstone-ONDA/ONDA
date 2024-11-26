import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const chargeCodeSlice = createSlice({
  name: 'getChargeCode',
  initialState,
  reducers: {
    setChargeCode: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { setChargeCode } = chargeCodeSlice.actions;

export default chargeCodeSlice.reducer;
