import update from 'react-addons-update';

import {PROFILE_LOAD, PROFILE_UPDATE} from '../actions/profile';

const initialState = {
  loading: false,
  entries: {
    name: 'John Doe'
  },
};

export const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case PROFILE_LOAD:
      return { ...state };

    case PROFILE_UPDATE:
      return update(state, {
        entries: { $merge: action.payload },
      });

    default:
      return state;
  }
}
