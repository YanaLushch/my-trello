import React, { FC } from 'react';
import ICard from '../../common/interfaces/ICard';
import { StyledList } from './List.styles';

type ListProps = {
  title: string;
  cards: ICard[];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const List: FC<ListProps> = ({ title, cards }) => (
  <StyledList>
    <h2>{title}</h2>
  </StyledList>
);

export default List;
