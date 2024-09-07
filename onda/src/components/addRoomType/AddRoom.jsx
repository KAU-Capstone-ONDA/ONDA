/** @jsxImportSource @emotion/react */
import TypeRadioGroup from './TypeRadioGroup';
import RoomType from '../../type/RoomType';
import TypeDropDown from './TypeDropDown';
import PeopleType from '../../type/PeopleType';
import Spacer from '../common/Spacer';
import { Button, Divider, Typography } from 'antd';
import TypeCheckGroup from './TypeCheckGroup';
import FacilityType from '../../type/FacilityType';
import AttractionType from '../../type/AttractionType';
import AmenityType from '../../type/AmenityType';
import theme from '../../theme';
import TypeNumberInput from './TypeNumberInput';
import ServiceType from '../../type/ServiceType';

const AddRoom = (props) => {
  const {
    roomCountValue,
    onPeopleCount,
    setRoomCountValue,
    onRoomType,
    onFacilityType,
    onAttractionType,
    onServiceType,
    onAmenityType,
    onComplete,
  } = props;

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
            text="객실 수용인원"
            options={PeopleType}
            onChange={onPeopleCount}
          />
          <Spacer height="36px" />

          <TypeNumberInput
            text="객실 개수"
            placeholder="ex) 1"
            value={roomCountValue}
            onChange={setRoomCountValue}
          />
          <Spacer height="12px" />

          <TypeRadioGroup
            text="객실타입"
            options={RoomType}
            onChange={onRoomType}
          />
          <Spacer height="48px" />

          <TypeCheckGroup
            text="시설정보"
            options={FacilityType}
            onChange={onFacilityType}
          />
          <Spacer height="48px" />

          <TypeCheckGroup
            text="어트렉션"
            options={AttractionType}
            onChange={onAttractionType}
          />
          <Spacer height="48px" />

          <TypeCheckGroup
            text="서비스"
            options={ServiceType}
            onChange={onServiceType}
          />
          <Spacer height="48px" />

          <TypeCheckGroup
            text="어매니티"
            options={AmenityType}
            onChange={onAmenityType}
          />
          <Spacer height="48px" />

          <div style={{ display: 'flex', margin: '16px 0px' }}>
            <Button
              style={{
                display: 'flex',
                backgroundColor: theme.colors.primary,
                color: 'white',
                fontWeight: 'bold',
                width: '100%',
                height: 'auto',
                justifyContent: 'center',
                padding: '8px 0px',
                fontSize: '18px',
              }}
              onClick={onComplete}
            >
              완료
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
