import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import AddButton from '../../components/AddButton/AddButton';
import { getBoards } from '../../store/modules/boards/actions';
import Board from '../../components/SingleBoard/SingleBoard';
import { StyledHome } from './Home.styles';
import { RootState } from '../../store/store';
import IBoard from '../../common/interfaces/IBoard';

type HomeProps = PropsFromRedux;

const Home: FC<HomeProps> = ({ boards, getBoards: boardsFunc }) => {
  useEffect(() => {
    boardsFunc();
  }, []);
  return (
    <StyledHome>
      <h1>My boards</h1>
      <div className="boards">
        {Object.values(boards).map((item) => (
          <Link to={`/board/${item.id}`} key={item.id}>
            <Board title={item.title} />
          </Link>
        ))}
      </div>
      <AddButton />
    </StyledHome>
  );
};

const mapStateToProps = (state: RootState): { boards: IBoard[] } => ({
  ...state.boards,
});

const connector = connect(mapStateToProps, { getBoards });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Home);
