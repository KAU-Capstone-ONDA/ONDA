/** @jsxImportSource @emotion/react */
import React from 'react';
import { Layout, Menu } from 'antd';

const { Sider, Content } = Layout;

const dummyRoom = [
  {
    key: 1,
    label: '스위트룸 (3)',
  },
  {
    key: 2,
    label: '스탠다드룸 (4)',
  },
  {
    key: 3,
    label: '더블룸 (12)',
  },
  {
    key: 4,
    label: '아이싱 룸 (4)',
  },
];

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
      items={items.map((item) => ({ key: item.key, label: item.label }))}
    />
  );
};

const TabBar = ({ children }) => {
  return (
    <Layout
      css={{
        backgroundColor: 'white',
        height: '100vh', // Ensure the layout takes full height
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
            margin: '12px 12px',
          }}
        >
          <RoomTypeTitle text="객실 타입 매핑" />
        </div>
        <RoomList items={dummyRoom} />
      </Sider>
      <Layout
        style={{
          backgroundColor: '#F0F5FF',
          padding: '24px',
          width: '100%',
        }}
      >
        <Content
          style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '24px',
            minHeight: '100%',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default TabBar;
