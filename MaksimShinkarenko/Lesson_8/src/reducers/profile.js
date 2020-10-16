import {PROFILE_LOAD, PROFILE_LOAD_SUCCESS, PROFILE_LOAD_REQUEST, PROFILE_LOAD_FAILURE} from 'actions/profile';

import {profile} from '../helpers/profileData';

const initialState = {
    loading: false,
    error: false,
    entries: [],
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
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
        /*case PROFILE_LOAD:
            return {
                ...state,
                entries: profile,
            };*/
        default:
            {
                return state;
            }
    }
}