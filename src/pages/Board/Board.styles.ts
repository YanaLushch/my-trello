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
    display: flex;
    overflow-x: auto;
    &::-webkit-scrollbar {
      -webkit-appearance: none;
    }
    &::-webkit-scrollbar:horizontal {
      height: 11px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      border: 2px solid white;
      background-color: rgba(0, 0, 0, 0.5);
    }
    &::-webkit-scrollbar-track {
      background-color: #fff;
      border-radius: 8px;
    }
  }
`;
