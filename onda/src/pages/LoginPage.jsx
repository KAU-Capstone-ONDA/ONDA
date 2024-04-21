import React from 'react';
import kakaoLogo from '../assets/kakao_login_medium_narrow.png';
import naverLogo from '../assets/naver_login.png';
import appLogo from '../assets/applogo.svg';
const LoginPage = () => {
  return (
    <div style={styles.loginPageContainer}>
      <img src={appLogo} alt="App logo" style={styles.appLogo} />
      <button style={{ ...styles.loginButton, ...styles.kakaoButton }}>
        <img src={kakaoLogo} alt="Kakao" style={styles.logo} />
        카카오로 시작하기
      </button>
      <button style={{ ...styles.loginButton, ...styles.naverButton }}>
        <img src={naverLogo} alt="Naver" style={styles.logo} />
        네이버로 시작하기
      </button>
    </div>
  );
};

const styles = {
  loginPageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    background: 'white', // Add your background color here
    // Add any other styling for the background if necessary
  },
  appLogo: {
    marginBottom: '8rem',
    width: '150px', // Adjust the size as needed
    height: 'auto'
  },
  loginButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%', // Adjust the width as needed
    padding: '2rem',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    margin: '3.9rem 0',
    // Add any other common styles for buttons
  },
  kakaoButton: {
    backgroundColor: '#FEE500', // Kakao color
    color: '#000', // Text color for Kakao button
  },
  naverButton: {
    backgroundColor: '#03C75A', // Naver color
    color: '#fff', // Text color for Naver button
  },
  logo: {
    marginRight: '10px',
    width: '20px', // Adjust the logo size as needed
    height: 'auto'
  },
};

export default LoginPage;