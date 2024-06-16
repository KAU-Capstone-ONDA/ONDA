import { useSelector } from 'react-redux';

const useFacilityType = () => {
  return useSelector((state) => state.room.facilityType);
};

export default useFacilityType;
