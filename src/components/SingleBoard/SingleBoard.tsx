import React, { FC } from 'react';
import { CloseOutlined, EditOutlined } from '@ant-design/icons';
import { connect, ConnectedProps } from 'react-redux';
import { StyledBoard } from './SingleBoard.styles';
import { removeBoard } from '../../store/modules/boards/actions';

type BoardProps = {
  title: string;
  boardId: number;
  onChange: CallableFunction;
};

const Board: FC<BoardProps & PropsFromRedux> = ({ title, boardId, removeBoard: remove, onChange }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleRemove = async (event: any): Promise<void> => {
    event.preventDefault();
    await remove(boardId);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEdit = async (event: any): Promise<void> => {
    event.preventDefault();
    onChange(boardId, title);
  };

  return (
    <StyledBoard>
      <div className="single-board">
        <div className="action-buttons">
          <button onClick={handleEdit}>
            <EditOutlined />
          </button>
          <button onClick={handleRemove}>
            <CloseOutlined />
          </button>
        </div>
        <div className="board-title">{title}</div>
      </div>
    </StyledBoard>
  );
};

const connector = connect(null, { removeBoard });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Board);
