/* eslint-disable no-console */
import { Dispatch } from 'redux';
import axios from 'axios';
import api from '../../../api/request';
import IBoard from '../../../common/interfaces/IBoard';
import { api as apiUrl } from '../../../common/constants';

export const getBoards =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const res = await api.get<{ boards: IBoard[] }>('/board');
      console.log('res', res);
      await dispatch({ type: 'UPDATE_BOARDS', payload: res.data.boards });
    } catch (e) {
      console.log(e);
      dispatch({ type: 'ERROR_ACTION_TYPE' });
    }
  };

export const createBoard =
  (inputValue: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    const resPost = await axios.post(
      `${apiUrl.baseURL}/board`,
      {
        title: inputValue,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 123',
        },
      }
    );
    if (resPost.data.result === 'Created') {
      const res = await api.get<{ boards: IBoard[] }>('/board');
      await dispatch({ type: 'CREATE_BOARD', payload: res.data.boards });
    }
  };

export const removeBoard =
  (boardId: number) =>
  async (dispatch: Dispatch): Promise<void> => {
    const resPost = await axios.delete(`${apiUrl.baseURL}/board/${boardId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
    });
    if (resPost.data.result === 'Deleted') {
      const res = await api.get<{ boards: IBoard[] }>('/board');
      await dispatch({ type: 'CREATE_BOARD', payload: res.data.boards });
    }
  };

export const editBoard =
  (boardId: number, title: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    const resPost = await axios.put(
      `${apiUrl.baseURL}/board/${boardId}`,
      {
        title,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 123',
        },
      }
    );
    if (resPost.data.result === 'Updated') {
      const res = await api.get<{ boards: IBoard[] }>('/board');
      await dispatch({ type: 'CREATE_BOARD', payload: res.data.boards });
    }
  };
