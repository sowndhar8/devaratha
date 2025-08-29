import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
const items = [
  {
    key: '1',
    label: 'Gold Loan',
  },
  {
    key: '2',
    label: 'Mortage Loan',
  },
  {
    key: '3',
    label: 'Personal Loan',
  },
  {
    key: '4',
    label: 'Business Loan',
  },
];
const DropDown = () => (
  <Dropdown
    menu={{
      items,
      selectable: true,
      defaultSelectedKeys: ['1'],
    }}
  >
    <Typography.Link>
      <Space>
        Selectable
        <DownOutlined />
      </Space>
    </Typography.Link>
  </Dropdown>
);
export default DropDown;