/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import {
  DatePicker,
  Input,
  Layout,
  message,
  Modal,
  Space,
  Typography,
} from 'antd';
import { Content } from 'antd/es/layout/layout';
import mappingRoomType from '../../mapping/mappingRoomType';
import theme from '../../theme';
import Spacer from '../common/Spacer';
import { formatCurrency, formatDays } from '../../format/FormatDefines';
import { addBasicCharge } from '../../services/baseCharge/addBasicCharge';

const BaseChargeInfo = (props) => {
  const [chargeData, setChargeData] = useState(null);
  const {
    roomTypeId,
    baseChargeInfo,
    handleAddChargeInfo,
    handleModifyChargeInfo,
  } = props;
  const [isChargeDetailModalOpen, setIsChargeDetailModalOpen] = useState(false);
  const [isAddBaseChargeModalOpen, setIsAddBaseChargeModalOpen] =
    useState(false);

  useEffect(() => {
    if (baseChargeInfo !== null) setChargeData(baseChargeInfo.data);
  }, [baseChargeInfo]);

  const [openModals, setOpenModals] = useState({}); // 각 모달 상태 관리

  useEffect(() => {
    if (baseChargeInfo !== null) setChargeData(baseChargeInfo.data);
  }, [baseChargeInfo]);

  const showChargeDetailModal = (index) => {
    setOpenModals((prev) => ({ ...prev, [index]: true }));
  };

  const handleChargeDetailModalOk = (index) => {
    setOpenModals((prev) => ({ ...prev, [index]: false }));
  };

  const showAddBaseChargeModal = () => {
    setIsAddBaseChargeModalOpen(true);
  };

  const handleAddBaseChargeModalOk = async (props) => {
    try {
      const requestBody = {
        hotelId: 148626,
        basicRate: props.basicRate,
        roomTypeId: props.roomTypeId,
        startDate: props.startDate,
        endDate: props.endDate,
        dayRates: props.weeklyRates,
      };
      await addBasicCharge(requestBody);
      window.location.reload();
      setIsChargeDetailModalOpen(false);
    } catch (error) {
      message.error(`기본요금을 추가할 수 없습니다: ${error.message}`);
    }
  };

  const handleAddBaseChargeModalCancel = () => {
    setIsAddBaseChargeModalOpen(false);
  };

  return (
    <Layout css={{ backgroundColor: 'white' }}>
      <Content
        style={{
          margin: '12px 16px',
          width: 'auto',
          height: 'auto',
          minHeight: '600px',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          position: 'relative', // 상대적 위치 지정
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px 12px',
            }}
          >
            <Typography.Title level={3}>
              {mappingRoomType('설정한 기본요금')}
            </Typography.Title>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap', // 원소들이 4개씩 한 행에 배치되도록 설정
                justifyContent: 'flex-start', // 왼쪽 정렬
                width: '100%', // flex 컨테이너의 전체 너비
              }}
            >
              {baseChargeInfo &&
                baseChargeInfo.data.map((value, index) => (
                  <div
                    key={`${value.startDate}~${value.endDate}`}
                    style={{
                      margin: '4px',
                      fontSize: '16px',
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
                      onClick={() => showChargeDetailModal(index)}
                    >
                      {`${value.startDate} ~ ${value.endDate}`}
                    </div>
                    <BaseChargeInfoModal
                      isModalOpen={openModals[index] || false}
                      handleOk={() => handleChargeDetailModalOk(index)}
                      data={value}
                    />

                    <div
                      style={{
                        position: 'absolute',
                        bottom: '24px',
                        right: '24px',
                      }}
                    ></div>
                  </div>
                ))}
              {roomTypeId && (
                <div
                  css={{
                    position: 'absolute',
                    bottom: '24px',
                    right: '24px',
                    border: '0.5px solid #004FC5',
                    borderRadius: '8px',
                    color: theme.colors.primary,
                    padding: '12px 24px',
                    cursor: 'pointer',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      color: 'white',
                      backgroundColor: theme.colors.primary,
                      fontWeight: 'bold',
                    },
                  }}
                  onClick={showAddBaseChargeModal}
                >
                  기본요금 추가
                </div>
              )}
              <AddBaseChargeModal
                isModalOpen={isAddBaseChargeModalOpen}
                roomTypeId={roomTypeId}
                handleOk={handleAddBaseChargeModalOk}
                handleCancel={handleAddBaseChargeModalCancel}
              />
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

const BaseChargeInfoModal = ({ isModalOpen, handleOk, data }) => {
  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      okText="확인"
      onCancel={handleOk}
      cancelText="취소"
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography.Title level={4} style={{ textAlign: 'center' }}>
          {`${data.roomTypeName} 기본요금 정보`}
        </Typography.Title>
        {data.dayRates.map((value, index) => (
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
  );
};

const AddBaseChargeModal = ({
  isModalOpen,
  roomTypeId,
  handleOk,
  handleCancel,
}) => {
  const { RangePicker } = DatePicker;
  const [dates, setDates] = useState([null, null]);
  const [basicCharge, setBasicCharge] = useState(null);
  const [weeklyRates, setWeeklyRates] = useState({
    MONDAY: 0,
    TUESDAY: 0,
    WEDNESDAY: 0,
    THURSDAY: 0,
    FRIDAY: 0,
    SATURDAY: 0,
    SUNDAY: 0,
  });

  useEffect(() => {
    // 기본요금 입력 시 모든 요일에 값 설정
    if (basicCharge) {
      setWeeklyRates({
        MONDAY: basicCharge,
        TUESDAY: basicCharge,
        WEDNESDAY: basicCharge,
        THURSDAY: basicCharge,
        FRIDAY: basicCharge,
        SATURDAY: basicCharge,
        SUNDAY: basicCharge,
      });
    }
  }, [basicCharge]);

  const handleRangeChange = (value) => {
    setDates(value);
  };

  const handlePriceChange = (day, value) => {
    setWeeklyRates((prevRates) => ({
      ...prevRates,
      [day]: value,
    }));
  };

  const handleBasicCharge = (value) => {
    setBasicCharge(value);
  };

  const handleCancelModal = () => {
    setBasicCharge(null);
    setWeeklyRates({
      MONDAY: 0,
      TUESDAY: 0,
      WEDNESDAY: 0,
      THURSDAY: 0,
      FRIDAY: 0,
      SATURDAY: 0,
      SUNDAY: 0,
    });
    setDates([null, null]);
    handleCancel();
  };

  const handleConfirm = async () => {
    if (!dates[0] || !dates[1]) {
      message.error('날짜 범위를 모두 선택하세요.');
      return;
    }

    if (!basicCharge) {
      message.error('기본 요금을 입력하세요.');
      return;
    }

    const formattedDates = {
      roomTypeId: roomTypeId,
      basicRate: basicCharge,
      startDate: dates[0].format('YYYY-MM-DD'),
      endDate: dates[1].format('YYYY-MM-DD'),
      weeklyRates: weeklyRates,
    };

    handleCancelModal();
    handleOk(formattedDates);
  };

  const dayNames = {
    MONDAY: '월요일',
    TUESDAY: '화요일',
    WEDNESDAY: '수요일',
    THURSDAY: '목요일',
    FRIDAY: '금요일',
    SATURDAY: '토요일',
    SUNDAY: '일요일',
  };

  return (
    <Modal
      open={isModalOpen}
      title="기본요금 추가"
      okText="추가"
      onOk={handleConfirm}
      cancelText="취소"
      onCancel={handleCancelModal}
    >
      <RangePicker
        value={dates}
        onChange={handleRangeChange}
        format="YYYY-MM-DD"
        placeholder={['시작일', '종료일']}
      />
      <div style={{ marginTop: 16 }}>
        <Typography.Title level={5}>요일별 요금 설정</Typography.Title>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 8,
            marginTop: 12,
          }}
        >
          <div style={{ flex: '1 0 30%' }}>기본요금 설정</div>
          <Input
            style={{ flex: '1 0 70%' }}
            type="number"
            value={basicCharge}
            onChange={(e) => {
              const value = e.target.value.replace(/[^\d]/g, '');
              handleBasicCharge(value);
            }}
            placeholder="가격 입력"
            suffix="원"
          />
        </div>
        {Object.keys(weeklyRates).map((day) => (
          <div
            key={day}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 8,
            }}
          >
            <div style={{ flex: '1 0 30%' }}>{dayNames[day]}</div>
            <Input
              style={{ flex: '1 0 70%' }}
              type="number"
              value={weeklyRates[day] === 0 ? '' : `${weeklyRates[day]}`}
              onChange={(e) => {
                const value = e.target.value.replace(/[^\d]/g, '');
                handlePriceChange(day, value);
              }}
              placeholder="가격 입력"
              suffix="원"
            />
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default BaseChargeInfo;
