import { ProfileProps } from './types';
import { LOAD_PROFILE_REQUEST, LOAD_PROFILE_SUCCESS, LOAD_PROFILE_FAIL } from './actions';
import { Data } from '@types';

const initialState: ProfileProps = {
  loading: false,
  profile: {
    name: '',
    age: 0,
  },
  error: false,
};

export const profileReducer = (
  state = initialState,
  action: { type: string; payload?: Data.Profile },
) => {
  switch (action.type) {
    case LOAD_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };
    case LOAD_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
