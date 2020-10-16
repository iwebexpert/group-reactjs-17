import update from 'react-addons-update';
import {PROFILE_LOAD_REQUEST,
    PROFILE_LOAD_SUCCESS,
    PROFILE_LOAD_FAILURE, 
    PROFILE_UPDATE_REQUEST, 
    PROFILE_UPDATE_SUCCESS, 
    PROFILE_UPDATE_FAILURE
} from '../actions/profiles';

const initialState = {
    loading: false,
    error: false,
    data: {},
};

export const profilesReducer = (state = initialState, action) => {
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
                data: action.payload,
            };
        case PROFILE_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case PROFILE_UPDATE_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case PROFILE_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case PROFILE_UPDATE_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
} 