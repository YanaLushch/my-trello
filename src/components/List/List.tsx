import React, { FC } from 'react';
import ICard from '../../common/interfaces/ICard';
import Button from '../AddButton/AddButton';
import Card from '../Card/Card';
import { StyledList } from './List.styles';

type ListProps = {
  title: string;
  cards: ICard[];
};

const List: FC<ListProps> = ({ title, cards }) => (
  <StyledList>
    <h2>{title}</h2>
    {cards.map((item) => (
      <Card title={item.title} />
    ))}
    <Button />
  </StyledList>
);

export default List;
