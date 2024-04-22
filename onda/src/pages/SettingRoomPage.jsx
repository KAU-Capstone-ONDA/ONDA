import React, { useState } from 'react';

const SettingRoomPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <h1>객실설정</h1>
      <button onClick={openModal}>+</button>
      {isModalOpen && (
        <div style={modalStyle}>
          <h2>객실 타입 등록</h2>
          <button onClick={closeModal}>닫기</button>
        </div>
      )}
    </>
  );
};

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  padding: '20px',
  zIndex: 1000,
  // 여기에 모달에 필요한 스타일을 추가하세요.
};

export default SettingRoomPage;
