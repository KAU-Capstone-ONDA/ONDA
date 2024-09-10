/** @jsxImportSource @emotion/react */
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCompetitionService } from '../../services/competition/getCompetition';
import { setCompetition } from '../../slices/getCompetitionSlice';
import { message } from 'antd';
import TabBar from '../../components/competition/TabBar';
import Add from '../../components/competition/Add';
import CompetitionAddModal from '../../components/competition/CompetitionAddModal';

const CompetitionPage = () => {
  const dispatch = useDispatch();
  const [isCompetitionAddOpen, setIsCompetitionAddOpen] = useState(false);

  useEffect(() => {
    const fetchCompetition = async () => {
      try {
        const data = await getCompetitionService();
        dispatch(setCompetition(data));
      } catch (error) {
        message.error(`${error}`);
      }
    };

    fetchCompetition().then();
  }, []);

  const handleCompetitionClick = () => {};

  const handleAddCompetition = () => {
    setIsCompetitionAddOpen(true);
  };

  const handleModalOk = () => {
    setIsCompetitionAddOpen(false);
  };

  return (
    <div>
      <TabBar
        onClickCompetition={handleCompetitionClick}
        onClickAddCompetition={handleAddCompetition}
      ></TabBar>
      <Outlet />

      <CompetitionAddModal
        isModalOpen={isCompetitionAddOpen}
        onOk={handleModalOk}
      />
    </div>
  );
};

export default CompetitionPage;
