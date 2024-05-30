import { Select, Typography } from 'antd';

const TypeDropDown = ({ text, options, onChange }) => {
  return (
    <div>
      <Typography.Title
        style={{
          color: '#004FC5',
          fontWeight: 'bold',
        }}
        level={4}
      >
        {text}
      </Typography.Title>
      <Select style={{ width: 240 }} onChange={onChange} options={options} />
    </div>
  );
};

export default TypeDropDown;
