export const formatCurrency = (amount) => {
  if (typeof amount !== 'number') {
    amount = Number(amount);
  }

  if (isNaN(amount)) {
    throw new Error('Invalid number');
  }

  // Format the number with commas and add the '원' suffix
  return `${amount.toLocaleString()}원`;
};

export const formatDays = (day) => {
  const dayMap = {
    MONDAY: '월요일',
    TUESDAY: '화요일',
    WEDNESDAY: '수요일',
    THURSDAY: '목요일',
    FRIDAY: '금요일',
    SATURDAY: '토요일',
    SUNDAY: '일요일',
  };

  return dayMap[day] || '알 수 없음'; // 매칭되지 않는 경우 기본값 반환
};
