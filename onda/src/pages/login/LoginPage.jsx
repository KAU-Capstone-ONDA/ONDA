/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import LoginButton from '../../components/login/LoginButton';
import { Platform } from '../../Enum';
import Spacer from '../../components/common/Spacer';
const LoginPage = () => {
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
      <LoginButton platform={Platform.KAKAO}>카카오로 시작하기</LoginButton>
      <Spacer height="1rem" />
      <LoginButton platform={Platform.NAVER}>네이버로 시작하기</LoginButton>
    </div>
  );
};
export default LoginPage;
