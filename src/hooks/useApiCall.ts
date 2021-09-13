/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react';

type ApiFunction = () => Promise<any>;
type ReturnValue = {
  state: any;
  reload: () => void;
};

export const useApiCall = (apiCall: ApiFunction): ReturnValue => {
  const [state, setState] = useState(null);

  const loadState = (): void => {
    setState(null);
    apiCall().then((res) => setState(res));
  };

  useEffect(() => loadState(), []);

  return { state, reload: loadState };
};
