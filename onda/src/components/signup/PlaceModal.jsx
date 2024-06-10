/** @jsxImportSource @emotion/react */
import { Modal } from 'antd';
import { useEffect, useState } from 'react';
import { searchKeyword } from '../../services/kakaoKeyword';
import Search from 'antd/es/input/Search';
import { useDispatch } from 'react-redux';
import { setHotelLocation, setHotelName } from '../../slices/hotelSlice';

const errorContent = {
  title: '로그인 오류',
  content: <></>,
};

const SearchResult = ({ query, onSelectResult }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) {
      setResults([]);
      setLoading(false);
      return;
    }
    setLoading(true);

    searchKeyword({ query })
      .then((data) => {
        setResults(data.documents);
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        padding: '14px 0px',
      }}
    >
      {results.map((result, index) => (
        <div
          css={{
            cursor: 'pointer',
            color: 'black',
            '&:hover': {
              color: '#004FC5',
              fontWeight: 'bold',
            },
            fontSize: '16px',
          }}
          key={index}
          onClick={() => onSelectResult(result)}
        >
          {result.place_name} ({result.address_name})
        </div>
      ))}
    </div>
  );
};

const PlaceModal = ({ isModalOpen, handleCancel }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const onSearch = (value) => {
    setSearchQuery(value);
  };

  const handleSelectResult = (result) => {
    dispatch(setHotelName(result.place_name));
    dispatch(setHotelLocation(result.address_name));
    handleCancel();
  };

  return (
    <Modal
      title="호텔 추가"
      open={isModalOpen}
      onCancel={handleCancel}
      cancelText="취소"
      okButtonProps={{ style: { display: 'none' } }}
    >
      <Search placeholder="ex) 온다호텔" onSearch={onSearch} enterButton />
      <SearchResult query={searchQuery} onSelectResult={handleSelectResult} />
    </Modal>
  );
};

export default PlaceModal;
