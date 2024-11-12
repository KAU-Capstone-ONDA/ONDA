import React, { useEffect, useState } from 'react';
import TabBar from '../../components/settingRoomType/TabBar';
import TypeInfo from '../../components/settingRoomType/TypeInfo';
import { Outlet, useLocation } from 'react-router-dom';
import { getRoomsService } from '../../services/roomCRUD/getRooms';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { setRoom } from '../../slices/getRoomsSlice';
import { getRoomInfoService } from '../../services/roomCRUD/getRoomInfo';
import { deleteRoomService } from '../../services/roomCRUD/deleteRoom';

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

  const handleDeleteRoom = async () => {
    try {
      await deleteRoomService(roomTypeId.key);
      window.location.reload();
      message.info('객실을 삭제했습니다.');
    } catch (e) {
      message.error(`객실을 삭제할 수 없습니다: ${e}`);
    }
  };

  const handleModifyRoom = () => {};

  return (
    <div>
      {!isAdd && (
        <TabBar onClickRoomType={handleOnClickRoomType} isShowAddButton={true}>
          <TypeInfo
            roomInfo={roomInfo}
            handleDeleteRoom={handleDeleteRoom}
            handleModifyRoom={handleModifyRoom}
          />
        </TabBar>
      )}
      <Outlet />
    </div>
  );
};

export default SettingRoomPage;
