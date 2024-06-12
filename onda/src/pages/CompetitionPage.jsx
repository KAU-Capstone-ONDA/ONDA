/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { Menu, Collapse, Typography } from 'antd';
import { css } from '@emotion/react';
import '../assets/css/addCompetitionRoomType/competitionPage.css';
import AddCompetitionRoomType from '../components/addCompetitionRoomType/AddCompetitionRoomType';
import fetchWithAuth from '../services/fetchWithAuth';
import Spacer from '../components/addCompetitionRoomType/Spacer';

const { Panel } = Collapse;

const CompetitionPage = () => {
  const [registerModal, setRegisterModal] = useState(false);
  const [competitionData, setCompetitionData] = useState([]);
  const [selectedHotelId, setSelectedHotelId] = useState(null);

  useEffect(() => {
    const fetchCompetitionData = async () => {
      try {
        const result = await fetchWithAuth.get('/competing-hotel');
        setCompetitionData(result.data.data);
      } catch (error) {
        console.error('Failed to fetch competition data:', error);
      }
    };

    fetchCompetitionData();
  }, []);

  const handleRegisterCompanyClick = () => {
    setRegisterModal(true);
  };

  const handleMenuClick = async (e) => {
    setSelectedHotelId(Number(e.key));
    try {
      const result = await fetchWithAuth.get(`/hotel/${e.key}`);
      setCompetitionData(prevData =>
        prevData.map(hotel => hotel.id === Number(e.key) ? { ...hotel, ...result.data.data } : hotel)
      );
    } catch (error) {
      console.error('Failed to fetch hotel details:', error);
    }
  };

  const selectedHotel = competitionData.find(hotel => hotel.id === selectedHotelId);

  return (
    <>
      <AddCompetitionRoomType open={registerModal} onOk={() => setRegisterModal(false)} setCompetitionData={setCompetitionData} />
      <div className="competition-wrap">
        <div className="competition-companies">
          <div className="competition-companies-container">
            <h3 className="competition-companies-title">경쟁 업체</h3>
            <div className="competition-companies-scroll">
              <Menu
                theme="light"
                mode="inline"
                style={{
                  padding: '0px 6px',
                  fontSize: '1em',
                  backgroundColor: 'rgba(213, 226, 253, 0.16)',
                  fontWeight: '500',
                  height: '60vh',  // 스크롤 높이 설정
                  overflowY: 'scroll'
                }}
                onClick={handleMenuClick}
                items={competitionData.map((hotel) => ({
                  key: hotel.id,
                  label: `${hotel.hotelName} (${hotel.roomTypeLists?.length || 0})`
                }))}
              />
            </div>
          </div>
          <button
            className="register-btn"
            onClick={handleRegisterCompanyClick}
          >
            경쟁 업체 등록하기
          </button>
        </div>
        <div className="room-type-wrap">
          {selectedHotel && (
            <div key={selectedHotel.id} className="room-type">
              <h3>{selectedHotel.hotelName}</h3>
              {selectedHotel.roomTypeLists && selectedHotel.roomTypeLists.length > 0 ? (
                <div className="room-types">
                  <Collapse defaultActiveKey={['1']}>
                    {selectedHotel.roomTypeLists.map(room => (
                      <Panel header={room.roomTypeName} key={room.roomTypeId}>
                        <Typography.Title level={5}>facility 정보</Typography.Title>
                        <div className="scroll-container">
                          <div className="facility-options">
                            {room.facilityOptions && room.facilityOptions.map(option => (
                              <div key={option} className="option-item">{option}</div>
                            ))}
                          </div>
                        </div>
                        <Spacer height="12px" />
                        <Typography.Title level={5}>attraction 정보</Typography.Title>
                        <div className="scroll-container">
                          <div className="attraction-options">
                            {room.attractionOptions && room.attractionOptions.map(option => (
                              <div key={option} className="option-item">{option}</div>
                            ))}
                          </div>
                        </div>
                        <Spacer height="12px" />
                        <Typography.Title level={5}>service 정보</Typography.Title>
                        <div className="scroll-container">
                          <div className="service-options">
                            {room.serviceOptions && room.serviceOptions.map(option => (
                              <div key={option} className="option-item">{option}</div>
                            ))}
                          </div>
                        </div>
                        <Spacer height="12px" />
                        <Typography.Title level={5}>amenity 정보</Typography.Title>
                        <div className="scroll-container">
                          <div className="amenity-options">
                            {room.amenityOptions && room.amenityOptions.map(option => (
                              <div key={option} className="option-item">{option}</div>
                            ))}
                          </div>
                        </div>
                      </Panel>
                    ))}
                  </Collapse>
                </div>
              ) : (
                <p>객실 정보가 없습니다.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CompetitionPage;
