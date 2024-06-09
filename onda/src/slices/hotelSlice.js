import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hotelName: '호텔 입력',
  hotelLocation: '지역',
};

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    setHotelName: (state, action) => {
      state.hotelName = action.payload;
    },
    setHotelLocation: (state, action) => {
      state.hotelLocation = action.payload;
    },
  },
});

export const { setHotelName, setHotelLocation } = hotelSlice.actions;
export default hotelSlice.reducer;
