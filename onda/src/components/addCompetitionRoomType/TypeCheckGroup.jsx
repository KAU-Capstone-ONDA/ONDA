/** @jsxImportSource @emotion/react */
import React from 'react';
import { Checkbox, Typography } from 'antd';

const TypeCheckGroup = ({ text, options, onChange, sectionTitle }) => {
  return (
    <div>
      <Typography.Title level={4}>{text}</Typography.Title>
      {sectionTitle && <Typography.Title level={5}>{sectionTitle}</Typography.Title>}
      <Checkbox.Group options={options} onChange={onChange} />
    </div>
  );
};

export default TypeCheckGroup;
