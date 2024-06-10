import { combineReducers } from '@reduxjs/toolkit';
import hotel from '../../src/slices/hotelSlice';

const rootReducer = combineReducers({
  hotel,
});

export default rootReducer;
