import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import TabBar from '../../components/settingRoomType/TabBar';
import TypeInfo from '../../components/settingRoomType/TypeInfo';
import { getRoomsService } from '../../services/roomCRUD/getRooms';
import { setRoom } from '../../slices/getRoomsSlice';
import { message } from 'antd';
import { getRoomInfoService } from '../../services/roomCRUD/getRoomInfo';
import BaseChargeInfo from '../../components/baseCharge/BaseChargeInfo';
import { getBasicCharge } from '../../services/baseCharge/getBasicCharge';

const BaseChargePage = () => {
  const dispatch = useDispatch();
  const [roomTypeId, setRoomTypeId] = useState('');
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
    setRoomTypeId(roomTypeId);
  };

  useEffect(() => {
    const fetchRoomInfo = async () => {
      try {
        const data = await getBasicCharge(roomTypeId.key);
        setBaseChargeInfo(data);
      } catch (error) {
        message.error(`${error}`);
      }
    };

    if (roomTypeId) {
      fetchRoomInfo().then();
    }
  }, [roomTypeId]);

  return (
    <TabBar onClickRoomType={handleOnClickRoomType} isShowAddButton={false}>
      <BaseChargeInfo baseChargeInfo={baseChargeInfo} />
    </TabBar>
  );
};

export default BaseChargePage;
