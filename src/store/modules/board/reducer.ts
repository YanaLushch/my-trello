const initialState = {};

const reducer = (state = initialState, action: { type: string; payload?: string[] }): unknown => {
  switch (action.type) {
    default: {
      return { ...state, ...action.payload };
    }
  }
};

export default reducer;
