import React, { FC } from 'react';
import ICard from '../../common/interfaces/ICard';
import AddButton from '../AddButton/AddButton';
import Card from '../Card/Card';
import { StyledList } from './List.styles';

type ListProps = {
  title: string;
  cards: ICard[] | null;
};

const List: FC<ListProps> = ({ title, cards }) => {
  if (cards === null) {
    return null;
  }
  return (
    <StyledList>
      <h2 className="title">{title}</h2>
      {Object.values(cards).map((item) => (
        <Card title={item.title} key={item.id} />
      ))}
      <AddButton />
    </StyledList>
  );
};

export default List;
