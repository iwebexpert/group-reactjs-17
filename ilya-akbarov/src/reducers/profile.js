import {
  PROFILE_LOAD_ERROR,
  PROFILE_LOAD_SUCCESS,
  PROFILE_LOAD_REQUEST,
  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_ERROR,
} from '../actions/profile'

const initialState = {
  loading: false,
  error: false,
  entries: {
    name: 'unnamed'
  }
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      }
    case PROFILE_LOAD_SUCCESS:
      return {
        loading: false,
        entries: action.payload
      }
    case PROFILE_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      }
    case PROFILE_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      }
    case PROFILE_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        entries: action.payload
      }
    case PROFILE_UPDATE_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return { ...state }
  }
}
