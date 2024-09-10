/** @jsxImportSource @emotion/react */
import { Button, Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import useGetCompetitions from '../../hooks/getCompetitions/useGetCompetitions';

const { Sider } = Layout;

const AddCompetitionTypeButton = ({ onClickAddCompetition }) => {
  return (
    <Button
      style={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
      type="primary"
      shape="default"
      icon={<PlusOutlined style={{ color: '#004FC5' }} />}
      onClick={onClickAddCompetition}
    />
  );
};

const CompetitionTitle = ({ text }) => {
  return (
    <div
      css={{
        fontWeight: 'bold',
        fontSize: '1.125rem',
        color: '#004FC5',
        paddingInlineStart: '8px',
      }}
    >
      {text}
    </div>
  );
};

const CompetitionList = ({ onClickCompetition }) => {
  const competitions = useGetCompetitions();
  const competitionTypes = competitions.map((competition) => ({
    key: competition.id,
    label: competition.hotelName,
  }));

  return (
    <Menu
      theme="light"
      mode="inline"
      style={{
        padding: '0px 6px',
      }}
      items={competitionTypes}
      onClick={(key) => onClickCompetition(key)}
    />
  );
};

const TabBar = ({ onClickCompetition, onClickAddCompetition, children }) => {
  return (
    <Layout
      css={{
        backgroundColor: 'white',
      }}
    >
      <Sider
        style={{
          backgroundColor: 'white',
          margin: '12px 8px',
          borderRadius: '8px',
          border: '0.5px solid #004FC5',
          minHeight: '100vh', // 최소 높이 설정
        }}
        trigger={null}
        width="250px"
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '12px 12px',
          }}
        >
          <CompetitionTitle text="경쟁 업체" />
          <AddCompetitionTypeButton
            onClickAddCompetition={onClickAddCompetition}
          />
        </div>
        <CompetitionList onClickCompetition={onClickCompetition} />
      </Sider>
      {children}
    </Layout>
  );
};
export default TabBar;
