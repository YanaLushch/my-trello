/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useEffect, useState } from 'react';
import { Modal } from 'antd';

type AddBoardModalProps = {
  handleCancel: () => void;
  isModalVisible: boolean;
  onSave: CallableFunction;
  title: string;
  initialValue?: string | null;
};

const AddBoardModal: FC<AddBoardModalProps> = ({ handleCancel, isModalVisible, onSave, title, initialValue }) => {
  const [inputValue, setInputValue] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialValue !== undefined && initialValue !== null) {
      setInputValue(initialValue);
    }
  }, [initialValue]);

  const handleInputChange = (e: any): void => {
    setInputValue(e.target.value);
  };
  const onInputUpdate = (): void => {
    onSave(inputValue);
    setInputValue('');
  };

  return (
    <Modal title={title} visible={isModalVisible} onOk={onInputUpdate} onCancel={handleCancel} closable>
      <input value={inputValue} onChange={handleInputChange} />
      {errorMessage !== '' ? <div className="validation-message">{errorMessage}</div> : ''}
    </Modal>
  );
};

AddBoardModal.defaultProps = { initialValue: null };

export default AddBoardModal;
