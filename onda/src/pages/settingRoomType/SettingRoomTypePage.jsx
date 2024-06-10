import React from 'react';
import TabBar from '../../components/settingRoomType/TabBar';
import TypeInfo from '../../components/settingRoomType/TypeInfo';
import { Outlet, useLocation } from 'react-router-dom';

const SettingRoomTypePage = () => {
  const location = useLocation();
  const isAdd = location.pathname.includes('add');
  return (
    <div>
      {!isAdd && (
        <TabBar>
          <TypeInfo />
        </TabBar>
      )}
      <Outlet />
    </div>
  );
};

export default SettingRoomTypePage;
