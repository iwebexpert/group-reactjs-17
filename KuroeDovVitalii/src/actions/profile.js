export const PROFILE_LOAD = 'PROFILE_LOAD'
export const PROFILE_CHANGE_NAME = 'PROFILE_CHANGE_NAME'

export const profileLoadAction = () => ({
    type: PROFILE_LOAD,
})

export const profileChangeNameAction = (name) => ({
    type: PROFILE_CHANGE_NAME,
    payload: name
})

