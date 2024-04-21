import React from 'react';
import MainImage1 from '../assets/main_image 2.png';
import MainImage2 from '../assets/main_image 3.png'; // 파일명 주의

const MainPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={MainImage1} alt="Main content 1" style={styles.mainImage} />
        <img src={MainImage2} alt="Main content 2" style={styles.mainImage} />
      </div>

    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

  },
  imageContainer: {
    display: 'flex',

    gap: '20px', // 이미지 사이의 간격을 조정
    padding: '20px',
    justifyContent: 'center', // 이미지를 가운데 정렬
  },
  mainImage: {
    width: '50%', // 이미지의 크기를 조정
    height: 'auto',

  }
};

export default MainPage;
