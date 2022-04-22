import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { Button, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { getBoards, editBoard, createBoard } from '../../store/modules/boards/actions';
import Board from '../../components/SingleBoard/SingleBoard';
import { StyledHome } from './Home.styles';
import { RootState } from '../../store/store';
import IBoard from '../../common/interfaces/IBoard';
import AddBoardModal from '../../components/AddBoardModal/AddBoardModal';

type HomeProps = PropsFromRedux;
type EditedModalProps = {
  boardId: number;
  title: string;
};

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Home: FC<HomeProps> = ({ boards, getBoards: boardsFunc, editBoard: edit, createBoard: create }) => {
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState<'create' | 'edit' | null>(null);
  const [editedBoard, setEditedBoard] = useState<EditedModalProps | null>(null);

  useEffect(() => {
    setLoading(true);
    boardsFunc().finally(() => setLoading(false));
  }, []);

  const handleEdit = (boardId: number, title: string): void => {
    setEditedBoard({ boardId, title });
    setModalType('edit');
    setIsModalVisible(true);
  };
  const handleCreate = (): void => {
    setModalType('create');
    setIsModalVisible(true);
  };
  const handleCancel = (): void => {
    setIsModalVisible(false);
  };

  const handleBoardSave = async (input: string): Promise<void> => {
    if (editedBoard === null) return Promise.resolve();
    try {
      if (modalType === 'edit') {
        await edit(editedBoard.boardId, input);
      } else if (modalType === 'create') {
        await create(input);
      }
      setIsModalVisible(false);
      setModalType(null);
    } catch {
      console.log('something went wrong');
      setIsModalVisible(true);
    }
    return Promise.resolve();
  };

  return (
    <StyledHome>
      <h1>My boards</h1>
      {loading ? (
        <Spin indicator={antIcon} />
      ) : (
        <div className="boards">
          {Object.values(boards).map((item) => (
            <Link to={`/board/${item.id}`} key={item.id}>
              <Board title={item.title} boardId={item.id} onChange={handleEdit} />
            </Link>
          ))}
        </div>
      )}
      <>
        <Button type="primary" onClick={handleCreate}>
          Add Board
        </Button>
        {modalType === 'create' ? (
          <AddBoardModal
            title="Create the Board"
            handleCancel={handleCancel}
            isModalVisible={isModalVisible}
            onSave={handleBoardSave}
          />
        ) : (
          ''
        )}
        {modalType === 'edit' ? (
          <AddBoardModal
            title="Edit the Board"
            initialValue={editedBoard ? editedBoard.title : ''}
            handleCancel={handleCancel}
            isModalVisible={isModalVisible}
            onSave={handleBoardSave}
          />
        ) : (
          ''
        )}
      </>
    </StyledHome>
  );
};

const mapStateToProps = (state: RootState): { boards: IBoard[] } => ({
  ...state.boards,
});

const connector = connect(mapStateToProps, { getBoards, editBoard, createBoard });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Home);
