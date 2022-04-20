import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal, Button, Space } from 'antd';
import { useDeleteItemMutation } from '../../services/items';

const { confirm } = Modal;

const DeleteModal = (props) => {
  const [deleteItem] = useDeleteItemMutation();
  function showConfirm() {
    confirm({
      title: `Are you sure you want to delete ${props.name}?`,
      icon: <ExclamationCircleOutlined />,
      // content: 'Some descriptions',
      onOk() {
        deleteItem({ id: props.id, category: props.category });
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  return <Button onClick={showConfirm}>Delete</Button>;
};

export default DeleteModal;
