/** @jsxImportSource @emotion/react */
import { React, useState } from 'react';
import { Menu } from 'antd';
import '../assets/css/addCompetitionRoomType/competitionPage.css';
import AddCompetitionRoomType from '../components/addCompetitionRoomType/AddCompetitionRoomType';

const CompetitionPage = () => {
  const [registerModal, setRegisterModal] = useState(false);
  const [competitionData, setCompetitionData] = useState([
    {
      id: 1,
      hotelName: '신라호텔',
      roomTypeLists: [
        {
          roomTypeName: '스위트룸',
          facilityOptions: ['매점/편의점', '수영장', '세미나실', '레스토랑'],
          attractionOptions: ['스키장', '골프장'],
          amenityOptions: ['소파', '가스레인지/인덕션', '스파/월풀', '착장실', '비데', '냉장고'],
          serviceOptions: ['취사가능', '셔틀버스', 'WIFI', '조식서비스'],
        },
      ],
    },
  ]);

  const handleRegisterCompanyClick = () => {
    setRegisterModal(true);
  };

  return (
    <>
      <AddCompetitionRoomType open={registerModal} onOk={() => setRegisterModal(false)} setCompetitionData={setCompetitionData} />
      <div className="competition-wrap">
        <div className="competition-companies">
          <div className="competition-companies-container">
            <h3 className="competition-companies-title">경쟁 업체</h3>
            <Menu
              theme="light"
              mode="inline"
              style={{
                padding: '0px 6px',
                fontSize: '1em',
                backgroundColor: 'rgba(213, 226, 253, 0.16)',
                fontWeight: '500'
              }}
              defaultSelectedKeys={['1']}
              items={competitionData.map((hotel, index) => ({
                key: hotel.id,
                label: `${hotel.hotelName} (${hotel.roomTypeLists.length})`
              }))}
            />
          </div>
          <button
            className="register-btn"
            onClick={handleRegisterCompanyClick}
          >
            경쟁 업체 등록하기
          </button>
        </div>
        <div className="room-type-wrap">
          {competitionData.map(hotel => (
            <div key={hotel.id} className="room-type">
              <h3>{hotel.hotelName}</h3>
              {hotel.roomTypeLists.map(room => (
                <div key={room.roomTypeName} className="room-type-container">
                  <div className="info-section">
                    <h4>시설 정보</h4>
                    <p>{room.facilityOptions.join(', ')}</p>
                  </div>
                  <div className="info-section">
                    <h4>어트랙션 정보</h4>
                    <p>{room.attractionOptions.join(', ')}</p>
                  </div>
                  <div className="info-section">
                    <h4>어메니티 정보</h4>
                    <p>{room.amenityOptions.join(', ')}</p>
                  </div>
                  <div className="info-section">
                    <h4>서비스 정보</h4>
                    <p>{room.serviceOptions.join(', ')}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CompetitionPage;
