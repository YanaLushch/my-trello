/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { getBoards } from '../../api/boards';
import AddButton from '../../components/AddButton/AddButton';
import Board from '../../components/Board/Board';
import { useApiCall } from '../../hooks/useApiCall';
import { StyledHome } from './Home.styles';

type HomeProps = {
  title: string;
};

const Home: FC<HomeProps> = () => {
  // const match = useRouteMatch();
  const { state: boards, reload } = useApiCall(getBoards);

  if (!boards) return null;

  return (
    <StyledHome>
      <h1>My boards</h1>
      <div className="boards">
        {Object.values((boards as any).boards).map((item) => (
          <Board key={(item as any).id} title={(item as any).title} />
        ))}
      </div>
      <AddButton />
      <button onClick={reload}>Reload</button>
    </StyledHome>
  );
};

export default Home;
