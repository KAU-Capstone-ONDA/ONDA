import { useSelector } from 'react-redux';

const useHotelLocation = () => {
  return useSelector((state) => state.hotel.hotelLocation);
};

export default useHotelLocation;
