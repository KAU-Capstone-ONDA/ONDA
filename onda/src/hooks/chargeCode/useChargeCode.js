import { useSelector } from 'react-redux';

const useChargeCode = () => {
  return useSelector((state) => state.chargeCode.date);
};

export default useChargeCode;
