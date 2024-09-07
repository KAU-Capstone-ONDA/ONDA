import { useSelector } from 'react-redux';

const useAttractionType = () => {
  return useSelector((state) => state.room.attractionType);
};

export default useAttractionType;
