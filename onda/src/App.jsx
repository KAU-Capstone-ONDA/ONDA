/** @jsxImportSource @emotion/react */
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import SettingPaymentPage from './pages/SettingPaymentPage';
import LoginPage from './pages/login/LoginPage';
import SettingRoomPage from './pages/SettingRoomPage';
import Categories from './components/Categories';
import Mypage from './pages/Mypage';
import RedirectPage from './pages/login/RedirectPage';
import CompetitionPage from './pages/CompetitionPage';
import Spacer from './components/common/Spacer';
import UserAuth from './hooks/UserAuth'
const App = () => {
  const { isLoggedIn } = UserAuth();

  return (
    <div>
      <Categories />
      <Spacer height="65px" />
      <div
        css={{
          backgroundColor: '#F5FAFF',
        }}
      >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          {isLoggedIn && (
            <>
              <Route path="/settingroom" element={<SettingRoomPage />} />
              <Route path="/competition" element={<CompetitionPage />} />
              <Route path="/settingpay" element={<SettingPaymentPage />} />
              <Route path="/mypage" element={<Mypage />} />
            </>
          )}
          <Route exact path="/kakaoLogin" element={<RedirectPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
