export const PROFILE_UPDATE_REQUEST = 'PROFILE_UPDATE_REQUEST'
export const PROFILE_UPDATE_SUCCESS = 'PROFILE_UPDATE_SUCCESS'
export const PROFILE_UPDATE_ERROR = 'PROFILE_UPDATE_ERROR'
export const PROFILE_LOAD_REQUEST = 'PROFILE_LOAD_REQUEST'
export const PROFILE_LOAD_SUCCESS = 'PROFILE_LOAD_SUCCESS'
export const PROFILE_LOAD_ERROR = 'PROFILE_LOAD_ERROR'

const profileUpdateRequestAction = () => ({
  type: PROFILE_UPDATE_REQUEST
})

const profileUpdateSuccessAction = (profile) => ({
  type: PROFILE_UPDATE_SUCCESS,
  payload: profile,
})

const profileUpdateErrorAction = (error) => ({
  type: PROFILE_UPDATE_ERROR,
  payload: error
})

export const profileUpdateAction = (profile) => async(dispatch) => {
  try {
    dispatch(profileUpdateRequestAction())
    const response = await fetch('http://localhost:3500/profile', {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ name: profile.name })
    })
    dispatch(profileUpdateSuccessAction(await response.json()))
  } catch (err) {
    dispatch(profileUpdateErrorAction(err))
  }
}

const profileLoadRequestAction = () => ({
  type: PROFILE_LOAD_REQUEST,
})

const profileLoadSuccessAction = (profile) => ({
  type: PROFILE_LOAD_SUCCESS,
  payload: profile,
})

const profileLoadErrorAction = (error) => ({
  type: PROFILE_LOAD_ERROR,
  payload: error,
})

export const profileLoadAction = () => async(dispatch) => {
  try {
    dispatch(profileLoadRequestAction())
    const request = await fetch('http://localhost:3500/profile')
    const profile = await request.json()
    dispatch(profileLoadSuccessAction(profile))
  } catch (err) {
    dispatch(profileLoadErrorAction(err))
  }
}
