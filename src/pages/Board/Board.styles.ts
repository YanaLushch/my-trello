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
    align-items: flex-start;
    height: calc(100vh - 32px);
    &::-webkit-scrollbar {
      height: 12px;
      width: 12px;
    }
    &::-webkit-scrollbar-track-piece {
      background: #00000026;
      background: #091e4214;
    }
    &::-webkit-scrollbar:horizontal {
      height: 12px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: rgba(255, 255, 255, 0.5);
    }
    &::-webkit-scrollbar-track {
      border-radius: 8px;
    }
  }
`;
