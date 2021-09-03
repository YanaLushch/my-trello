import React, { FC } from 'react';
import { StyledBoard } from './Board.styles';

type BoardProps = {
  title: string;
};

const Board: FC<BoardProps> = ({ title }) => (
  <StyledBoard>
    <div>{title}</div>
  </StyledBoard>
);

export default Board;
