import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const StyledButton = styled(Button)`
  margin-top: 1rem;
  margin-right: 1rem;
`;

const AddItem = () => {
  return (
    <div>
      <StyledButton
        type="primary"
        shape="round"
        icon={<DownloadOutlined />}
        size={'default'}>
        Add New Item
      </StyledButton>
    </div>
  );
};

export default AddItem;
