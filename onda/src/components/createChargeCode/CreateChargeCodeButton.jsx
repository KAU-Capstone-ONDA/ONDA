/** @jsxImportSource @emotion/react */
import theme from '../../theme';
import React from 'react';

const CreateChargeCodeButton = (props) => {
  const { title, onClickButton } = props;

  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'flex-end', // 버튼을 우측 끝으로 정렬
        padding: '12px', // 버튼을 위한 패딩 추가
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
        onClick={onClickButton}
      >
        {title}
      </div>
    </div>
  );
};

export default CreateChargeCodeButton;
