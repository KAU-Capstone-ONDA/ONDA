import { useSelector } from 'react-redux';

const useHotelName = () => {
  return useSelector((state) => state.hotel.hotelName);
};

export default useHotelName;
