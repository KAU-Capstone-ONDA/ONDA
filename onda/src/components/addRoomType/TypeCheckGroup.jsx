/** @jsxImportSource @emotion/react */
import { Checkbox, Col, Row } from 'antd';
import Spacer from '../common/Spacer';

const TypeCheckGroup = ({ text, options, onChange }) => {
  return (
    <div
      style={{
        width: 'auto',
      }}
    >
      <div
        css={{
          fontWeight: 'bold',
          fontSize: '20px',
          color: '#004FC5',
        }}
      >
        {text}
      </div>
      <Spacer height="12px" />
      <Checkbox.Group
        style={{
          padding: '12px 40px',
          borderRadius: '8px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
        onChange={onChange}
      >
        <Row gutter={[0, 6]}>
          {options.map((option, index) => (
            <Col key={index} span={6}>
              <Checkbox style={{ fontSize: '0.95rem' }} value={option}>
                {option}
              </Checkbox>
            </Col>
          ))}
        </Row>
      </Checkbox.Group>
    </div>
  );
};

export default TypeCheckGroup;
