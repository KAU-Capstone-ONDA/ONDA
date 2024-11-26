import TabBar from '../../components/settingRoomType/TabBar';
import BaseChargeInfo from '../../components/baseCharge/BaseChargeInfo';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getRoomsService } from '../../services/roomCRUD/getRooms';
import { setRoom } from '../../slices/getRoomsSlice';
import { message } from 'antd';
import ChargeCodeInfo from '../../components/createChargeCode/ChargeCodeInfo';
import { getChargeCode } from '../../services/createChargeCode/getChargeCode';
import { setChargeCode } from '../../slices/chargeCodeSlice';

const CreateChargeCodePage = () => {
  const dispatch = useDispatch();
  const [roomTypeId, setRoomTypeId] = useState('');
  const [chargeCodeInfo, setChargeCodeInfo] = useState(null);

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

  useEffect(() => {
    const fetchChargeCode = async () => {
      try {
        const data = await getChargeCode(roomTypeId.key);
        setChargeCodeInfo(data);
      } catch (error) {
        message.error(`${error}`);
      }
    };

    fetchChargeCode().then();
  }, [roomTypeId]);

  const handleOnClickRoomType = async (roomTypeId) => {
    setRoomTypeId(roomTypeId);
  };

  return (
    <TabBar onClickRoomType={handleOnClickRoomType} isShowAddButton={false}>
      <ChargeCodeInfo />
    </TabBar>
  );
};

export default CreateChargeCodePage;
