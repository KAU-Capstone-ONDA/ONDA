import { useSelector } from 'react-redux';

const useGetRooms = () => {
  return useSelector((state) => state.getRooms.data);
};

export default useGetRooms;
