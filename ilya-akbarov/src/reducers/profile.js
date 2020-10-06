import {PROFILE_UPDATE, PROFILE_LOAD} from '../actions/profile'
import update from 'react-addons-update'

const initialState = {
  loading: false,
  entries: {
    name: 'unnamed'
  }
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_LOAD:
      return { ...state }
    case PROFILE_UPDATE:
      return update(state, {
        entries: { $merge: action.payload }
      })
    default:
      return { ...state }
  }
}
