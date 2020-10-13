import {createAction} from 'redux-api-middleware';
export const PROFILES_LOAD = 'PROFILES_LOAD';


/*export const profilesLoadAction = () => ({
    type: PROFILES_LOAD,
});*/

export const PROFILES_LOAD_REQUEST = 'PROFILES_LOAD_REQUEST';
export const PROFILES_LOAD_SUCCESS = 'PROFILES_LOAD_SUCCESS';
export const PROFILES_LOAD_FAILURE = 'PROFILES_LOAD_FAILURE';

export const PROFILES_UPDATE_REQUEST = 'PROFILES_UPDATE_REQUEST';
export const PROFILES_UPDATE_SUCCESS = 'PROFILES_UPDATE_SUCCESS';
export const PROFILES_UPDATE_FAILURE = 'PROFILES_UPDATE_FAILURE';
/*
export const profilesLoadAction = () => createAction({
    endpoint: 'http://localhost:3000/profiles',
    method: 'GET',
    //body: JSON.stringify({})
    headers: {'Content-Type': 'application/json'},
    types: [
        PROFILES_LOAD_REQUEST,
        PROFILES_LOAD_SUCCESS,
        PROFILES_LOAD_FAILURE,
    ],
});*/

export const profilesLoadRequestAction = () =>({
    type: PROFILES_LOAD_REQUEST,
});

export const profilesLoadSuccessAction = (data) =>({
    type: PROFILES_LOAD_SUCCESS,
    payload: data,
});

export const profilesLoadFailureAction = (error) =>({
    type: PROFILES_LOAD_FAILURE,
    payload: error,
});

export const profilesLoadAction = () => {
    return async (dispatch) => {
        try {
            dispatch(profilesLoadRequestAction());
            const result = await fetch('http://localhost:3000/profiles');
            dispatch(profilesLoadSuccessAction(await result.json()));
        } catch(error){
            dispatch(profilesLoadFailureAction(error));
        }
    }
};

export const profilesUpdateRequestAction = () =>({
    type: PROFILES_UPDATE_REQUEST,
});

export const profilesUpdateSuccessAction = (data) =>({
    type: PROFILES_UPDATE_SUCCESS,
    payload: data,
});

export const profilesUpdateFailureAction = (error) =>({
    type: PROFILES_UPDATE_FAILURE,
    payload: error,
});


export const profilesUpdateAction = (profile) => {
    return async (dispatch) => {
        try {
            dispatch(profilesUpdateRequestAction());
            const result = await fetch('http://localhost:3000/profiles/0',{
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: profile.name,
                    surname: profile.surname
                })
            });
            dispatch(profilesUpdateSuccessAction(await result.json()));
        } catch(error){
            dispatch(profilesUpdateFailureAction(error));
        }
    }
};