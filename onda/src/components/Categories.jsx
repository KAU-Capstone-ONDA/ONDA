/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import appLogo from '../assets/applogo.svg';
import UserAuth from '../hooks/UserAuth';
import userAuth from '../hooks/UserAuth';
import { useState } from 'react';
import { Modal } from 'antd';
import LoginModal from './common/LoginModal';

const categories = [
  {
    name: 'settingroomtype',
    text: '객실설정',
  },
  {
    name: 'competition',
    text: '경쟁업체 등록',
  },
  {
    name: 'settingpay',
    text: '요금플랜',
  },
];

const NavBar = ({ children }) => {
  return (
    <div
      css={css({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        height: '30px',
        display: 'flex',
        cursor: 'pointer',
        justifyContent: 'space-between',
        padding: '1rem',
        marginRight: '2rem',
        fontSize: '1.125rem',
        alignItems: 'center',
        fontWeight: 'bold',
        backgroundColor: '#ffffff',
        transition: 'color 0.2s',
        '&:hover': {
          color: '#004FC5',
        },
        '&:last-of-type': {
          marginRight: 0,
        },
      })}
    >
      {children}
    </div>
  );
};

const AppLogo = () => {
  const navigate = useNavigate();

  return (
    <div
      css={css({
        width: 'auto',
        height: 'auto',
        cursor: 'pointer',
      })}
    >
      <img
        src={`${appLogo}`}
        alt="logo"
        width="80px"
        onClick={() => navigate('/')}
      />
    </div>
  );
};

const NavItemButton = ({ children, prop, onClick }) => {
  const location = useLocation();
  const active = location.pathname.includes(prop.name);

  return (
    <NavLink
      key={prop.name}
      to={prop.name}
      onClick={onClick}
      css={{
        fontSize: '1.125rem',
        cursor: 'pointer',
        textDecoration: 'none',
        padding: '1rem',
        margin: '0',
        color: active ? '#004FC5' : '#333',
        transition: 'color 0.2s',
        '&:hover': {
          color: '#004FC5',
        },
      }}
    >
      {children}
    </NavLink>
  );
};

const LoginButton = ({ children }) => {
  const navigate = useNavigate();

  return (
    <button
      css={{
        fontSize: '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#004FC5',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        '&:hover': {
          fontWeight: 'bold',
        },
      }}
      onClick={() => navigate('/login')}
    >
      {children}
    </button>
  );
};

const MyPageButton = ({ children }) => {
  const navigate = useNavigate();

  return (
    <button
      css={{
        fontSize: '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#004FC5',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        '&:hover': {
          fontWeight: 'bold',
        },
      }}
      onClick={() => navigate('/mypage')}
    >
      {children}
    </button>
  );
};

const Categories = () => {
  const { isLoggedIn } = UserAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const onClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      showModal();
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    navigate('/login');
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    navigate('/');
    setIsModalOpen(false);
  };

  return (
    <div css={{ position: 'sticky', zIndex: 1 }}>
      <NavBar>
        <AppLogo />
        <div>
          {categories.map((c) => (
            <NavItemButton prop={c} onClick={onClick}>
              {c.text}
            </NavItemButton>
          ))}
        </div>
        {isLoggedIn && <MyPageButton>마이페이지</MyPageButton>}
        {!isLoggedIn && <LoginButton>로그인</LoginButton>}
      </NavBar>

      <LoginModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default Categories;
