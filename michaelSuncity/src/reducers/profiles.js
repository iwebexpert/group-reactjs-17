import update from 'react-addons-update';
import {
    PROFILES_LOAD,
    PROFILES_LOAD_REQUEST,
    PROFILES_LOAD_SUCCESS,
    PROFILES_LOAD_FAILURE
} from '../actions/profiles';

//import {profiles} from '../helpers/profilesData';

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
        

        default:
            return state;
    }
}