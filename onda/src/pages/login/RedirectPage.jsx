import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const RedirectPage = () => {
  const code = window.location.search;
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('accessToken');

    if(accessToken){
      localStorage.setItem('accessToken', accessToken);
      navigate('/');
    }
  }, []);

  return <div>로그인 중</div>;
};

export default RedirectPage;
