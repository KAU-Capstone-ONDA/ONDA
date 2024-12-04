/** @jsxImportSource @emotion/react */
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import LoginPage from './pages/login/LoginPage';
import SettingRoomPage from './pages/settingRoom/SettingRoomPage';
import Categories from './components/Categories';
import Mypage from './pages/Mypage';
import RedirectPage from './pages/login/RedirectPage';
import AddCompetitionRoomTypePage from './pages/addCompetitionRoomType/AddCompetitionRoomTypePage';
import Spacer from './components/common/Spacer';
import AddRoomPage from './pages/settingRoom/addRoom/AddRoomPage';
import SignupRedirect from './pages/signup/SignupRedirect';
import SignupPage from './pages/signup/SignupPage';
import SignUpCompletePage from './pages/signup/SignUpCompletePage';
import BaseChargePage from './pages/baseCarge/BaseChargePage';
import CreateChargeCodePage from './pages/createChargeCode/CreateChargeCodePage';
import GetChargeCodePage from './pages/getChargeCode/GetChargeCodePage';

const App = () => {
  return (
    <div>
      <Categories />
      <Spacer height="64px" />
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/settingroom" element={<SettingRoomPage />}>
            <Route path="add" element={<AddRoomPage />} />
          </Route>
          <Route path="/baseCharge" element={<BaseChargePage />} />
          <Route path="/createChargeCode" element={<CreateChargeCodePage />} />
          <Route path="/getChargeCode" element={<GetChargeCodePage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route exact path="/oauthlogin" element={<RedirectPage />} />
          <Route path="/signup" element={<SignupRedirect />} />
          <Route path="/signup/info" element={<SignupPage />} />
          <Route path="/signup/success" element={<SignUpCompletePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
