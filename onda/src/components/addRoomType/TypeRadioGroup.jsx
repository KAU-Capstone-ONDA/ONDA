/** @jsxImportSource @emotion/react */
import { Col, Radio, Row, Typography } from 'antd';

const TypeRadioGroup = ({ text, options, onChange }) => {
  return (
    <div
      style={{
        width: 'auto',
      }}
    >
      <Typography.Title
        style={{ color: '#004FC5', fontWeight: 'bold' }}
        level={4}
      >
        {text}
      </Typography.Title>
      <Radio.Group
        style={{
          padding: '12px 40px',
          borderRadius: '8px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
        onChange={onChange}
      >
        <Row gutter={[6, 6]} style={{ justifyContent: 'center' }}>
          {options.map((option, index) => (
            <Col key={index} span={6}>
              <Radio
                value={option.value}
                style={{
                  fontSize: '1rem',
                }}
              >
                {option.label}
              </Radio>
            </Col>
          ))}
        </Row>
      </Radio.Group>
    </div>
  );
};

export default TypeRadioGroup;
