/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { NavLink, useNavigate } from 'react-router-dom';
import appLogo from '../assets/applogo.svg';

const categories = [
  {
    name: 'settingroom',
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

const NavItemButton = ({ children, prop }) => {
  return (
    <NavLink
      key={prop.name}
      to={prop.name}
      css={{
        fontSize: '1.125rem',
        cursor: 'pointer',
        textDecoration: 'none',
        padding: '1rem',
        margin: '0',
        color: '#333',
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

const Categories = () => {
  return (
    <div>
      <NavBar>
        <AppLogo />
        <div>
          {categories.map((c) => (
            <NavItemButton prop={c}>{c.text}</NavItemButton>
          ))}
        </div>
        <LoginButton>로그인</LoginButton>
      </NavBar>
    </div>
  );
};

export default Categories;
