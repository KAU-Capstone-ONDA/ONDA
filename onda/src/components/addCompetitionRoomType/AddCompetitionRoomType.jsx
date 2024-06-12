/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Button, Divider, Input, Rate, Typography, Modal, Collapse, notification, Radio } from 'antd';
import { css } from '@emotion/react';
import '../../assets/css/addCompetitionRoomType/competitionPageModal.css';
import Spacer from './Spacer';
import { fetchWithAuths } from '../../services/fetchWithAuth';
import fetchWithAuth from '../../services/fetchWithAuth';

const { Panel } = Collapse;

const AddCompetitionRoomType = ({ open, onOk, setCompetitionData }) => {
  const [hotelData, setHotelData] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const fetchHotelData = async (hotelName) => {
    try {
      const data = await fetchWithAuths(hotelName);
      if (data.message === "존재하지 않는 호텔입니다.") {
        notification.error({ message: 'Error', description: data.message });
      } else {
        setHotelData(data.data); // Set all hotel data
        notification.success({ message: 'Success', description: data.message });
      }
    } catch (error) {
      notification.error({ message: 'Error', description: error.message });
    }
  };

  const handleRegisterHotel = async () => {
    if (!selectedHotel) {
      notification.error({ message: 'Error', description: '등록할 호텔을 선택해주세요.' });
      return;
    }

    try {
      const result = await fetchWithAuth.post('/competing-hotel', {
        competingHotelId: selectedHotel.id,
      });

      console.log(result.data);  // 응답 데이터 로그 출력

      if (result.data.message === "경쟁 호텔 등록에 성공했습니다.") {
        const registeredHotel = hotelData.find(hotel => hotel.id === selectedHotel.id);
        setCompetitionData(prev => [...prev, { ...registeredHotel, ...result.data.data }]);
        notification.success({ message: 'Success', description: result.data.message });
        onOk();
      } else {
        notification.error({ message: 'Error', description: result.data.message });
      }
    } catch (error) {
      notification.error({ message: 'Error', description: error.message });
    }
  };

  return (
    <Modal
      open={open}
      onOk={handleRegisterHotel}
      onCancel={onOk}
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
              placeholder="호텔을 검색해주세요"
              onSearch={fetchHotelData}
              style={{ width: 200, marginBottom: '12px' }}
            />
            {hotelData.length > 0 && (
              <Radio.Group onChange={e => setSelectedHotel(hotelData.find(hotel => hotel.id === e.target.value))}>
                {hotelData.map((hotel) => (
                  <div key={hotel.id} style={{ marginBottom: '24px' }}>
                    <Radio value={hotel.id}>
                      <Typography.Title level={5} css={{ marginBottom: '8px' }}>{hotel.hotelName}</Typography.Title>
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
                          {hotel.region} {hotel.city}
                        </div>
                        <div
                          css={{
                            padding: '6px 12px',
                            border: '1px solid #d9d9d9',
                            borderRadius: '4px',
                            backgroundColor: '#F0F5FF',
                          }}
                        >
                          {hotel.roomTypeLists && hotel.roomTypeLists.length > 0 ? hotel.roomTypeLists.map(room => room.roomTypeName).join(', ') : 'N/A'}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <Rate disabled defaultValue={hotel.star} />
                          <Typography.Text style={{ marginLeft: '8px' }}>{hotel.star}성</Typography.Text>
                        </div>
                      </div>
                      <Divider />
                      <Collapse defaultActiveKey={['1']}>
                        {hotel.roomTypeLists && hotel.roomTypeLists.map(room => (
                          <Panel header={room.roomTypeName} key={room.roomTypeName}>
                            <div className="dropdown">
                              <Typography.Title level={5}>시설 정보</Typography.Title>
                              <div className="scroll-container">
                                <div className="facility-options">
                                  {room.facilityOptions && room.facilityOptions.map(option => (
                                    <div key={option} className="option-item">{option}</div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <Spacer height="12px" />
                            <div className="dropdown">
                              <Typography.Title level={5}>어트랙션 정보</Typography.Title>
                              <div className="scroll-container">
                                <div className="attraction-options">
                                  {room.attractionOptions && room.attractionOptions.map(option => (
                                    <div key={option} className="option-item">{option}</div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <Spacer height="12px" />
                            <div className="dropdown">
                              <Typography.Title level={5}>어메니티 정보</Typography.Title>
                              <div className="scroll-container">
                                <div className="amenity-options">
                                  {room.amenityOptions && room.amenityOptions.map(option => (
                                    <div key={option} className="option-item">{option}</div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <Spacer height="12px" />
                            <div className="dropdown">
                              <Typography.Title level={5}>서비스 정보</Typography.Title>
                              <div className="scroll-container">
                                <div className="service-options">
                                  {room.serviceOptions && room.serviceOptions.map(option => (
                                    <div key={option} className="option-item">{option}</div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </Panel>
                        ))}
                      </Collapse>
                    </Radio>
                  </div>
                ))}
              </Radio.Group>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '24px 0',
            }}
          >
            <Button
              onClick={handleRegisterHotel}
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
