import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SignUp from '../../components/signup/SignUp';
import useHotelName from '../../hooks/signup/useHotelName';
import useHotelLocation from '../../hooks/signup/useHotelLocation';
import { signUpService } from '../../services/signUp';
import { Modal } from 'antd';

const errorModal = ({ message }) => {
  Modal.error({
    title: '로그인 에러',
    content: `${message}`,
  });
};

const SignupPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, nickname, provider } = location.state;
  const hotelName = useHotelName();
  const hotelLocation = useHotelLocation();
  const [errorMsg, setErrorMsg] = useState(null);

  const onClickComplete = () => {
    const requestBody = {
      email: email,
      name: nickname,
      provider: provider,
      hotelName: hotelName,
      region: hotelLocation.split(' ')[0],
      city: hotelLocation.split(' ')[1],
    };

    signUpService(requestBody)
      .then((data) => {
        navigate('/signup/success');
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };

  if (errorMsg !== null) {
    errorModal(errorMsg);
  }

  return (
    <SignUp
      email={email}
      nickname={nickname}
      onClickComplete={onClickComplete}
    />
  );
};

export default SignupPage;
