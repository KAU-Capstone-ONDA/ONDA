/** @jsxImportSource @emotion/react */
import { Layout } from 'antd';
import React from 'react';
import { Content } from 'antd/es/layout/layout';

const TypeInfo = () => {
  return (
    <Layout css={{ backgroundColor: 'white' }}>
      <Content
        style={{
          margin: '12px 16px',
          height: 'auto',
          minHeight: '600px',
          padding: 24,
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        Content
      </Content>
    </Layout>
  );
};

export default TypeInfo;
