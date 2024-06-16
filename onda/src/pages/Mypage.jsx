/** @jsxImportSource @emotion/react */
import MypageButton from '../components/mypage/MypageButton';
import { logoutService } from '../services/logout';
import { message } from 'antd';

const Mypage = () => {
  const handleLogout = async () => {
    /*try {
      await logoutService();
      localStorage.removeItem('accessToken');
      window.location.replace('/');
    } catch (error) {
      message.error(`[로그아웃 할 수 없습니다] ${error}`);
    }*/
    localStorage.removeItem('accessToken');
    window.location.replace('/');
  };

  return <MypageButton onClickLogout={handleLogout} />;
};

export default Mypage;
