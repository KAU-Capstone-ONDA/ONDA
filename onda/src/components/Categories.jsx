/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const categories = [
    {
        name: 'settingRoom',
        text: '객실설정',
    },
    {
        name: 'settingPay',
        text: '요금플랜',
    },
];

const NavBar = ({ children }) => {
    return (
        <div
            css={css({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
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
                width: '80px',
                height: 'auto',
            })}
            onClick={() => navigate('/')}
        />
    );
};

const NavItemButton = ({ children, prop }) => {
    const navigate = useNavigate();

    return (
        <button
            css={{
                fontSize: '1.125rem',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                padding: '1rem',
                margin: '0',
                color: '#333',
                textDecoration: 'none',
                transition: 'color 0.2s',
                '&:hover': {
                    color: '#004FC5',
                },
            }}
            onClick={() => navigate(prop.name)}
        >
            {children}
        </button>
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
                    backgroundColor: '#002b80',
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
                        <NavItemButton prop={c} key={c.name}>
                            {c.text}
                        </NavItemButton>
                    ))}
                </div>
                <LoginButton>로그인</LoginButton>
            </NavBar>
        </div>
    );
};

export default Categories;
