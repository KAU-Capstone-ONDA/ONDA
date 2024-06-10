import { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('accessToken');

    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      window.location.replace('/');
    }
  }, []);

  return <div>로그인 중</div>;
};

export default RedirectPage;
