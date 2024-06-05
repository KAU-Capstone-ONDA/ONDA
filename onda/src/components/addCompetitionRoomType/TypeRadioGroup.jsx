/** @jsxImportSource @emotion/react */
import React from 'react';
import { Radio, Typography } from 'antd';

const TypeRadioGroup = ({ text, options, onChange }) => {
  return (
    <div>
      <Typography.Title level={4}>{text}</Typography.Title>
      <Radio.Group options={options} onChange={onChange} />
    </div>
  );
};

export default TypeRadioGroup;
