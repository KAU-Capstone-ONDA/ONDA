import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const getCompetitionSlice = createSlice({
  name: 'getCompetition',
  initialState,
  reducers: {
    setCompetition: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { setCompetition } = getCompetitionSlice.actions;

export default getCompetitionSlice.reducer;
