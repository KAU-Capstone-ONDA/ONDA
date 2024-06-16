import { useEffect, useState } from 'react';

const UserAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedInState = () => {
      const token = localStorage.getItem('accessToken');
      setIsLoggedIn(token !== null && token !== undefined && token !== '');
    };

    checkLoggedInState();
  }, []);

  return {
    isLoggedIn,
  };
};

export default UserAuth;
