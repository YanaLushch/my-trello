const initialState = {};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state = initialState, action: { type: string; payload?: any }): any => {
  switch (action.type) {
    default: {
      return { ...state, ...action.payload };
    }
  }
};

export default reducer;
