/** @jsxImportSource @emotion/react */
import React from 'react';
import { Button, Layout, Menu } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import useGetRooms from '../../hooks/getRooms/useGetRooms';
import mappingRoomType from '../../mapping/mappingRoomType';

const { Sider } = Layout;

const AddRoomTypeButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      style={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
      type="primary"
      shape="default"
      icon={<PlusOutlined style={{ color: '#004FC5' }} />}
      onClick={() => navigate('/settingroom/add')}
    />
  );
};

const RoomTypeTitle = ({ text }) => {
  return (
    <div
      css={{
        fontWeight: 'bold',
        fontSize: '1.125rem',
        color: '#004FC5',
        paddingInlineStart: '8px',
      }}
    >
      {text}
    </div>
  );
};

const RoomList = ({ onClickRoomType }) => {
  const rooms = useGetRooms();
  const roomTypes = rooms.map((room) => ({
    key: room.roomTypeId,
    label: mappingRoomType(room.roomTypeName),
  }));

  return (
    <Menu
      theme="light"
      mode="inline"
      style={{
        padding: '0px 6px',
      }}
      items={roomTypes}
      onClick={(key) => onClickRoomType(key)}
    />
  );
};

const TabBar = ({ onClickRoomType, children, isShowAddButton }) => {
  return (
    <Layout
      css={{
        backgroundColor: 'white',
      }}
    >
      <Sider
        style={{
          backgroundColor: 'white',
          margin: '12px 8px',
          borderRadius: '8px',
          border: '0.5px solid #004FC5',
        }}
        trigger={null}
        width="250px"
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '12px 12px',
          }}
        >
          <RoomTypeTitle text="객실타입" />
          {isShowAddButton && <AddRoomTypeButton />}
        </div>
        <RoomList onClickRoomType={onClickRoomType} />
      </Sider>
      {children}
    </Layout>
  );
};

export default TabBar;
