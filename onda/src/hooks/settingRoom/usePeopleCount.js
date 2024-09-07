import { useSelector } from 'react-redux';

const usePeopleCount = () => {
  return useSelector((state) => state.room.peopleCount);
};

export default usePeopleCount;
