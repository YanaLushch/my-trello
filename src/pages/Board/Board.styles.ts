import styled from 'styled-components';

export const StyledBoard = styled('div')`
  background: url('https://place-puppy.com/800x800');
  background-size: cover;
  object-fit: fill;
  height: 100vh;
  .title {
    color: '#ee82ee';
  }
  .list-block {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    @media (min-width: 700px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 945px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
