import { combineReducers } from '@reduxjs/toolkit';
import hotel from '../../src/slices/hotelSlice';
import room from '../../src/slices/roomSlice';
import getRooms from '../../src/slices/getRoomsSlice';

const rootReducer = combineReducers({
  hotel,
  room,
  getRooms,
});

export default rootReducer;
