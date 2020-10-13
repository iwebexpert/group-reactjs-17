import { createAction } from 'redux-api-middleware'

export const PROFILE_LOAD = 'PROFILE_LOAD'
export const PROFILE_UPDATE = 'PROFILE_UPDATE'
export const PROFILE_UPDATE_REQUEST = 'PROFILE_UPDATE_REQUEST'
export const PROFILE_UPDATE_SUCCESS = 'PROFILE_UPDATE_SUCCESS'
export const PROFILE_UPDATE_ERROR = 'PROFILE_UPDATE_ERROR'
export const PROFILE_LOAD_REQUEST = 'PROFILE_LOAD_REQUEST'
export const PROFILE_LOAD_SUCCESS = 'PROFILE_LOAD_SUCCESS'
export const PROFILE_LOAD_ERROR = 'PROFILE_LOAD_ERROR'

export const profileUpdateAction = (profile) => createAction({
  endpoint: 'http://localhost:3500/profile',
  method: 'POST',
  headers: { 'Content-type': 'application/json' },
  body: JSON.stringify({ name: profile.name }),
  types: [
    PROFILE_UPDATE_REQUEST,
    PROFILE_UPDATE_SUCCESS,
    PROFILE_UPDATE_ERROR,
  ]
})

export const profileLoadAction = () => createAction({
  endpoint: 'http://localhost:3500/profile',
  method: 'GET',
  headers: { 'Content-type': 'application/json' },
  types: [
    PROFILE_LOAD_REQUEST,
    PROFILE_LOAD_SUCCESS,
    PROFILE_LOAD_ERROR
  ]
})
