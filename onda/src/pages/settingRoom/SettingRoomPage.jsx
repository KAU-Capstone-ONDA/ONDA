import React, { useEffect, useState } from 'react';
import TabBar from '../../components/settingRoomType/TabBar';
import TypeInfo from '../../components/settingRoomType/TypeInfo';
import { Outlet, useLocation } from 'react-router-dom';
import { getRoomsService } from '../../services/getRooms';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { setRoom } from '../../slices/getRoomsSlice';
import { getRoomInfoService } from '../../services/getRoomInfo';

const SettingRoomPage = () => {
  const location = useLocation();
  const isAdd = location.pathname.includes('add');
  const dispatch = useDispatch();
  const [roomTypeId, setRoomTypeId] = useState('');
  const [roomInfo, setRoomInfo] = useState(null);

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
        const data = await getRoomInfoService(roomTypeId.key);
        setRoomInfo(data);
      } catch (error) {
        message.error(`${error}`);
      }
    };

    if (roomTypeId) {
      fetchRoomInfo().then();
    }
  }, [roomTypeId]);

  const handleDeleteRoom = () => {};

  const handleModifyRoom = () => {};

  return (
    <div>
      {!isAdd && (
        <TabBar onClickRoomType={handleOnClickRoomType}>
          <TypeInfo roomInfo={roomInfo} />
        </TabBar>
      )}
      <Outlet />
    </div>
  );
};

export default SettingRoomPage;
