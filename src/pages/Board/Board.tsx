import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import List from '../../components/List/List';
import AddButton from '../../components/AddButton/AddButton';
import { StyledBoard } from './Board.styles';

const state = {
  title: 'Моя тестовая доска',
  lists: [
    {
      id: 1,
      title: 'Планы',
      cards: [
        { id: 1, title: 'помыть кота' },
        { id: 2, title: 'приготовить суп' },
        { id: 3, title: 'сходить в магазин' },
      ],
    },
    {
      id: 2,
      title: 'В процессе',
      cards: [{ id: 4, title: 'посмотреть сериал' }],
    },
    {
      id: 3,
      title: 'Сделано',
      cards: [
        { id: 5, title: 'сделать домашку' },
        { id: 6, title: 'погулять с собакой' },
      ],
    },
    {
      id: 4,
      title: 'Сделано',
      cards: [
        { id: 5, title: 'сделать домашку' },
        { id: 6, title: 'погулять с собакой' },
      ],
    },
    {
      id: 5,
      title: 'Сделано',
      cards: [
        { id: 5, title: 'сделать домашку' },
        { id: 6, title: 'погулять с собакой' },
      ],
    },
    {
      id: 6,
      title: 'Сделано',
      cards: [
        { id: 5, title: 'сделать домашку' },
        { id: 6, title: 'погулять с собакой' },
      ],
    },
    {
      id: 7,
      title: 'Сделано',
      cards: [
        { id: 5, title: 'сделать домашку' },
        { id: 6, title: 'погулять с собакой' },
      ],
    },
    {
      id: 8,
      title: 'Сделано',
      cards: [
        { id: 5, title: 'сделать домашку' },
        { id: 6, title: 'погулять с собакой' },
      ],
    },
    {
      id: 9,
      title: 'Сделано',
      cards: [
        { id: 5, title: 'сделать домашку' },
        { id: 6, title: 'погулять с собакой' },
      ],
    },
  ],
};

type BoardType = {
  boardId: string;
};

const Board: FC<RouteComponentProps<BoardType>> = ({
  match: {
    params: { boardId },
  },
}) => (
  <StyledBoard>
    <h1 className="title">{state.title}</h1>
    <h2>{boardId}</h2>
    <div className="list-block">
      {Object.values(state.lists).map((item) => (
        <List title={item.title} cards={item.cards} key={item.id} />
      ))}
      <AddButton />
    </div>
  </StyledBoard>
);

export default Board;
