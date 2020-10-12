import {createAction} from 'redux-api-middleware';

export const PROFILES_LOAD_REQUEST = 'PROFILES_LOAD_REQUEST';
export const PROFILES_LOAD_SUCCESS = 'PROFILES_LOAD_SUCCESS';
export const PROFILES_LOAD_FAILURE = 'PROFILES_LOAD_FAILURE';

export const profilesLoadAction = () => createAction({
    endpoint: 'http://localhost:3000/profile',
    method: 'GET',
    //body: JSON.stringify({})
    headers: { 'Content-Type': 'application/json' },
    types: [
        PROFILES_LOAD_REQUEST,
        PROFILES_LOAD_SUCCESS,
        PROFILES_LOAD_FAILURE,
    ],
});