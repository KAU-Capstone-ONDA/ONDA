/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import LoginButton from '../../components/login/LoginButton';
import { Platform } from '../../Enum';
import Spacer from '../../components/common/Spacer';
import logo from '../../assets/applogo.svg';
import LoginLogo from '../../components/login/LoginLogo';

const LoginPage = () => {
  const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
  const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const kakaoLink = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  const kakaoLoginHandler = () => {
    window.location.href = kakaoLink;
  };

  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      })}
    >
      <LoginLogo image={logo} />
      <Spacer height="3rem" />
      <LoginButton platform={Platform.KAKAO} onLogin={kakaoLoginHandler}>
        카카오로 시작하기
      </LoginButton>
      <Spacer height="1rem" />
      <LoginButton platform={Platform.NAVER}>네이버로 시작하기</LoginButton>
    </div>
  );
};
export default LoginPage;
