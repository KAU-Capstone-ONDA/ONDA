import { CheckCircleOutlined } from '@ant-design/icons';
import theme from '../../theme';
import Spacer from '../common/Spacer';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Complete = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CheckCircleOutlined
        style={{
          display: 'flex',
          fontSize: '60px',
          justifyContent: 'center',
          alignItems: 'center',
          color: theme.colors.primary,
        }}
      />
      <Spacer height="16px" />
      <div style={{ fontSize: '24px' }}>회원가입이 완료되었습니다.</div>
      <div style={{ fontSize: '24px' }}>온다의 RMS 서비스를 이용해보세요!</div>
      <Spacer height="24px" />
      <Button
        style={{
          backgroundColor: theme.colors.primary,
          fontWeight: 'bold',
          color: 'white',
          height: 'auto',
          fontSize: '16px',
          padding: '6px 20px',
        }}
        onClick={() => navigate('/login')}
      >
        로그인으로 이동
      </Button>
    </div>
  );
};
export default Complete;
