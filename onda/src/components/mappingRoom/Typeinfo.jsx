/** @jsxImportSource @emotion/react */
import React from 'react';
import { Table, Typography } from 'antd';
import { css } from '@emotion/react';

const dummyData = [
  {
    key: 1,
    hotelName: '신라 호텔',
    roomType: '스위트 룸',
    location: '서울 홍대',
    facility: '매점/편의점, 수영장, 노래방',
    service: '취사가능, WIFI',
    amenity: '욕조, TV',
    attraction: '해수욕장 주변',
  },
  {
    key: 2,
    hotelName: '경영 호텔',
    roomType: '버찌 룸',
    location: '서울 홍대',
    facility: '매점/편의점, 수영장, 노래방',
    service: '취사가능, WIFI',
    amenity: '욕조, TV',
    attraction: '해수욕장 주변',
  },
  {
    key: 3,
    hotelName: '예진 호텔',
    roomType: '퍼스트 룸',
    location: '서울 홍대',
    facility: '매점/편의점, 수영장, 노래방',
    service: '취사가능, WIFI',
    amenity: '욕조, TV',
    attraction: '해수욕장 주변',
  },
  {
    key: 4,
    hotelName: '위더 호텔',
    roomType: '디럭스 룸',
    location: '서울 홍대',
    facility: '매점/편의점, 수영장, 노래방',
    service: '취사가능, WIFI',
    amenity: '욕조, TV',
    attraction: '해수욕장 주변',
  },
  {
    key: 5,
    hotelName: '온다 호텔',
    roomType: '디럭스 룸',
    location: '서울 홍대',
    facility: '매점/편의점, 수영장, 노래방',
    service: '취사가능, WIFI',
    amenity: '욕조, TV',
    attraction: '해수욕장 주변',
  },
];

const columns = [
  {
    title: '호텔 이름',
    dataIndex: 'hotelName',
    key: 'hotelName',
    fixed: 'left',
    width: 150,
    render: (text) => (
      <div
        css={{
          backgroundColor: '#F0F5FF',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          color: '#004FC5',
          border: '1px solid #e0e0e0',
        }}
      >
        {text}
      </div>
    ),
  },
  {
    title: '호텔 타입',
    dataIndex: 'roomType',
    key: 'roomType',
    render: (text) => (
      <div
        css={{
          backgroundColor: 'white',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          border: '1px solid #e0e0e0',
        }}
      >
        {text}
      </div>
    ),
  },
  {
    title: '지역 정보',
    dataIndex: 'location',
    key: 'location',
    render: (text) => (
      <div
        css={{
          backgroundColor: 'white',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          border: '1px solid #e0e0e0',
        }}
      >
        {text}
      </div>
    ),
  },
  {
    title: '시설 정보',
    dataIndex: 'facility',
    key: 'facility',
    render: (text) => (
      <div
        css={{
          backgroundColor: 'white',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          border: '1px solid #e0e0e0',
        }}
      >
        {text}
      </div>
    ),
  },
  {
    title: '어트랙션 정보',
    dataIndex: 'attraction',
    key: 'attraction',
    render: (text) => (
      <div
        css={{
          backgroundColor: 'white',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          border: '1px solid #e0e0e0',
        }}
      >
        {text}
      </div>
    ),
  },
  {
    title: '서비스 정보',
    dataIndex: 'service',
    key: 'service',
    render: (text) => (
      <div
        css={{
          backgroundColor: 'white',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          border: '1px solid #e0e0e0',
        }}
      >
        {text}
      </div>
    ),
  },
  {
    title: '어메니티 정보',
    dataIndex: 'amenity',
    key: 'amenity',
    render: (text) => (
      <div
        css={{
          backgroundColor: 'white',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          border: '1px solid #e0e0e0',
        }}
      >
        {text}
      </div>
    ),
  },
];

const tableStyles = css`
  .ant-table-thead > tr > th {
    background-color: #f0f5ff;
    color: #004fc5;
    font-weight: bold;
    text-align: center;
    border: 1px solid #e0e0e0;
  }
  .ant-table-tbody > tr > td {
    background-color: #ffffff;
    text-align: center;
    border: 1px solid #e0e0e0;
  }
  .ant-pagination {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }
`;

const TypeInfo = () => {
  return (
    <div
      css={css`
        background-color: white;
        border-radius: 8px;
        padding: 24px;
        margin: 24px 0;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      `}
    >
      <Typography.Title level={3} style={{ color: '#004FC5' }}>
        객실 타입 매핑
      </Typography.Title>
      <Table
        dataSource={dummyData}
        columns={columns}
        pagination={{ pageSize: 10, showQuickJumper: true }}
        bordered
        css={tableStyles}
        scroll={{ x: 1300 }} // Ensure the table is scrollable horizontally if needed
      />
    </div>
  );
};

export default TypeInfo;
