import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getRoomsService } from '../../services/roomCRUD/getRooms';
import { setRoom } from '../../slices/getRoomsSlice';
import { message } from 'antd';
import { getBasicCharge } from '../../services/baseCharge/getBasicCharge';
import TabBar from '../../components/settingRoomType/TabBar';
import GetChargeCodeInfoComponent from '../../components/getChargeCode/GetChargeCodeInfoComponent';
import { getChargeCode } from '../../services/createChargeCode/chargeCode';

const GetChargeCodePage = () => {
  const dispatch = useDispatch();
  const [roomTypeId, setRoomTypeId] = useState(null);
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
    const fetchChargeInfo = async () => {
      if (!roomTypeId) return;
      try {
        const data = await getChargeCode(roomTypeId.key);
        setChargeCodeInfo(data);
      } catch (error) {
        message.error(`${error}`);
      }
    };

    fetchChargeInfo().then();
  }, [roomTypeId]);

  const handleOnClickRoomType = async (roomTypeId) => {
    setRoomTypeId(roomTypeId);
  };

  return (
    <TabBar onClickRoomType={handleOnClickRoomType} isShowAddButton={false}>
      <GetChargeCodeInfoComponent chargeCodeInfo={chargeCodeInfo} />
    </TabBar>
  );
};

export default GetChargeCodePage;
