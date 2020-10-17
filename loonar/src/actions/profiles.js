export const PROFILE_LOAD_REQUEST = 'PROFILE_LOAD_REQUEST';
export const PROFILE_LOAD_SUCCESS = 'PROFILE_LOAD_SUCCESS';
export const PROFILE_LOAD_FAILURE = 'PROFILE_LOAD_FAILURE';

export const PROFILE_UPDATE_REQUEST = 'PROFILE_UPDATE_REQUEST';
export const PROFILE_UPDATE_SUCCESS = 'PROFILE_UPDATE_SUCCESS';
export const PROFILE_UPDATE_FAILURE = 'PROFILE_UPDATE_FAILURE';

export const profileLoadRequestAction = () => ({
    type: PROFILE_LOAD_REQUEST
});
export const profileLoadSuccessAction = (data) => ({
    type: PROFILE_LOAD_SUCCESS,
    payload: data,
});
export const profileLoadFailureAction = (error) => ({
    type: PROFILE_LOAD_FAILURE,
    payload: error,
});
export const profileLoadAction = () => {
    return async (dispatch) => {
        try {
            dispatch(profileLoadRequestAction());
            const result = await fetch('http://localhost:3000/profile');
            dispatch(profileLoadSuccessAction(await result.json()))
        } catch (error) {
            dispatch(profileLoadFailureAction(error));
        }
    }
};
export const profileUpdateRequestAction = () => ({
    type: PROFILE_UPDATE_REQUEST
});
export const profileUpdateSuccessAction = (data) => ({
    type: PROFILE_UPDATE_SUCCESS,
    payload: data,
});
export const profileUpdateFailureAction = (error) => ({
    type: PROFILE_UPDATE_FAILURE,
    payload: error,
});
export const profileUpdateAction = (profile) => {
    return async (dispatch) => {
        try {
            dispatch(profileUpdateRequestAction());
            const result = await fetch('http://localhost:3000/profile', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(profile)
            });
            dispatch(profileUpdateSuccessAction(await result.json()))
        } catch (error) {
            dispatch(profileUpdateFailureAction(error));
        }
    }
};