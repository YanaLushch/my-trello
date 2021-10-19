import { Dispatch } from 'redux';
import api from '../../../api/request';
// import config from '../../../common/constants/api';

export const getBoards =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const data = await api.get('/board');
      await dispatch({ type: 'UPDATE_BOARDS', payload: data });
    } catch (e) {
      console.log(e);
      dispatch({ type: 'ERROR_ACTION_TYPE' });
    }
  };