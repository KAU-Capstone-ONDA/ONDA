import { Layout, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import mappingRoomType from '../../mapping/mappingRoomType';
import React from 'react';

const ChargeCodeInfo = (props) => {
  return (
    <Layout css={{ backgroundColor: 'white' }}>
      <Content
        style={{
          margin: '12px 16px',
          width: 'auto',
          height: 'auto',
          minHeight: '600px',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px 12px',
          }}
        >
          <Typography.Title level={3}>
            {mappingRoomType('설정한 요금코드')}
          </Typography.Title>
        </div>
      </Content>
    </Layout>
  );
};

export default ChargeCodeInfo;
