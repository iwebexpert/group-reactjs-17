import update from 'react-addons-update';
import {PROFILES_LOAD} from '../actions/profiles';

import {profiles} from '../helpers/profilesData';

const initialState = {
    loading: false,
    entries: [],
};

export const profilesReducer = (state = initialState, action) => {
    switch(action.type){
        case PROFILES_LOAD:
            return {
                ...state,
                entries: profiles,
        };
        

        default:
            return state;
    }
}