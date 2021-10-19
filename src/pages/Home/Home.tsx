/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AddButton from '../../components/AddButton/AddButton';
// import Board from '../../components/Board/Board';
import { StyledHome } from './Home.styles';

// type propsType = {
//   boards: [];
// };
type stateType = {};

// type HomeProps = {
//   title: string;
// };

// const state = {
//   boards: [
//     { id: 1, title: 'покупки' },
//     { id: 2, title: 'подготовка к свадьбе' },
//     { id: 3, title: 'разработка интернет-магазина' },
//     { id: 4, title: 'курс по продвижению в соцсетях' },
//   ],
// };

const Home: FC<stateType> = (props) => (
  <StyledHome>
    <h1>My boards</h1>
    {console.log(props)}
    {/* <div className="boards">
      {Object.values(state.boards).map((item) => (
        <Link to={`/board/${item.id}`}>
          <Board key={item.id} title={item.title} />
        </Link>
      ))}
    </div> */}
    <AddButton />
  </StyledHome>
);

const mapStateToProps = (state): any => ({
  ...state.boards,
});

export default connect(mapStateToProps, {})(Home);
