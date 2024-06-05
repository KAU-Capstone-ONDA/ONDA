/** @jsxImportSource @emotion/react */
import React from 'react';
import { Select, Typography } from 'antd';

const { Option } = Select;

const TypeDropDown = ({ text, options, onChange }) => {
  return (
    <div>
      <Typography.Title level={4}>{text}</Typography.Title>
      <Select style={{ width: 200 }} onChange={onChange}>
        {options.map(option => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default TypeDropDown;
