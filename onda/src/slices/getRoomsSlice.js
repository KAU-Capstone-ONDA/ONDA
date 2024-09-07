import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const getRoomsSlice = createSlice({
  name: 'getRooms',
  initialState,
  reducers: {
    setRoom: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { setRoom } = getRoomsSlice.actions;

export default getRoomsSlice.reducer;
