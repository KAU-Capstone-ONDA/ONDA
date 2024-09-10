import { useSelector } from 'react-redux';

const useGetCompetitions = () => {
  return useSelector((state) => state.getCompetitions.data);
};

export default useGetCompetitions;
