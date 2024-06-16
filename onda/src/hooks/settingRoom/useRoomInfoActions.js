import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import {
  setAmenityType,
  setAttractionType,
  setFacilityType,
  setPeopleCount,
  setRoomCount,
  setRoomType,
  setServiceType,
} from '../../slices/roomSlice';

const useRoomInfoActions = () => {
  const dispatch = useDispatch();
  return useMemo(
    () =>
      bindActionCreators(
        {
          setPeopleCount,
          setRoomCount,
          setRoomType,
          setFacilityType,
          setAttractionType,
          setServiceType,
          setAmenityType,
        },
        dispatch,
      ),
    [dispatch],
  );
};

export default useRoomInfoActions;
