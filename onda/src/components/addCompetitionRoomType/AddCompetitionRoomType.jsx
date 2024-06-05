/** @jsxImportSource @emotion/react */
import React from 'react';
import {Button, Divider, Input, Rate, Typography} from 'antd';
import TypeDropDown from './TypeDropDown';
import Spacer from './Spacer';
import TypeCheckGroup from './TypeCheckGroup';
import FacilityType from './type/FacilityType';
import AttractionType from './type/AttractionType';
import ServiceType from './type/ServiceType';

const AddCompetitionRoomType = () => {
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
            <Typography.Title level={2}>경쟁업체 등록</Typography.Title>
          </div>
          <Divider />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography.Title level={4}>경쟁업체 등록</Typography.Title>
            <Input.Search
              placeholder="신라호텔"
              onSearch={() => {}}
              style={{ width: 200 }}
            />
          </div>
          <Spacer height="12px" />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
            }}
          >
            <Typography.Title level={4}>호텔 기본 정보</Typography.Title>
            <TypeDropDown
              text="서울 관광구"
              options={["스위트룸, 더블룸, 트윈룸"]}
              onChange={() => {}}
            />
            <Rate defaultValue={4} />
            <Typography.Text>4성</Typography.Text>
          </div>
          <Spacer height="24px" />
          <Divider />

          <TypeCheckGroup
            text="스위트룸"
            options={FacilityType}
            onChange={() => {}}
            sectionTitle="facility 정보"
          />
          <TypeCheckGroup
            options={AttractionType}
            onChange={() => {}}
            sectionTitle="attraction 정보"
          />
          <TypeCheckGroup
            options={ServiceType}
            onChange={() => {}}
            sectionTitle="service 정보"
          />
          {/*<TypeCheckGroup*/}
          {/*  options={AmenityType}*/}
          {/*  onChange={() => {}}*/}
          {/*  sectionTitle="amenity 정보"*/}
          {/*/>*/}

          <Divider />

          <TypeCheckGroup
            text="더블룸"
            options={FacilityType}
            onChange={() => {}}
            sectionTitle="facility 정보"
          />
          <TypeCheckGroup
            options={AttractionType}
            onChange={() => {}}
            sectionTitle="attraction 정보"
          />
          <TypeCheckGroup
            options={ServiceType}
            onChange={() => {}}
            sectionTitle="service 정보"
          />
          {/*<TypeCheckGroup*/}
          {/*  options={AmenityType}*/}
          {/*  onChange={() => {}}*/}
          {/*  sectionTitle="amenity 정보"*/}
          {/*/>*/}

          <Divider />

          <TypeCheckGroup
            text="트윈룸"
            options={FacilityType}
            onChange={() => {}}
            sectionTitle="facility 정보"
          />
          <TypeCheckGroup
            options={AttractionType}
            onChange={() => {}}
            sectionTitle="attraction 정보"
          />
          <TypeCheckGroup
            options={ServiceType}
            onChange={() => {}}
            sectionTitle="service 정보"
          />
          {/*<TypeCheckGroup*/}
          {/*  options={AmenityType}*/}
          {/*  onChange={() => {}}*/}
          {/*  sectionTitle="amenity 정보"*/}
          {/*/>*/}

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '24px 0',
            }}
          >
            <Button type="primary" size="large">완료</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCompetitionRoomType;
