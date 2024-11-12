/** @jsxImportSource @emotion/react */
import { Button, Layout, Modal, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { Content } from 'antd/es/layout/layout';
import mappingRoomType from '../../mapping/mappingRoomType';
import mappingFacilityType from '../../mapping/mappingFacilityType';
import mappingAttractionType from '../../mapping/mappingAttractionType';
import mappingServiceType from '../../mapping/mappingServiceType';
import mappingAmenityType from '../../mapping/mappingAmenityType';
import theme from '../../theme';
import Spacer from '../common/Spacer';

const TypeTitle = ({ typeName }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Typography.Title level={2}>{mappingRoomType(typeName)}</Typography.Title>
    </div>
  );
};

const TypeInfoText = ({ title, text }) => {
  return (
    <div>
      <Typography.Title
        style={{
          color: '#004FC5',
          fontWeight: 'bold',
        }}
        level={4}
      >
        {title}
      </Typography.Title>
      <div
        style={{
          width: '180px',
          padding: '6px 10px',
          border: '0.5px solid #004FC5',
          borderRadius: '4px',
        }}
      >
        {text}
      </div>
    </div>
  );
};

const DeleteModal = ({ isModalOpen, handleOk, handleCancel }) => {
  return (
    <Modal
      title="온다 메시지"
      open={isModalOpen}
      onOk={handleOk}
      okText="삭제"
      onCancel={handleCancel}
      cancelText="취소"
    >
      <p>
        삭제된 객실타입은 복구 할 수 없습니다.
        <br />
        삭제하시겠습니까?
      </p>
    </Modal>
  );
};

const TypeInfoList = ({ title, typeInfo = [], mapping }: { title: string, typeInfo: string[], mapping: (info: string) => string }) => {
  return (
    <div>
      <Typography.Title
        style={{
          color: '#004FC5',
          fontWeight: 'bold',
        }}
        level={4}
      >
        {title}
      </Typography.Title>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '480px',
          border: '0.5px solid #004FC5',
          padding: '12px 6px',
          borderRadius: '6px',
        }}
      >
        {typeInfo.length === 0 ? (
          <div
            style={{
              fontSize: '16px',
            }}
          >
            없음
          </div>
        ) : (
          typeInfo.map((info, index) => (
            <div
              style={{
                marginInlineEnd: '4px',
                fontSize: '16px',
              }}
              key={index}
            >
              {mapping(info)}
              {index < typeInfo.length - 1 && ','}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const TypeInfo = (props) => {
  const [roomData, setRoomData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {roomInfo, handleDeleteRoom, handleModifyRoom} = props;

  const showModal = () => {
    setIsModalOpen(true);
  }

  const handleOk = () => {
    handleDeleteRoom();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (roomInfo !== null) setRoomData(roomInfo.data);
  }, [roomInfo]);

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
        }}
      >
        {roomData && (
          <>
            <TypeTitle typeName={roomData.roomTypeName} />
            <div
              style={{
                display: 'flex',
                margin: '0px 20px',
                width: 'auto',
                flexDirection: 'column',
              }}
            >
              <TypeInfoText
                title="객실수용 인원"
                text={roomData.people + '명'}
              />

              <TypeInfoText
                title="객실 개수"
                text={roomData.totalRoom + '개'}
              />

              <TypeInfoList
                title="시설 정보"
                typeInfo={roomData.facilityOptions}
                mapping={mappingFacilityType}
              />

              <TypeInfoList
                title="어트렉션"
                typeInfo={roomData.attractionOptions}
                mapping={mappingAttractionType}
              />

              <TypeInfoList
                title="서비스"
                typeInfo={roomData.serviceOptions}
                mapping={mappingServiceType}
              />

              <TypeInfoList
                title="어매니티"
                typeInfo={roomData.amenityOptions}
                mapping={mappingAmenityType}
              />

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginLeft: 'auto',
                  marginTop: '24px',
                  marginBottom: '24px'
                }}>
                {handleDeleteRoom && <div
                  css={{
                    border: '0.5px solid red',
                    borderRadius: '8px',
                    color: 'red',
                    padding: '8px 60px',
                    cursor: 'pointer',
                    '&:hover': {
                      color: 'white',
                      backgroundColor: 'red',
                      fontWeight: 'bold',
                    },
                  }}
                  onClick={showModal}
                >
                  삭제
                </div>}
                <Spacer width="8px" />
                {handleModifyRoom && <div
                  css={{
                    border: '0.5px solid #004FC5',
                    borderRadius: '8px',
                    color: theme.colors.primary,
                    padding: '8px 60px',
                    cursor: 'pointer',
                    '&:hover': {
                      color: 'white',
                      backgroundColor: theme.colors.primary,
                      fontWeight: 'bold',
                    },
                  }}
                >
                  수정
                </div>}
              </div>
            </div>
            <DeleteModal isModalOpen={isModalOpen} handleCancel={handleCancel} handleOk={handleOk} />
          </>
        )}
      </Content>
    </Layout>
  );
};

export default TypeInfo;
