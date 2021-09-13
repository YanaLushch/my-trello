/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
// import { RouteComponentProps } from 'react-router-dom';
import List from '../../components/List/List';
import AddButton from '../../components/AddButton/AddButton';
import { StyledBoard } from './Board.styles';
import { getBoardCards } from '../../api/boards';
import { useApiCall } from '../../hooks/useApiCall';

const Board: FC = () => {
  const { state: list, reload } = useApiCall(getBoardCards);

  if (!list) return null;

  return (
    <StyledBoard>
      <h1 className="title">{(list as any).title}</h1>
      <div className="list-block">
        {Object.values((list as any).lists).map((item) => (
          <List title={(item as any).title} cards={(item as any).cards} key={(item as any).id} />
        ))}
        <AddButton />
        <button onClick={reload}>Reload</button>
      </div>
    </StyledBoard>
  );
};

export default Board;
