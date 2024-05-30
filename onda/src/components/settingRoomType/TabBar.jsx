/** @jsxImportSource @emotion/react */
import React from 'react';
import { Button, Layout, Menu } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import AddRoomTypePage from '../../pages/addRoomType/AddRoomTypePage';

const { Sider, Content } = Layout;

const dummyRoom = [
  {
    key: 1,
    label: '스위트룸',
  },
  {
    key: 2,
    label: '스탠다드룸',
  },
  {
    key: 3,
    label: '더블룸',
  },
];

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
      onClick={() => navigate('/settingRoomType/add')}
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

const RoomList = ({ items }) => {
  return (
    <Menu
      theme="light"
      mode="inline"
      style={{
        padding: '0px 6px',
      }}
      defaultSelectedKeys={['1']}
      items={items}
    />
  );
};

const TabBar = ({ children }) => {
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
          <AddRoomTypeButton />
        </div>
        <RoomList items={dummyRoom} />
      </Sider>
      {children}
    </Layout>
  );
};

export default TabBar;
