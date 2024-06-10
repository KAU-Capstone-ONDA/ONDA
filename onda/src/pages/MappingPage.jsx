import React from 'react';
import TabBar from '../components/mappingRoom/TabBar';
import TypeInfo from '../components/mappingRoom/Typeinfo';
import { Outlet, useLocation } from 'react-router-dom';

const MappingPage = () => {
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

export default MappingPage;
