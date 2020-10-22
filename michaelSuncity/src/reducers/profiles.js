import update from 'react-addons-update';
import {
    PROFILES_LOAD,
    PROFILES_LOAD_REQUEST,
    PROFILES_LOAD_SUCCESS,
    PROFILES_LOAD_FAILURE,
    PROFILES_UPDATE_REQUEST,
    PROFILES_UPDATE_SUCCESS,
    PROFILES_UPDATE_FAILURE
} from '../actions/profiles';



const initialState = {
    loading: false,
    error: false,
    entries: [],
};

export const profilesReducer = (state = initialState, action) => {
    switch(action.type){
        case PROFILES_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
        };

        case PROFILES_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                entries: action.payload,
        };

        case PROFILES_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
        };
        
        case PROFILES_UPDATE_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
        };

        case PROFILES_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                entries: action.payload,
        };

        case PROFILES_UPDATE_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
        };

        default:
            return state;
    }
}