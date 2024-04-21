import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SettingPaymentPage from './pages/SettingPaymentPage';
import LoginPage from './pages/LoginPage';
import SettingRoomPage from './pages/SettingRoomPage';
import Categories from './components/Categories';

const App = () => {
  return (
    <div>
      <Categories />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settingroom" element={<SettingRoomPage />} />
        <Route path="/settingpay" element={<SettingPaymentPage />} />
      </Routes>
    </div>
  );
};

export default App;
