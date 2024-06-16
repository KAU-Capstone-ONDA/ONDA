import { useSelector } from 'react-redux';

const useRoomType = () => {
  return useSelector((state) => state.room.roomType);
};

export default useRoomType;
