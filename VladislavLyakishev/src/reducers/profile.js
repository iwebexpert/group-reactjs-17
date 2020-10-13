import {
    PROFILE_LOAD_REQUEST,
    PROFILE_LOAD_SUCCESS,
    PROFILE_LOAD_FAILURE
} from '../actions/profile'

const initialState = {
        name: '',
        loading: false,
        error: false
}

export const profileReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case PROFILE_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case PROFILE_LOAD_SUCCESS:
            console.log(actions.payload.name)
            return {
                ...state,
                loading: false,
                name: actions.payload.name
            }
        case PROFILE_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            }

        default:
            return state
    }
}