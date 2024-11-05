/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Spacer from '../../components/common/Spacer';
import logo from '../../assets/applogo.svg';
import LoginLogo from '../../components/login/LoginLogo';
import { Input, message } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginService } from '../../services/auth/login';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const requestBody = { email, password };
      const response = await loginService(requestBody);

      const accessToken = response.data?.accessToken;

      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        navigate('/');
      }
    } catch (error) {
      message.error('로그인 실패. 아이디와 비밀번호를 확인하세요.');
    }
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
      <Input
        placeholder="아이디 입력"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: '1rem', width: '300px' }}
      />
      <Input.Password
        placeholder="비밀번호 입력"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: '1rem', width: '300px' }}
      />
      <LoginButton text="로그인" onClickLogin={handleLogin} />
    </div>
  );
};

const LoginButton = ({ text, onClickLogin }) => {
  return (
    <button
      css={{
        fontSize: '1rem',
        padding: '0.5rem 1rem',
        width: '300px',
        backgroundColor: '#004FC5',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        '&:hover': {
          fontWeight: 'bold',
        },
      }}
      onClick={onClickLogin}
    >
      {text}
    </button>
  );
};
export default LoginPage;
