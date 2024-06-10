/** @jsxImportSource @emotion/react */
import { Button, Typography } from 'antd';
import DefaultBox from './DefaultBox';
import theme from '../../theme';
import HotelBlock from './HotelBlock';
import useHotelName from '../../hooks/signup/useHotelName';
import useHotelLocation from '../../hooks/signup/useHotelLocation';

const SignUp = ({ nickname, email, onClickComplete }) => {
  const hotelName = useHotelName();
  const hotelLocation = useHotelLocation();
  const isButtonDisabled =
    hotelName === '호텔 입력' && hotelLocation === '지역';
  const buttonColor = isButtonDisabled
    ? theme.colors.lightgrey
    : theme.colors.primary;

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 'auto',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FAFF',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '75%',
          flexDirection: 'column',
          backgroundColor: 'white',
          margin: '8px 0px',
          borderRadius: '12px',
          minHeight: '100vh',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography.Title level={2}>회원 가입</Typography.Title>
        </div>
        <div style={{ padding: '0px 60px' }}>
          <Typography.Title style={{ color: theme.colors.primary }} level={4}>
            닉네임
          </Typography.Title>
          <DefaultBox children={nickname} width="240px" />
          <Typography.Title style={{ color: theme.colors.primary }} level={4}>
            이메일
          </Typography.Title>
          <DefaultBox children={email} width="240px" />
          <Typography.Title style={{ color: theme.colors.primary }} level={4}>
            호텔 입력
          </Typography.Title>
          <HotelBlock />
        </div>
        <div
          style={{
            display: 'flex',
            padding: '100px 60px',
          }}
        >
          <Button
            style={{
              height: 'auto',
              width: '100%',
              padding: '12px 0px',
              fontSize: '20px',
              fontWeight: 'bold',
              backgroundColor: buttonColor,
              color: 'white',
            }}
            disabled={isButtonDisabled}
            onClick={onClickComplete}
          >
            완료
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
