/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Footer = () => {
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem', // 패딩을 늘려서 높이 증가시킴
        minHeight: '7vh', // 최소 높이 설정
        backgroundColor: '#2C2F33',
        color: 'white',
        borderTop: '1px solid #23272A',
        position: 'fixed', // 위치를 고정시키기
        bottom: '0', // 뷰포트 바닥에 배치
        left: '0', // 왼쪽 정렬을 위해 추가
        width: '100%', // 너비를 전체로 설정
        fontSize: '0.8rem',
        // zIndex는 필요에 따라 설정할 수 있습니다.
        zIndex: '1000', // 다른 요소들보다 상위에 위치하도록 zIndex 설정
      })}
    >
      {/* 푸터 내용 */}
      <div>ONDA</div>
      <div>사업자 등록번호: 010-5544-9390</div>
      <div>주소: 한국항공대학교 소프트웨어학과 전자관 419호</div>
      <div>© ONDA Inc. All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
