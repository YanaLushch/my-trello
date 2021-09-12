import React, { FC } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import AddButton from '../../components/AddButton/AddButton';
import Board from '../../components/Board/Board';
import { StyledHome } from './Home.styles';

type HomeProps = {
  title: string;
};

const state = {
  boards: [
    { id: 1, title: 'покупки' },
    { id: 2, title: 'подготовка к свадьбе' },
    { id: 3, title: 'разработка интернет-магазина' },
    { id: 4, title: 'курс по продвижению в соцсетях' },
  ],
};

const Home: FC<HomeProps> = () => {
  const match = useRouteMatch();
  return (
    <Link to={`${match.url}/props-v-state`}>
      <StyledHome>
        <h1>My boards</h1>
        <div className="boards">
          {Object.values(state.boards).map((item) => (
            <Board key={item.id} title={item.title} />
          ))}
        </div>
        <AddButton />
      </StyledHome>
    </Link>
  );
};

export default Home;
