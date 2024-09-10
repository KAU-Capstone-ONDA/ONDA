import { Button, Input, Modal, Space, Tooltip, Typography } from 'antd';
import Spacer from '../common/Spacer';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCompetitionService } from '../../services/competition/getCompetition';
import Search from 'antd/es/input/Search';

/** @jsxImportSource @emotion/react */

const ModalTitle = ({ title }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Typography.Title level={3} style={{ color: '#004FC5' }}>
        {title}
      </Typography.Title>
    </div>
  );
};

const CompetitionSearchTitle = () => {
  return (
    <div style={{ fontWeight: 'bold', fontSize: '16px' }}>경쟁업체 검색</div>
  );
};

const CompetitionSearchTextInput = ({ onClickSearch }) => {
  return (
    <div style={{ display: 'flex', width: '200px', flexDirection: 'row' }}>
      <Spacer height="12px" />
      <Search placeholder="검색" onSearch={onClickSearch} enterButton />
    </div>
  );
};

const SearchResult = ({ name, onSelectResult }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!name) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    searchCompetitionService({ name })
      .then((responseBody) => {
        setResults(responseBody.data);
      })
      .catch((error) => {
        console.error('Error fetch data', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        padding: '14px 0px',
      }}
    >
      <ul>
        {results.length > 0 ? (
          results.map((hotel) => <li key={hotel.id}>{hotel.hotelName}</li>)
        ) : (
          <li>No results found.</li>
        )}
      </ul>
    </div>
  );
};

const ModalContent = ({ onClickSearch }) => {
  const [searchName, setSearchName] = useState('');
  const dispatch = useDispatch();

  const onSearch = (value) => {
    setSearchName(value);
  };

  const handleSelectResult = () => {};

  return (
    <div style={{ minHeight: '50vh' }}>
      <CompetitionSearchTitle />
      <Spacer height="8px" />
      <CompetitionSearchTextInput onClickSearch={onSearch} />
      <SearchResult name={searchName} onSelectResult={handleSelectResult} />
    </div>
  );
};
const CompetitionAddModal = ({ isModalOpen, onOk, onClickSearch }) => {
  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={onOk}
        okText={'확인'}
        cancelButtonProps={{ style: { display: 'none' } }}
        onCancel={onOk}
      >
        <ModalTitle title="경쟁업체 등록" />
        <ModalContent onClickSearch={onClickSearch} />
      </Modal>
    </>
  );
};
export default CompetitionAddModal;
