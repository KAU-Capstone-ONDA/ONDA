/** @jsxImportSource @emotion/react */
import React from 'react';
import FirstBlock from '../../components/main/FirstBlock';
import firstImage from '../../assets/firstImage.svg';
import secondImage from '../../assets/secondImage.png'
import SecondBlock from '../../components/main/SecondBlock'

const MainPage = () => {
  return (
    <div
      css={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <FirstBlock
        image={firstImage}
        titleText="AI와 함께하는 RMS 서비스"
        subTitleText="지금 바로 객실을 등록해보세요!"
      />
      <SecondBlock
        image={secondImage}
        titleText1="국내외 40개 이상의 판매 채널과 제휴하여"
        titleText2="매출 상승에 도움을 드립니다."
      />
    </div>
  );
};
export default MainPage;
