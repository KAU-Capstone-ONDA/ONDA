import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SignupRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email');
    const nickname = searchParams.get('nickname');
    const provider = searchParams.get('provider');

    if (email && nickname && provider) {
      navigate('/signup/info', { state: { email, nickname, provider } });
    }
  }, [location, navigate]);
};
export default SignupRedirect;
