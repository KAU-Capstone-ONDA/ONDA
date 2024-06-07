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
import AddCompetitionRoomTypePage from './pages/addCompetitionRoomType/AddCompetitionRoomTypePage';
import Spacer from './components/common/Spacer';
import AddRoomTypePage from './pages/addRoomType/AddRoomTypePage';

const App = () => {
  return (
    <div>
      <Categories />
      <Spacer height="64px" />
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/settingroomtype" element={<SettingRoomTypePage />}>
            <Route path="add" element={<AddRoomTypePage />} />
          </Route>
          <Route path="/competition" element={<CompetitionPage />} />
          <Route
            path="/competition/add"
            element={<AddCompetitionRoomTypePage />}
          />
          <Route path="/settingpay" element={<SettingPaymentPage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route exact path="/kakaoLogin" element={<RedirectPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
