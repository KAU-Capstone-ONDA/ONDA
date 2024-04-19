import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SettingPaymentPage from './pages/SettingPaymentPage';
import Categories from './components/Categories';
import LoginPage from './pages/LoginPage';
import SettingRoomPage from "./pages/SettingRoomPage";

const App = () => {
    return (
         <Routes>
            <Route element={<Categories />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/settingroom" element={<SettingRoomPage />} />
                <Route path="/settingpay" element={<SettingPaymentPage />} />
            </Route>
        </Routes>
    );
};

export default App;
