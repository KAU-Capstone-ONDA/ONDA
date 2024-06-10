import React from 'react';
import { Checkbox, Typography } from 'antd';

const TypeCheckGroup = ({ text, options, onChange, sectionTitle }) => (
  <div style={{ marginBottom: '24px' }}>
    {text && <Typography.Title level={3}>{text}</Typography.Title>}
    <Typography.Title level={4}>{sectionTitle}</Typography.Title>
    <Checkbox.Group
      options={options}
      onChange={onChange}
      style={{ width: '100%' }}
    />
  </div>
);

export default TypeCheckGroup;
