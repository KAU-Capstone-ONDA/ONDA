import DefaultBox from './DefaultBox';
import { Button } from 'antd';
import Spacer from '../common/Spacer';
import theme from '../../theme';
import { useState } from 'react';
import PlaceModal from './PlaceModal';
import useHotelName from '../../hooks/signup/useHotelName';
import useHotelLocation from '../../hooks/signup/useHotelLocation';

const HotelBlock = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const hotelName = useHotelName();
  const hotelLocation = useHotelLocation();

  const showModal = () => {
    setIsOpenModal(true);
  };
  const handleCancel = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <DefaultBox children={hotelName} width="360px" />
        <Spacer width="16px" />
        <Button
          style={{
            height: 'auto',
            backgroundColor: theme.colors.primary,
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
            padding: '4px 20px',
          }}
          onClick={showModal}
        >
          찾기
        </Button>
        <PlaceModal isModalOpen={isOpenModal} handleCancel={handleCancel} />
      </div>
      <Spacer height="16px" />
      <DefaultBox width="360px" children={hotelLocation} />
    </div>
  );
};
export default HotelBlock;
