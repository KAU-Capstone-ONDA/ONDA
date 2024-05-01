import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const RedirectPage = () => {
  const code = window.location.search;
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return <div>로그인 중</div>;
};

export default RedirectPage;
