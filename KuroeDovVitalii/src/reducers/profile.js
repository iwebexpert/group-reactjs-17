import { profile } from "../helpers/profileData"
import { users } from "../helpers/usersData"

import {
    PROFILE_LOAD,
    PROFILE_CHANGE_NAME,
    USERS_LOAD,
} from "../actions/profile"

const initialState = {
    profile: {},
    users: [],
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_LOAD:
            return { ...state, users }

        case PROFILE_LOAD:
            return { ...state, profile }

        case PROFILE_CHANGE_NAME:
            let firstName =
                action.payload.firstName === undefined
                    ? state.profile.firstName
                    : action.payload.firstName
            let lastName =
                action.payload.lastName === undefined
                    ? state.profile.lastName
                    : action.payload.lastName

            return {
                ...state,
                profile: {
                    ...state.profile,
                    firstName: firstName,
                    lastName: lastName,
                },
            }
        default:
            return state
    }
}
