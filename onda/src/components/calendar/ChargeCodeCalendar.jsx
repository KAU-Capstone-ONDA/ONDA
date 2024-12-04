/** @jsxImportSource @emotion/react */
import { Calendar, ConfigProvider, Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import theme from '../../theme';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';

moment.locale('ko');

const ChargeCodeCalendar = (props) => {
  const { roomTypeId, baseChargeInfo } = props;
  const [isAddBaseChargeModalOpen, setIsAddChargeCodeModalOpen] =
    useState(false);
  const [rateMap, setRateMap] = useState({}); // 초기 상태를 빈 객체로 설정

  useEffect(() => {
    if (baseChargeInfo !== null && Array.isArray(baseChargeInfo.data)) {
      const mapData = baseChargeInfo.data.reduce((acc, item) => {
        if (Array.isArray(item.dayRates)) {
          item.dayRates.forEach((rate) => {
            acc[rate.date] = rate.rate; // 날짜를 키로 하고 요금을 값으로 설정
          });
        }
        return acc;
      }, {});

      setRateMap(mapData); // 데이터가 있으면 매핑 설정
    } else {
      setRateMap({}); // 빈 객체로 기본값 설정
    }
  }, [baseChargeInfo]);

  // cellRender 함수 정의
  const cellRender = (date, { type }) => {
    if (type === 'date' && rateMap) {
      const formattedDate = date.format('YYYY-MM-DD'); // 날짜를 'YYYY-MM-DD' 형식으로 변환
      const rate = rateMap[formattedDate]; // 매핑에서 요금을 가져옴

      if (rate) {
        return (
          <div
            style={{
              textAlign: 'center',
              color: theme.colors.primary,
              fontWeight: 'bold',
            }}
          >
            ₩{rate.toLocaleString()}
          </div>
        );
      }
    }
    return null; // 값이 없거나 type이 'date'가 아닌 경우 null 반환
  };

  return (
    <ConfigProvider locale={locale}>
      <div css={{ backgroundColor: 'white' }}>
        <div
          style={{
            margin: '12px 16px',
            width: 'auto',
            height: 'auto',
            minHeight: '600px',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            position: 'relative',
          }}
        >
          {baseChargeInfo && <Calendar cellRender={cellRender} />}
        </div>
      </div>
    </ConfigProvider>
  );
};

export default ChargeCodeCalendar;
