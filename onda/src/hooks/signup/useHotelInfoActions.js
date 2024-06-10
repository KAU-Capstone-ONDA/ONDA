import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { setHotelLocation, setHotelName } from '../../slices/hotelSlice';
import { useMemo } from 'react';

const useHotelInfoActions = () => {
  const dispatch = useDispatch();
  return useMemo(
    () => bindActionCreators({ setHotelName, setHotelLocation }, dispatch),
    [dispatch],
  );
};

export default useHotelInfoActions;
