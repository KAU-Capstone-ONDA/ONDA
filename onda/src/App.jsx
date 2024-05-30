/** @jsxImportSource @emotion/react */
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import SettingPaymentPage from './pages/SettingPaymentPage';
import LoginPage from './pages/login/LoginPage';
import SettingRoomTypePage from './pages/settingRoomType/SettingRoomTypePage';
import Categories from './components/Categories';
import Mypage from './pages/Mypage';
import RedirectPage from './pages/login/RedirectPage';
import CompetitionPage from './pages/CompetitionPage';
import Spacer from './components/common/Spacer';
import UserAuth from './hooks/UserAuth';
import AddRoomTypePage from './pages/addRoomType/AddRoomTypePage';
const App = () => {
  const { isLoggedIn } = UserAuth();

  return (
    <div>
      <Categories />
      <Spacer height="64px" />
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/settingRoomType" element={<SettingRoomTypePage />}>
            <Route path="add" element={<AddRoomTypePage />} />
          </Route>
          <Route path="/competition" element={<CompetitionPage />} />
          <Route path="/settingPay" element={<SettingPaymentPage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route exact path="/kakaoLogin" element={<RedirectPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
