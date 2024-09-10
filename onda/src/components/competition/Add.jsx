/** @jsxImportSource @emotion/react */
import React from 'react';
import theme from '../../theme';

const Add = ({ onClickAddCompetition }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '10px',
        marginTop: '24px',
        marginBottom: '24px',
      }}
    >
      <div
        css={{
          border: '0.5px solid #004FC5',
          borderRadius: '8px',
          color: theme.colors.primary,
          padding: '8px 16px',
          cursor: 'pointer',
          '&:hover': {
            color: 'white',
            backgroundColor: theme.colors.primary,
            fontWeight: 'bold',
          },
        }}
        onClick={onClickAddCompetition}
      >
        경쟁 업체 등록하기
      </div>
    </div>
  );
};

export default Add;
