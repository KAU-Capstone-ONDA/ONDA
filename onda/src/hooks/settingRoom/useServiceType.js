import { useSelector } from 'react-redux';

const useServiceType = () => {
  return useSelector((state) => state.room.serviceType);
};

export default useServiceType;
