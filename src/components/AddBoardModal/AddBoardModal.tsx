/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useState } from 'react';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';

const AddBoardModal: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const handleInputChange = (e: any): void => {
    setInputValue(e.target.value);
  };

  const showModal = (): void => {
    setIsModalVisible(true);
  };

  const handleOk = (): void => {
    setConfirmLoading(true);
    setTimeout(() => {
      setIsModalVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = (): void => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Add the title"
        visible={isModalVisible}
        confirmLoading={confirmLoading}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input value={inputValue} onChange={handleInputChange} />
        {/* <input type="submit" value="submit" onClick={handleSubmitButton} /> */}
      </Modal>
    </>
  );
};

export default AddBoardModal;
