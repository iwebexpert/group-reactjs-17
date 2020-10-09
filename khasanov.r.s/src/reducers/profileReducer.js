import {PROFILE_LOAD, PROFILE_UPDATE} from '../actions/profileAction';

import {profile} from '../helpers/profileData';
import update from "react-addons-update";

const initialState = {
    loading: false,
    data: profile,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_LOAD:
            return {
                ...state,
                data: profile,
            };
        case PROFILE_UPDATE:
            return update(state, {
                data: action.payload
            })
        default:
            return state;
    }
}