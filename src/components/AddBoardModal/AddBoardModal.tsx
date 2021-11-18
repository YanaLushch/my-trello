/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useState } from 'react';
import { Modal, Button } from 'antd';
import { connect, ConnectedProps } from 'react-redux';
import { Action } from 'redux';
import 'antd/dist/antd.css';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../store/store';
import { createBoard as createBoardAction } from '../../store/modules/boards/actions';

type HomeProps = PropsFromRedux;

const AddBoardModal: FC<HomeProps> = ({ createBoard }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleInputChange = (e: any): void => {
    setInputValue(e.target.value);
  };

  const showModal = (): void => {
    setIsModalVisible(true);
  };
  const onInputUpdate = async (): Promise<void> => {
    await createBoard(inputValue);
    setIsModalVisible(false);
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
        onOk={onInputUpdate}
        onCancel={handleCancel}
      >
        <input value={inputValue} onChange={handleInputChange} />
        {/* <input type="submit" value="submit" onClick={handleSubmitButton} /> */}
      </Modal>
    </>
  );
};

interface IConnectedDispatch {
  createBoard: (input: string) => Promise<void>;
}

// eslint-disable-next-line arrow-body-style
const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, void, Action>): IConnectedDispatch => {
  return {
    createBoard: (input): Promise<void> => dispatch(createBoardAction(input)),
  };
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(AddBoardModal);
