import { Dispatch } from 'redux';
import api from '../../../api/request';
// import IList from '../../../common/interfaces/IList';
import ISingleBoard from '../../../common/interfaces/ISingleBoard';

export const getBoard =
  (boardId: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const res = await api.get<ISingleBoard>(`/board/${boardId}`);
      dispatch({ type: 'UPDATE_BOARDS', payload: res.data });
    } catch (e) {
      console.log(e);
      dispatch({ type: 'ERROR_ACTION_TYPE' });
    }
  };
