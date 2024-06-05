/** @jsxImportSource @emotion/react */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  battleRoomTypePage: {
    display: 'flex',
    padding: '20px',
  },
  competitionCompanies: {
    flex: 1,
    marginRight: '20px',
  },
  competitionCompaniesTitle: {
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  competitionCompaniesList: {
    listStyleType: 'none',
    padding: 0,
  },
  competitionCompaniesListItem: {
    marginBottom: '5px',
  },
  registerCompanyButton: {
    marginTop: '10px',
    padding: '10px',
    backgroundColor: '#1890ff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  roomTypes: {
    display: 'flex',
    flex: 3,
    justifyContent: 'space-between',
  },
  roomType: {
    flex: 1,
    marginRight: '20px',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '10px',
  },
  roomTypeTitle: {
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  infoSection: {
    marginBottom: '20px',
  },
  infoSectionTitle: {
    fontSize: '1.2em',
    marginBottom: '5px',
  },
  infoSectionText: {
    margin: 0,
  },
};

const CompetitionPage = () => {
  const navigate = useNavigate();

  const handleRegisterCompanyClick = () => {
    navigate('/competition/add');
  };

  return (
    <div style={styles.battleRoomTypePage}>
      <div style={styles.competitionCompanies}>
        <h3 style={styles.competitionCompaniesTitle}>경쟁 업체</h3>
        <ul style={styles.competitionCompaniesList}>
          <li style={styles.competitionCompaniesListItem}>신라호텔 (3)</li>
          <li style={styles.competitionCompaniesListItem}>두산호텔 </li>
        </ul>
        <button
          style={styles.registerCompanyButton}
          onClick={handleRegisterCompanyClick}
        >
          경쟁 업체 등록하기
        </button>
      </div>
      <div style={styles.roomTypes}>
        <div style={styles.roomType}>
          <h3 style={styles.roomTypeTitle}>스위트룸</h3>
          <div style={styles.infoSection}>
            <h4 style={styles.infoSectionTitle}>시설 정보</h4>
            <p style={styles.infoSectionText}>매점/편의점, 수영장, 세미나실, 레스토랑</p>
          </div>
          <div style={styles.infoSection}>
            <h4 style={styles.infoSectionTitle}>어트랙션 정보</h4>
            <p style={styles.infoSectionText}>스키장, 골프장</p>
          </div>
          <div style={styles.infoSection}>
            <h4 style={styles.infoSectionTitle}>어메니티 정보</h4>
            <p style={styles.infoSectionText}>소파, 가스레인지/인덕션, 스파/월풀, 착장실, 비데, 냉장고</p>
          </div>
          <div style={styles.infoSection}>
            <h4 style={styles.infoSectionTitle}>서비스 정보</h4>
            <p style={styles.infoSectionText}>취사가능, 셔틀버스, WIFI, 조식서비스</p>
          </div>
        </div>
        <div style={styles.roomType}>
          <h3 style={styles.roomTypeTitle}>더블룸</h3>
          <div style={styles.infoSection}>
            <h4 style={styles.infoSectionTitle}>시설 정보</h4>
            <p style={styles.infoSectionText}>매점/편의점, 수영장, 세미나실, 레스토랑</p>
          </div>
          <div style={styles.infoSection}>
            <h4 style={styles.infoSectionTitle}>어트랙션 정보</h4>
            <p style={styles.infoSectionText}>스키장, 골프장</p>
          </div>
          <div style={styles.infoSection}>
            <h4 style={styles.infoSectionTitle}>어메니티 정보</h4>
            <p style={styles.infoSectionText}>소파, 가스레인지/인덕션, 스파/월풀, 착장실, 비데, 냉장고</p>
          </div>
          <div style={styles.infoSection}>
            <h4 style={styles.infoSectionTitle}>서비스 정보</h4>
            <p style={styles.infoSectionText}>취사가능, 셔틀버스, WIFI, 조식서비스</p>
          </div>
        </div>
        <div style={styles.roomType}>
          <h3 style={styles.roomTypeTitle}>트윈룸</h3>
          <div style={styles.infoSection}>
            <h4 style={styles.infoSectionTitle}>시설 정보</h4>
            <p style={styles.infoSectionText}>매점/편의점, 수영장, 세미나실, 레스토랑</p>
          </div>
          <div style={styles.infoSection}>
            <h4 style={styles.infoSectionTitle}>어트랙션 정보</h4>
            <p style={styles.infoSectionText}>스키장, 골프장</p>
          </div>
          <div style={styles.infoSection}>
            <h4 style={styles.infoSectionTitle}>어메니티 정보</h4>
            <p style={styles.infoSectionText}>소파, 가스레인지/인덕션, 스파/월풀, 착장실, 비데, 냉장고</p>
          </div>
          <div style={styles.infoSection}>
            <h4 style={styles.infoSectionTitle}>서비스 정보</h4>
            <p style={styles.infoSectionText}>취사가능, 셔틀버스, WIFI, 조식서비스</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionPage;
