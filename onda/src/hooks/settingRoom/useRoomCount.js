import { useSelector } from 'react-redux';

const useRoomCount = () => {
  return useSelector((state) => state.room.roomCount);
};

export default useRoomCount;
