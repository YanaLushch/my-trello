import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { getBoard } from '../../store/modules/board/actions';
import AddButton from '../../components/AddButton/AddButton';
import { StyledBoard } from './Board.styles';
import { RootState } from '../../store/store';
import ISingleBoard from '../../common/interfaces/ISingleBoard';
import List from '../../components/List/List';

interface BoardRouteParams {
  boardId: string;
}

// interface BoardProps {
//   title: string;
// }

const Board: FC<RouteComponentProps<BoardRouteParams> & PropsFromRedux> = ({
  match: {
    params: { boardId },
  },
  getBoard: boardFunc,
  board,
}) => {
  useEffect(() => {
    console.log('boardFunc', boardId);
    boardFunc(boardId);
  }, []);
  if (board === null) {
    return null;
  }
  return (
    <StyledBoard>
      <h1 className="title">{board.title}</h1>
      <div className="list-block">
        {Object.values(board.lists).map((item) => (
          <List title={item.title} cards={item.cards || null} key={item.id} />
        ))}
        <AddButton />
      </div>
    </StyledBoard>
  );
};

const mapStateToProps = (state: RootState): { board: ISingleBoard | null } => ({
  board: state.board.currentBoard,
});
const connector = connect(mapStateToProps, { getBoard });
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Board);
