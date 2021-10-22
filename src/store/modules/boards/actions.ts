/* eslint-disable no-console */
import { Dispatch } from 'redux';
import api from '../../../api/request';
import IBoard from '../../../common/interfaces/IBoard';
// import config from '../../../common/constants/api';

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
