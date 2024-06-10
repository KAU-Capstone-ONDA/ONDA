/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Button, Divider, Input, Rate, Typography, Modal, Collapse, notification } from 'antd';
import { css } from '@emotion/react';
import '../../assets/css/addCompetitionRoomType/competitionPageModal.css';
import Spacer from './Spacer';
import FacilityType from './type/FacilityType';
import AttractionType from './type/AttractionType';
import ServiceType from './type/ServiceType';
import AmenityType from './type/AmenityType';

const { Panel } = Collapse;

const AddCompetitionRoomType = ({ open, onOk }) => {
  const [hotelData, setHotelData] = useState(null);

  const fetchHotelData = async (hotelName) => {
    try {
      const response = await fetch(`http://13.124.42.147/v1/hotels?name=${hotelName}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data.message === "존재하지 않는 호텔입니다.") {
        notification.error({ message: 'Error', description: data.message });
      } else {
        setHotelData(data.data);
        notification.success({ message: 'Success', description: data.message });
      }
    } catch (error) {
      notification.error({ message: 'Error', description: error.message });
    }
  };
  // const handleRegisterHotel = async () => {
  //   if (!hotelData || hotelData.length === 0) {
  //     notification.error({ message: 'Error', description: '등록할 호텔이 없습니다.' });
  //     return;
  //   }
  //
  //   try {
  //     const response = await fetch('http://13.124.42.147/v1/competing-hotel', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ competingHotelId: hotelData[0].id }),
  //     });
  //
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //
  //     const result = await response.json();
  //     if (result.message === "경쟁 호텔 등록에 성공했습니다.") {
  //       setCompetitionData(prev => [...prev, result.data[0]]);
  //       notification.success({ message: 'Success', description: result.message });
  //       onOk();
  //     } else {
  //       notification.error({ message: 'Error', description: result.message });
  //     }
  //   } catch (error) {
  //     notification.error({ message: 'Error', description: error.message });
  //   }
  // };

  return (
    <Modal
      open={open}
      onOk={onOk}
      centered
      className='add-room-wrap'
      width={1600}
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F5FAFF',
      }}
    >
      <div
        className='add-room-container'
        style={{
          width: '100%',
          backgroundColor: 'white',
          margin: '8px 0px',
          borderRadius: '12px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div
          style={{
            padding: '24px 80px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '24px',
            }}
          >
            <Typography.Title level={2} css={{ color: '#2D72D9' }}>경쟁업체 등록</Typography.Title>
          </div>
          <Divider />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginBottom: '24px',
            }}
          >
            <Typography.Title level={4} css={{ color: '#2D72D9' }}>경쟁업체 등록</Typography.Title>
            <Input.Search
              placeholder="신라호텔"
              onSearch={fetchHotelData}
              style={{ width: 200, marginBottom: '12px' }}
            />
            {hotelData && (
              <>
                <Typography.Title level={5} css={{ marginBottom: '8px' }}>호텔 기본 정보</Typography.Title>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    css={{
                      padding: '6px 12px',
                      border: '1px solid #d9d9d9',
                      borderRadius: '4px',
                      backgroundColor: '#F0F5FF',
                    }}
                  >
                    {hotelData[0].region} {hotelData[0].city}
                  </div>
                  <div
                    css={{
                      padding: '6px 12px',
                      border: '1px solid #d9d9d9',
                      borderRadius: '4px',
                      backgroundColor: '#F0F5FF',
                    }}
                  >
                    {hotelData[0].roomTypeLists.length > 0 ? hotelData[0].roomTypeLists.map(room => room.roomTypeName).join(', ') : 'N/A'}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Rate disabled defaultValue={hotelData[0].star} />
                    <Typography.Text style={{ marginLeft: '8px' }}>{hotelData[0].star}성</Typography.Text>
                  </div>
                </div>
              </>
            )}
          </div>
          <Divider />

          <Collapse defaultActiveKey={['1']}>
            <Panel header="스위트룸" key="1">
              <Typography.Title level={5}>facility 정보</Typography.Title>
              <div className="scroll-container">
                <div className="facility-options">
                  {FacilityType.map(type => (
                    <div key={type} className="option-item">{type}</div>
                  ))}
                </div>
              </div>
              <Spacer height="12px" />
              <Typography.Title level={5}>attraction 정보</Typography.Title>
              <div className="scroll-container">
                <div className="attraction-options">
                  {AttractionType.map(type => (
                    <div key={type} className="option-item">{type}</div>
                  ))}
                </div>
              </div>
              <Spacer height="12px" />
              <Typography.Title level={5}>service 정보</Typography.Title>
              <div className="scroll-container">
                <div className="service-options">
                  {ServiceType.map(type => (
                    <div key={type} className="option-item">{type}</div>
                  ))}
                </div>
              </div>
              <Spacer height="12px" />
              <Typography.Title level={5}>amenity 정보</Typography.Title>
              <div className="scroll-container">
                <div className="amenity-options">
                  {AmenityType.map(type => (
                    <div key={type} className="option-item">{type}</div>
                  ))}
                </div>
              </div>
            </Panel>
            <Panel header="더블룸" key="2">
              <Typography.Title level={5}>facility 정보</Typography.Title>
              <div className="scroll-container">
                <div className="facility-options">
                  {FacilityType.map(type => (
                    <div key={type} className="option-item">{type}</div>
                  ))}
                </div>
              </div>
              <Spacer height="12px" />
              <Typography.Title level={5}>attraction 정보</Typography.Title>
              <div className="scroll-container">
                <div className="attraction-options">
                  {AttractionType.map(type => (
                    <div key={type} className="option-item">{type}</div>
                  ))}
                </div>
              </div>
              <Spacer height="12px" />
              <Typography.Title level={5}>service 정보</Typography.Title>
              <div className="scroll-container">
                <div className="service-options">
                  {ServiceType.map(type => (
                    <div key={type} className="option-item">{type}</div>
                  ))}
                </div>
              </div>
              <Spacer height="12px" />
              <Typography.Title level={5}>amenity 정보</Typography.Title>
              <div className="scroll-container">
                <div className="amenity-options">
                  {AmenityType.map(type => (
                    <div key={type} className="option-item">{type}</div>
                  ))}
                </div>
              </div>
            </Panel>
            <Panel header="트윈룸" key="3">
              <Typography.Title level={5}>facility 정보</Typography.Title>
              <div className="scroll-container">
                <div className="facility-options">
                  {FacilityType.map(type => (
                    <div key={type} className="option-item">{type}</div>
                  ))}
                </div>
              </div>
              <Spacer height="12px" />
              <Typography.Title level={5}>attraction 정보</Typography.Title>
              <div className="scroll-container">
                <div className="attraction-options">
                  {AttractionType.map(type => (
                    <div key={type} className="option-item">{type}</div>
                  ))}
                </div>
              </div>
              <Spacer height="12px" />
              <Typography.Title level={5}>service 정보</Typography.Title>
              <div className="scroll-container">
                <div className="service-options">
                  {ServiceType.map(type => (
                    <div key={type} className="option-item">{type}</div>
                  ))}
                </div>
              </div>
              <Spacer height="12px" />
              <Typography.Title level={5}>amenity 정보</Typography.Title>
              <div className="scroll-container">
                <div className="amenity-options">
                  {AmenityType.map(type => (
                    <div key={type} className="option-item">{type}</div>
                  ))}
                </div>
              </div>
            </Panel>
          </Collapse>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '24px 0',
            }}
          >
            <Button
              onClick={onOk}
              type="primary"
              size="large"
            >
              완료
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddCompetitionRoomType;
