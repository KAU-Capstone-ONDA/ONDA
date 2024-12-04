/** @jsxImportSource @emotion/react */
import { Content } from 'antd/es/layout/layout';
import { Layout, Modal, Typography } from 'antd';
import mappingRoomType from '../../mapping/mappingRoomType';
import theme from '../../theme';
import React, { useState } from 'react';
import { formatCurrency, formatDays } from '../../format/FormatDefines';
import Spacer from '../common/Spacer';

const GetChargeCodeInfoComponent = (props) => {
  const { roomTypeId, chargeCodeInfo } = props;
  const [openModals, setOpenModals] = useState({});

  const showChargeDetailModal = (index) => {
    setOpenModals((prev) => ({ ...prev, [index]: true }));
  };

  const handleChargeDetailModalOk = (index) => {
    setOpenModals((prev) => ({ ...prev, [index]: false }));
  };

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
          position: 'relative', // 상대적 위치 지정
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
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

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap', // 원소들이 4개씩 한 행에 배치되도록 설정
                justifyContent: 'flex-start', // 왼쪽 정렬
                width: '100%', // flex 컨테이너의 전체 너비
              }}
            >
              {chargeCodeInfo &&
                chargeCodeInfo.data.map((value, index) => (
                  <div
                    key={`${value.code}`}
                    style={{
                      margin: '4px',
                      fontSize: '16px',
                    }}
                  >
                    <div
                      css={{
                        border: '0.5px solid #004FC5',
                        borderRadius: '8px',
                        color: theme.colors.primary,
                        padding: '8px 12px',
                        cursor: 'pointer',
                        '&:hover': {
                          color: 'white',
                          backgroundColor: theme.colors.primary,
                        },
                      }}
                      onClick={() => showChargeDetailModal(index)}
                    >
                      {`${value.code}`}
                    </div>
                    <BaseChargeInfoModal
                      isModalOpen={openModals[index] || false}
                      handleOk={() => handleChargeDetailModalOk(index)}
                      data={value}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

const BaseChargeInfoModal = ({ isModalOpen, handleOk, data }) => {
  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      okText="확인"
      onCancel={handleOk}
      cancelText="취소"
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography.Title level={4} style={{ textAlign: 'center' }}>
          {`${data.roomTypeName} 기본요금 정보`}
        </Typography.Title>
        {data.dayRates.map((value, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              marginTop: '8px',
            }}
          >
            <div>{`${value.date}`}</div>
            <Spacer width={12} />
            <div style={{ fontWeight: 'bold' }}>
              {formatCurrency(value.rate)}
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default GetChargeCodeInfoComponent;
