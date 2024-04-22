/** @jsxImportSource @emotion/react */
import { Platform } from '../../Enum';
import naverAppLogo from '../../assets/ic_login_naver.png';
import kakaoAppLogo from '../../assets/ic_login_kakao.png';

const LoginButton = ({ children, platform }) => {
  let backgroundColor = platform === Platform.NAVER ? '#06BD34' : '#FFE812';
  let textColor = platform === Platform.NAVER ? '#fff' : '#000';
  let platformLogo =
    platform === Platform.NAVER ? `${naverAppLogo}` : `${kakaoAppLogo}`;

  return (
    <button
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
        cursor: 'pointer',
        textDecoration: 'none',
        backgroundColor: backgroundColor,
        color: textColor,
        border: 'none',
        padding: '0.6em 6em',
        transition: 'all 0.3s ease',
        fontWeight: 'bold',
        borderRadius: '6px',
      }}
    >
      <img
        src={platformLogo}
        alt="loginlogo"
        css={{
          marginRight: '0.5em',
          height: '1.5em',
          width: 'auto',
        }}
      />
      {children}
    </button>
  );
};
export default LoginButton;
