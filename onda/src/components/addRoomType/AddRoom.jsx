/** @jsxImportSource @emotion/react */
import TypeRadioGroup from './TypeRadioGroup';
import RoomType from './type/RoomType';
import TypeDropDown from './TypeDropDown';
import PeopleType from './type/PeopleType';
import Spacer from '../common/Spacer';
import { Divider, Typography } from 'antd';
import TypeCheckGroup from './TypeCheckGroup';
import FacilityType from './type/FacilityType';
import AttractionType from './type/AttractionType';

const AddRoom = () => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: '100vh',
        alignItems: 'center',
        backgroundColor: '#F5FAFF',
      }}
    >
      <div
        style={{
          width: '75%',
          backgroundColor: 'white',
          minHeight: '100vh',
          margin: '8px 0px',
          borderRadius: '12px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div
          style={{
            padding: '6px 80px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography.Title level={2}>객실 추가</Typography.Title>
          </div>
          <Divider />
          <TypeDropDown
            text="객실인원 선택"
            options={PeopleType}
            onChange={() => {}}
          />
          <Spacer height="12px" />

          <TypeRadioGroup
            text="객실타입 선택"
            options={RoomType}
            onChange={() => {}}
          />
          <Spacer height="48px" />

          <TypeCheckGroup
            text="시설정보 선택"
            options={FacilityType}
            onChange={() => {}}
          />
          <Spacer height="48px" />

          <TypeCheckGroup
            text="어트렉션 선택"
            options={AttractionType}
            onChange={() => {}}
          />
          <Spacer height="48px" />
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
