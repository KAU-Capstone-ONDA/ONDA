import { Modal } from 'antd';

const LoginModal = ({ isModalOpen, handleOk, handleCancel }) => {
  return (
    <Modal
      title="온다 메시지"
      open={isModalOpen}
      onOk={handleOk}
      okText="확인"
      onCancel={handleCancel}
      cancelText="취소"
    >
      <p>
        로그인이 필요한 서비스입니다.
        <br />
        로그인 하시겠습니까?
      </p>
    </Modal>
  );
};

export default LoginModal;
