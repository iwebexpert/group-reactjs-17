import update from 'react-addons-update'

import { profile } from '../helpers/profileData'

import { PROFILE_LOAD, PROFILE_CHANGE_NAME } from '../actions/profile'

const initialState = {
    profile: []
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case PROFILE_LOAD:
            return {
                ...state,
                profile: profile
            }
        case PROFILE_CHANGE_NAME:
            return update(state, {
            })
        default: 
            return state
    } 
}  
