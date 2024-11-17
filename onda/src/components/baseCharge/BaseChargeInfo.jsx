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

  const showChargeDetailModal = () => {
    setIsChargeDetailModalOpen(true);
  };

  const handleChargeDetailModalOk = () => {
    setIsChargeDetailModalOpen(false);
  };

  const showAddBaseChargeModal = () => {
    setIsAddBaseChargeModalOpen(true);
  };

  const handleAddBaseChargeModalOk = (props) => {};

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
        {chargeData && (
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
                {baseChargeInfo.length === 0 ? (
                  <div>설정한 기본요금이 없습니다.</div>
                ) : (
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
                        onClick={showChargeDetailModal}
                      >
                        {`${value.startDate} ~ ${value.endDate}`}
                      </div>
                      <BaseChargeInfoModal
                        isModalOpen={isChargeDetailModalOpen}
                        handleOk={handleChargeDetailModalOk}
                        data={value}
                      />

                      <div
                        style={{
                          position: 'absolute',
                          bottom: '24px',
                          right: '24px',
                        }}
                      >
                        <div
                          css={{
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
                        <AddBaseChargeModal
                          isModalOpen={isAddBaseChargeModalOpen}
                          roomTypeId={roomTypeId}
                          handleOk={handleAddBaseChargeModalOk}
                          handleCancel={handleAddBaseChargeModalCancel}
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
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
  const [weeklyRates, setWeeklyRates] = useState({
    MONDAY: 0,
    TUESDAY: 0,
    WEDNESDAY: 0,
    THURSDAY: 0,
    FRIDAY: 0,
    SATURDAY: 0,
    SUNDAY: 0,
  });

  const handleRangeChange = (value) => {
    setDates(value);
  };

  const handlePriceChange = (day, value) => {
    setWeeklyRates((prevRates) => ({
      ...prevRates,
      [day]: value,
    }));
  };

  const handleConfirm = () => {
    if (!dates[0] || !dates[1]) {
      message.error('날짜 범위를 모두 선택하세요.').then();
      return;
    }

    const formattedDates = {
      startDate: dates[0].format('YYYY-MM-DD'),
      endDate: dates[1].format('YYYY-MM-DD'),
      weeklyRates: weeklyRates,
    };

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
      onCancel={handleCancel}
    >
      <RangePicker
        value={dates}
        onChange={handleRangeChange}
        format="YYYY-MM-DD"
        placeholder={['시작일', '종료일']}
      />
      <div style={{ marginTop: 16 }}>
        <Typography.Title level={5}>요일별 요금 설정</Typography.Title>
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
                // '원'을 표시하지 않고 값만 추출
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
