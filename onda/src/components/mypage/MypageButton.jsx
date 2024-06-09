/** @jsxImportSource @emotion/react */

const LogoutButton = ({ children }) => {
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
      onClick={() => {
        localStorage.setItem('accessToken', '');
        window.location.replace('/');
      }}
    >
      {children}
    </button>
  );
};

const MypageButton = () => {
  return (
    <div>
      <LogoutButton>로그아웃</LogoutButton>
    </div>
  );
};

export default MypageButton;
