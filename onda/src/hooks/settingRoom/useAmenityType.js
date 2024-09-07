import { useSelector } from 'react-redux';

const useAmenityType = () => {
  return useSelector((state) => state.room.amenityType);
};

export default useAmenityType;
