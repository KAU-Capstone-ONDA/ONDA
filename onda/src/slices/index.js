import { combineReducers } from '@reduxjs/toolkit';
import hotel from '../../src/slices/hotelSlice';
import room from '../../src/slices/roomSlice';
import getRooms from '../../src/slices/getRoomsSlice';
import getCompetitions from '../../src/slices/getCompetitionSlice';

const rootReducer = combineReducers({
  hotel,
  room,
  getRooms,
  getCompetitions,
});

export default rootReducer;
