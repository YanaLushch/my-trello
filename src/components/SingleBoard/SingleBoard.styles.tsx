import styled from 'styled-components';

export const StyledBoard = styled('div')`
  .single-board {
    background-color: #db92b8;
    opacity: 0.5;
    width: 300px;
    height: 120px;
    border-radius: 5px;
    margin: 8px;
    position: relative;
    .action-buttons {
      position: absolute;
      right: 5px;
      display: flex;
      > button {
        cursor: pointer;
        margin-right: 5px;
      }
    }
    .board-title {
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
