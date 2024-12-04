import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getRoomsService } from '../../services/roomCRUD/getRooms';
import { setRoom } from '../../slices/getRoomsSlice';
import { message } from 'antd';
import { getBasicCharge } from '../../services/baseCharge/getBasicCharge';
import AddChargeCodeForm from '../../components/createChargeCode/AddChargeCodeForm';

const CreateChargeCodePage = () => {
  const dispatch = useDispatch();
  const [baseChargeInfo, setBaseChargeInfo] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getRoomsService();
        dispatch(setRoom(data));
      } catch (error) {
        message.error(`${error}`);
      }
    };

    fetchRooms().then();
  }, []);

  const handleOnClickRoomType = async (roomTypeId) => {
    try {
      const data = await getBasicCharge(roomTypeId);
      setBaseChargeInfo(data.data);
    } catch (error) {
      message.error(`${error}`);
    }
  };

  return (
    <AddChargeCodeForm
      onClickRoomType={handleOnClickRoomType}
      baseChargeInfo={baseChargeInfo}
    />
  );
};

export default CreateChargeCodePage;
