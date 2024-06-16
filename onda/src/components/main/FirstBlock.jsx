/** @jsxImportSource @emotion/react */
import { NavLink, useNavigate } from 'react-router-dom';
import Spacer from '../common/Spacer';
import { motion } from 'framer-motion';
import UserAuth from '../../hooks/UserAuth';
import { useState } from 'react';
import LoginModal from '../common/LoginModal';

const Title = ({ text }) => {
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '2.5rem',
        color: '#004FC5',
        paddingBottom: '0.2rem',
      }}
    >
      {text}
    </div>
  );
};

const SubTitle = ({ text }) => {
  return (
    <div
      css={{
        display: 'flex',
        fontSize: '1rem',
        justifyContent: 'center',
      }}
    >
      {text}
    </div>
  );
};

const StartButton = () => {
  const { isLoggedIn } = UserAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const onClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      showModal();
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    navigate('/login');
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    navigate('/');
    setIsModalOpen(false);
  };

  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <NavLink
        key="settingroom"
        to="settingroom"
        onClick={onClick}
        css={{
          fontSize: '1.2rem',
          padding: '0.3rem 2rem',
          backgroundColor: '#004FC5',
          color: 'white',
          borderRadius: '5px',
          cursor: 'pointer',
          textDecoration: 'none',
          border: '1px solid #004FC5',
          fontWeight: 'bold',
        }}
      >
        시작하기
      </NavLink>

      <LoginModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
};

const MainImage = ({ image }) => {
  return (
    <motion.div
      className="mainimage"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.3 },
      }}
    >
      <div
        css={{
          textAlign: 'center',
        }}
      >
        <img
          src={image}
          alt="mainImage"
          css={{
            maxWidth: '80%',
            height: 'auto',
          }}
        />
      </div>
    </motion.div>
  );
};

const FirstBlock = ({ image, titleText, subTitleText }) => {
  return (
    <div>
      <Spacer height="4.5rem" />
      <Title text={titleText} />
      <SubTitle text={subTitleText} />
      <Spacer height="1.5rem" />
      <StartButton />
      <Spacer height="4.5rem" />
      <MainImage image={image} />
      <Spacer height="5.5rem" />
    </div>
  );
};

export default FirstBlock;
