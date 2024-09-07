/** @jsxImportSource @emotion/react */

const LogoutButton = ({ onClickLogout }) => {
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
      onClick={onClickLogout}
    >
      로그아웃
    </button>
  );
};

const MypageButton = ({ onClickLogout }) => {
  return (
    <div>
      <LogoutButton onClickLogout={onClickLogout} />
    </div>
  );
};

export default MypageButton;
