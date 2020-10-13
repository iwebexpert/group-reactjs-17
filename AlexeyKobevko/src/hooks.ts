import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreator, bindActionCreators, Action } from 'redux';

export const useAction = <T extends ActionCreator<Action<string>>>(action: T): T => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(action, dispatch), [dispatch]);
};
