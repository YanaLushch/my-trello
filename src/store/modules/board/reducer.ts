// import IList from '../../../common/interfaces/IList';
import ISingleBoard from '../../../common/interfaces/ISingleBoard';

interface State {
  currentBoard: ISingleBoard | null;
}

type Payload = ISingleBoard;

const initialState: State = {
  currentBoard: null,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const reducer = (state = initialState, action: { type: string; payload: Payload }): State => {
  switch (action.type) {
    default: {
      return { ...state, ...action.payload };
    }
    case 'UPDATE_BOARDS':
      return {
        ...state,
        currentBoard: action.payload,
      };
  }
};

export default reducer;
