import {PROFILES_LOAD} from '../actions/profiles';

import {profile} from '../helpers/profilesData';

const initialState = {
    loading: false,
    entries: [],
};

export const profilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILES_LOAD:
            return {
                ...state,
                entries: profile,
            };

        default:
            return state;
    }
}