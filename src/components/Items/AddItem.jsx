import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Button, Form, Input, Select, InputNumber } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const StyledButton = styled(Button)`
  margin-top: 1rem;
  margin-right: 1rem;
`;

const AddItem = () => {
  const [visible, setVisible] = useState(false);
  const [componentSize, setComponentSize] = useState('default');
  const [itemCategory, setItemCategory] = useState();

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleSubmit = () => {
    setVisible(false);
  };

  const handleChange = (event, value) => {
    setItemCategory(value.value);
    console.log(itemCategory);
  };

  return (
    <div>
      <StyledButton
        type="primary"
        shape="round"
        icon={<DownloadOutlined />}
        size={'default'}
        onClick={() => setVisible(true)}>
        Add New Item
      </StyledButton>
      <Modal
        title="Enter details for your new item"
        centered
        visible={visible}
        onOk={handleSubmit}
        onCancel={() => setVisible(false)}
        width={850}>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}>
          <Form.Item label="Name" required>
            <Input />
          </Form.Item>
          <Form.Item label="Item category" required>
            <Select onChange={handleChange}>
              <Select.Option value="consumables">Consumables</Select.Option>
              <Select.Option value="reagents">Reagents</Select.Option>
              <Select.Option value="cells">Cell Lines</Select.Option>
              <Select.Option value="equipment">Equipment</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Supplier" required>
            <Input />
          </Form.Item>
          {itemCategory === 'cells' && (
            <Form.Item label="Species" required>
              <Input />
            </Form.Item>
          )}
          <Form.Item label="Catalog No." required>
            <Input />
          </Form.Item>
          <Form.Item label="Description">
            <Input />
          </Form.Item>
          {itemCategory === 'cells' && (
            <Form.Item label="Last freeze" required>
              <Input />
            </Form.Item>
          )}
          {itemCategory === 'equipment' && (
            <Form.Item label="Last maintenance" required>
              <Input />
            </Form.Item>
          )}
          <Form.Item label="Quantity" required>
            <InputNumber />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddItem;
