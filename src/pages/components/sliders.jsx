import React, { useState } from 'react';
import { Col, InputNumber, Row, Slider, Space } from 'antd';
const IntegerStep = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange = newValue => {
    setInputValue(newValue);
  };
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={5000}
          max={1000000}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      <Col span={10}>
        <InputNumber
          min={5000}
          max={1000000}
          style={{ margin: '0 56px' }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

const Sliders = () => (
  <Space style={{ width: '100%' }} direction="vertical">
    <IntegerStep />
    
  </Space>
);
export default Sliders;