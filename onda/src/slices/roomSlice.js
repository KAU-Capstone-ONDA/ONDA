import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  peopleCount: '',
  roomCount: '',
  roomType: '',
  facilityType: [],
  attractionType: [],
  serviceType: [],
  amenityType: [],
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setPeopleCount: (state, action) => {
      state.peopleCount = action.payload;
    },
    setRoomCount: (state, action) => {
      state.roomCount = action.payload;
    },
    setRoomType: (state, action) => {
      state.roomType = action.payload;
    },
    setFacilityType: (state, action) => {
      state.facilityType = action.payload;
    },
    setAttractionType: (state, action) => {
      state.attractionType = action.payload;
    },
    setServiceType: (state, action) => {
      state.serviceType = action.payload;
    },
    setAmenityType: (state, action) => {
      state.amenityType = action.payload;
    },
  },
});

export const {
  setPeopleCount,
  setRoomCount,
  setRoomType,
  setFacilityType,
  setAttractionType,
  setServiceType,
  setAmenityType,
} = roomSlice.actions;

export default roomSlice.reducer;
