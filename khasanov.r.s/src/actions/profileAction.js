export const PROFILE_LOAD = 'PROFILE_LOAD';
export const PROFILE_UPDATE = 'PROFILE_UPDATE';

export const profileLoadAction = () => {
    return {type: PROFILE_LOAD,}
};
export const profileUpdateAction = (profile) => {
    return {
        type: PROFILE_UPDATE,
        payload: profile,
    }
};