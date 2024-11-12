import { useSelector } from 'react-redux';

const useBaseCharge = () => {
  return useSelector((state) => state.baseCharge.date);
};

export default useBaseCharge;
