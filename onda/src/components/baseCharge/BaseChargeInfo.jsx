import { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

const BaseChargeInfo = (props) => {
  const [chargeData, setChargeData] = useState(null);
  const { baseChargeInfo, handleAddChargeInfo, handleModifyChargeInfo } = props;

  useEffect(() => {
    if (baseChargeInfo !== null) setChargeData(baseChargeInfo.data);
  }, [baseChargeInfo]);

  return (
    <Layout css={{ backgroundColor: 'white' }}>
      <Content
        style={{
          margin: '12px 16px',
          width: 'auto',
          height: 'auto',
          minHeight: '600px',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        {chargeData && <></>}
      </Content>
    </Layout>
  );
};

export default BaseChargeInfo;
