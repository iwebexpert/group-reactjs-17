import update from 'react-addons-update';

import {
  PROFILE_LOAD_REQUEST,
  PROFILE_LOAD_SUCCESS,
  PROFILE_LOAD_FAILURE,
  PROFILE_UPDATE,
} from '../actions/profile';

const initialState = {
  loading: false,
  error: false,
  entries: {
    name: 'John Doe'
  },
};

export const profileReducer = (state = initialState, action) => {
  console.log('АКТИОН!!!!!!!!!!!!!!!!!!!!!!!!!!!', action)
  switch(action.type) {
    case PROFILE_LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };

    case PROFILE_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        entries: action.payload,
      };

    case PROFILE_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case PROFILE_UPDATE:
      return update(state, {
        entries: { $merge: action.payload },
      });

    default:
      return state;
  }
}
