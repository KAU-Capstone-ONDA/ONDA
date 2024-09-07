/** @jsxImportSource @emotion/react */
import { Input, InputNumber, Tooltip } from 'antd';
import Spacer from '../common/Spacer';

const TypeNumberInput = (props) => {
  const { text, placeholder, value, onChange } = props;

  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      onChange(inputValue);
    }
  };

  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
  };

  const title = value ? (
    <span className="numeric-input-title">
      {value !== '-' ? new Intl.NumberFormat().format(Number(value)) : '-'}
    </span>
  ) : (
    '객실 개수 입력 (숫자만)'
  );

  return (
    <div style={{ width: '140px' }}>
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
      <Tooltip title={title} placement="topLeft">
        <Input
          {...props}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          maxLength={12}
        />
      </Tooltip>
    </div>
  );
};

export default TypeNumberInput;
