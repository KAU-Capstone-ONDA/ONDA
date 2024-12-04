/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import {
  Button,
  DatePicker,
  Divider,
  Input,
  message,
  Modal,
  Typography,
} from 'antd';
import useGetRooms from '../../hooks/getRooms/useGetRooms';
import theme from '../../theme';
import mappingRoomType from '../../mapping/mappingRoomType';
import Spacer from '../common/Spacer';
import BaseChargeInfo from '../baseCharge/BaseChargeInfo';
import { useNavigate } from 'react-router-dom';
import { formatCurrency, formatDays } from '../../format/FormatDefines';
import { postChargeCode } from '../../services/createChargeCode/chargeCode';

const AddChargeCodeForm = (props) => {
  const { onClickRoomType, chargeCodeInfo, roomTypeId, baseChargeInfo } = props;
  const rooms = useGetRooms();
  const [clickedRoomType, setClickedRoomType] = useState(null);
  const [clickedBaseCharge, setClickedBaseCharge] = useState(null);

  const handleOnClickRoomTypeName = (data) => {
    setClickedBaseCharge(null);
    setClickedRoomType(data);
  };

  const handleBaseCharge = (baseCharge) => {
    setClickedBaseCharge(baseCharge);
  };

  return (
    <div
      style={{
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
          width: '85%',
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
            <Typography.Title level={2}>요금코드 추가</Typography.Title>
          </div>
          <Divider />
          <RoomTypeSelect
            onClickRoomType={onClickRoomType}
            rooms={rooms}
            onClickRoomTypeData={handleOnClickRoomTypeName}
          />
          {baseChargeInfo && (
            <RoomBaseChargeInfo
              data={baseChargeInfo}
              roomTypeName={mappingRoomType(clickedRoomType.roomTypeName)}
              onClickBaseCharge={handleBaseCharge}
            />
          )}
          {clickedBaseCharge && (
            <CreateChargeCode
              baseChargeInfo={clickedBaseCharge}
              roomTypeId={clickedRoomType.roomTypeId}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const RoomTypeSelect = (props) => {
  const { onClickRoomType, rooms, onClickRoomTypeData } = props;
  const [selectedRoomTypeId, setSelectedRoomTypeId] = useState(null);

  return (
    <div>
      <Typography.Title level={4}>객실타입을 선택하세요</Typography.Title>
      <Spacer height={14} />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          width: '100%',
        }}
      >
        {rooms &&
          rooms.map((value, index) => (
            <div
              style={{
                marginRight: '12px',
                fontSize: '16px',
              }}
            >
              <div
                css={{
                  border: '0.5px solid #004FC5',
                  borderRadius: '8px',
                  backgroundColor:
                    selectedRoomTypeId === value.roomTypeId
                      ? theme.colors.primary
                      : 'white', // 선택된 객실타입에 배경색 적용
                  color:
                    selectedRoomTypeId === value.roomTypeId
                      ? 'white'
                      : theme.colors.primary, // 선택된 객실타입에 색상 변경
                  padding: '8px 12px',
                  cursor: 'pointer',
                  '&:hover': {
                    color: 'white',
                    backgroundColor: theme.colors.primary,
                  },
                }}
                onClick={() => {
                  onClickRoomType(value.roomTypeId);
                  setSelectedRoomTypeId(value.roomTypeId);
                  onClickRoomTypeData(value);
                }}
              >
                {mappingRoomType(value.roomTypeName)}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const RoomBaseChargeInfo = (props) => {
  const { data, roomTypeName, onClickBaseCharge } = props;
  const [selectedBaseCharge, setSelectedBaseCharge] = useState(null);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (data.length === 0) {
      setIsModalOpen(true); // data가 빈 배열이면 알림창을 띄움
    }
  }, [data]);

  const handleOk = () => {
    setIsModalOpen(false);
    navigate('/baseCharge'); // 확인 버튼을 눌렀을 때 특정 페이지로 이동
  };

  const handleCancel = () => {
    // Modal에서 취소 버튼이 눌려도 아무 동작을 하지 않도록 처리
  };

  return (
    <div>
      <Divider />
      <Typography.Title
        level={4}
      >{`${roomTypeName}의 기본요금 날짜를 선택하세요`}</Typography.Title>
      <Spacer height={14} />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          width: '100%',
        }}
      >
        {data &&
          data.map((value, index) => (
            <div
              style={{
                marginRight: '12px',
                fontSize: '16px',
              }}
            >
              <div
                css={{
                  border: '0.5px solid #004FC5',
                  borderRadius: '8px',
                  backgroundColor:
                    selectedBaseCharge === value.id
                      ? theme.colors.primary
                      : 'white', // 선택된 객실타입에 배경색 적용
                  color:
                    selectedBaseCharge === value.id
                      ? 'white'
                      : theme.colors.primary, // 선택된 객실타입에 색상 변경
                  padding: '8px 12px',
                  cursor: 'pointer',
                  '&:hover': {
                    color: 'white',
                    backgroundColor: theme.colors.primary,
                  },
                }}
                onClick={() => {
                  setSelectedBaseCharge(value.id);
                  onClickBaseCharge(value);
                }}
              >
                {`${value.startDate}~${value.endDate}`}
              </div>
            </div>
          ))}
      </div>
      <Modal
        title="기본 요금 없음"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel} // 취소를 눌러도 페이지 이동을 막기 위해 아무 작업도 하지 않음
        okText="확인"
        cancelButtonProps={{ style: { display: 'none' } }} // 취소 버튼 숨기기
      >
        {`${roomTypeName}의 기본요금 정보가 없습니다.\n기본요금을 추가 한 후 요금코드를 추가 할 수 있습니다.`}
      </Modal>
    </div>
  );
};

const CreateChargeCode = (props) => {
  const { baseChargeInfo, roomTypeId } = props;
  const [isShowBaseChargeInfoModal, setIsShowBaseChargeModal] = useState(false);
  const [chargeCodeName, setChargeCodeName] = useState('');
  const [extraChargeValue, setExtraChargeValue] = useState(0);
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);

  const handleModalClose = () => {
    setIsShowBaseChargeModal(false);
  };

  const handleSuccessModalClose = () => {
    window.location.reload();
    setIsShowSuccessModal(false);
  };

  const handleCreateChargeCode = async () => {
    try {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().split('T')[0];

      const requestBody = {
        code: chargeCodeName,
        additionalRate: extraChargeValue,
        date: formattedDate,
        percentage: false,
        hotel_id: 148626,
        base_rate_code_id: baseChargeInfo.id,
        room_type_id: roomTypeId,
      };

      await postChargeCode(requestBody);
      setIsShowSuccessModal(true);
      console.log(requestBody);
    } catch (error) {
      message.error(`요금을 추가할 수 없습니다: ${error.message}`);
    }
  };

  return (
    <div>
      <Divider />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography.Title
          level={3}
        >{`[${baseChargeInfo.roomTypeName}] ${baseChargeInfo.startDate}~${baseChargeInfo.endDate} 요금코드 생성`}</Typography.Title>
      </div>
      <Spacer height={14} />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          width: '100%',
        }}
      >
        <div
          css={{
            border: '0.5px solid #004FC5',
            borderRadius: '8px',
            color: theme.colors.primary,
            padding: '8px 12px',
            cursor: 'pointer',
            '&:hover': {
              color: 'white',
              backgroundColor: theme.colors.primary,
            },
          }}
          onClick={() => setIsShowBaseChargeModal(true)}
        >
          {`${baseChargeInfo.startDate}~${baseChargeInfo.endDate} 요금정보 상세보기`}
        </div>
      </div>
      <Typography.Title level={5}>요금코드 이름 입력</Typography.Title>
      <Input
        placeholder="입력"
        value={chargeCodeName}
        onChange={(e) => setChargeCodeName(e.target.value)}
        style={{
          marginBottom: '1rem',
          width: '250px',
          fontSize: '16px',
        }}
      />
      <Typography.Title level={5}>추가요금 설정</Typography.Title>
      <Input
        type="number"
        value={extraChargeValue}
        onChange={(e) => {
          const value = e.target.value.replace(/[^\d]/g, '');
          setExtraChargeValue(value);
        }}
        placeholder="가격 입력"
        suffix="원"
        style={{
          marginBottom: '1rem',
          width: '250px',
          fontSize: '16px',
        }}
      />
      <Spacer height={24} />
      <div style={{ display: 'flex', margin: '16px 0px' }}>
        <Button
          style={{
            display: 'flex',
            backgroundColor:
              chargeCodeName.trim() === ''
                ? theme.colors.veryLightgrey
                : theme.colors.primary,
            color: 'white',
            fontWeight: 'bold',
            width: '100%',
            height: 'auto',
            justifyContent: 'center',
            padding: '8px 0px',
            fontSize: '18px',
          }}
          disabled={chargeCodeName.trim() === ''}
          onClick={handleCreateChargeCode}
        >
          요금코드 추가
        </Button>
      </div>
      <Modal
        open={isShowBaseChargeInfoModal}
        onOk={handleModalClose}
        okText="확인"
        onCancel={handleModalClose}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography.Title level={4} style={{ textAlign: 'center' }}>
            {`${baseChargeInfo.roomTypeName} 기본요금 정보`}
          </Typography.Title>
          {baseChargeInfo.dayRates.map((value, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                marginTop: '8px',
              }}
            >
              <div>{`${value.date} (${formatDays(value.dayOfWeek)})`}</div>
              <Spacer width={12} />
              <div style={{ fontWeight: 'bold' }}>
                {formatCurrency(value.rate)}
              </div>
            </div>
          ))}
        </div>
      </Modal>

      <Modal
        title="요금추가 성공"
        open={isShowSuccessModal}
        onOk={handleSuccessModalClose}
        onCancel={handleSuccessModalClose} // 취소를 눌러도 페이지 이동을 막기 위해 아무 작업도 하지 않음
        okText="확인"
        cancelButtonProps={{ style: { display: 'none' } }} // 취소 버튼 숨기기
      >
        {`${chargeCodeName} 요금코드가 추가되었습니다.`}
      </Modal>
    </div>
  );
};

export default AddChargeCodeForm;
