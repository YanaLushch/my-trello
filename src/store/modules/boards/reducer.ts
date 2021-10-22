// src/store/modules/boards/reducer.ts
import IBoard from '../../../common/interfaces/IBoard';

interface State {
  boards: IBoard[];
}

type Payload = IBoard[];

const initialState: State = {
  boards: [],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state = initialState, action: { type: string; payload: Payload }): State => {
  switch (action.type) {
    default: {
      return { ...state, ...action.payload };
    }
    case 'UPDATE_BOARDS':
      return {
        ...state,
        boards: action.payload,
      };
  }
};

export default reducer;
