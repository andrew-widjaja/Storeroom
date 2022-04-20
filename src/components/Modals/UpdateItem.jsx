import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Button, Form, Input, Select, InputNumber } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useUpdateItemMutation } from '../../services/items.js';
// import { useGetConsumablesQuery } from '../../services/items.js';

const StyledButton = styled(Button)`
  margin-top: 1rem;
  margin-right: 1rem;
`;

const UpdateItem = (props) => {
  const [visible, setVisible] = useState(false);
  const [updateItem] = useUpdateItemMutation();
  // const consumable = useGetConsumablesQuery();

  const handleSubmit = async (e, value) => {
    setVisible(false);
    const updateInfo = {
      id: props.id,
      name: name,
      category: itemCategory,
      supplier: supplier,
      catalog: catalog,
      description: description,
      quantity: qty,
      species: species,
      lastFreeze: freeze,
      lastMaintenance: maintenance,
    };
    await updateItem(updateInfo);
  };

  const [name, setName] = useState();
  const handleNameChange = (e, value) => {
    setName(e.target.value);
    e.target.value = '';
  };

  const [itemCategory, setItemCategory] = useState();
  const handleCategoryChange = (e, value) => {
    setItemCategory(value.value);
  };

  const [supplier, setSupplier] = useState();
  const handleSupplierChange = (e) => {
    setSupplier(e.target.value);
  };
  const [catalog, setCatalog] = useState();
  const handleCatalogChange = (e) => {
    setCatalog(e.target.value);
  };
  const [species, setSpecies] = useState();
  const handleSpeciesChange = (e) => {
    setSpecies(e.target.value);
  };
  const [description, setDescription] = useState();
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const [freeze, setFreeze] = useState();
  const handleFreezeChange = (e) => {
    setFreeze(e.target.value);
  };
  const [maintenance, setMaintenance] = useState();
  const handleMaintenanceChange = (e) => {
    setMaintenance(e.target.value);
  };
  const [qty, setQty] = useState();
  const handleQtyChange = (e) => {
    setQty(e);
  };

  return (
    <div>
      <StyledButton
        type="secondary"
        // shape="round"
        icon={<EditOutlined />}
        size={'default'}
        onClick={() => setVisible(true)}>
        Update
      </StyledButton>
      <Modal
        title="Enter new details for your item"
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
            size: 'default',
          }}
          size={'default'}>
          <Form.Item label="Item category" required>
            <Select onChange={handleCategoryChange}>
              <Select.Option value="consumables">Consumables</Select.Option>
              <Select.Option value="reagents">Reagents</Select.Option>
              <Select.Option value="cells">Cell Lines</Select.Option>
              <Select.Option value="equipment">Equipment</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Name" required>
            <Input onChange={handleNameChange} />
          </Form.Item>
          <Form.Item label="Supplier" required>
            <Input onChange={handleSupplierChange} />
          </Form.Item>
          {itemCategory === 'cells' && (
            <Form.Item label="Species" required>
              <Input onChange={handleSpeciesChange} />
            </Form.Item>
          )}
          <Form.Item label="Catalog No." required>
            <Input onChange={handleCatalogChange} />
          </Form.Item>
          <Form.Item label="Description">
            <Input onChange={handleDescriptionChange} />
          </Form.Item>
          {itemCategory === 'cells' && (
            <Form.Item label="Last freeze" required>
              <Input onChange={handleFreezeChange} />
            </Form.Item>
          )}
          {itemCategory === 'equipment' && (
            <Form.Item label="Last maintenance" required>
              <Input onChange={handleMaintenanceChange} />
            </Form.Item>
          )}
          {itemCategory !== 'equipment' && (
            <Form.Item label="Quantity" required>
              <InputNumber onChange={handleQtyChange} name="qty" />
            </Form.Item>
          )}
        </Form>
      </Modal>
    </div>
  );
};

export default UpdateItem;
