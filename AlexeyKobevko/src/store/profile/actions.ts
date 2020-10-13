import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Data, RootState } from '@types';

export const LOAD_PROFILE_REQUEST = 'LOAD_PROFILE_REQUEST';
export const LOAD_PROFILE_SUCCESS = 'LOAD_PROFILE_SUCCESS';
export const LOAD_PROFILE_FAIL = 'LOAD_PROFILE_FAIL';

export const loadProfileRequest: ActionCreator<Action> = () => ({ type: LOAD_PROFILE_REQUEST });
export const loadProfileSuccess: ActionCreator<Action> = (payload: Data.Profile) => ({
  type: LOAD_PROFILE_SUCCESS,
  payload,
});
export const loadProfileFail: ActionCreator<Action> = () => ({ type: LOAD_PROFILE_FAIL });

export const asyncLoadProfile = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async dispatch => {
  try {
    dispatch(loadProfileRequest());
    const result = await fetch('http://localhost:8000/profile');
    dispatch(loadProfileSuccess(await result.json()));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    dispatch(loadProfileFail());
  }
};
