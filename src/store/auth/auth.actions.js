import {
    SET_USER_SESSION,
    CLEAR_USER_SESSION,
    IS_LOGIN_INPROGRESS,
 } from './auth.reducers';
import { doLoginCall } from './auth.services';
import { toastr } from 'react-redux-toastr'

/* Sync Action Creators */
export const _setUserSession = (authRes = null) => ({
    type: SET_USER_SESSION,
    payload: authRes
});
export const _isLoginInprogress = (isInprogress = false ) => ({
    type: IS_LOGIN_INPROGRESS,
    payload: isInprogress
})

export const clearAvailableFlights = () => ({type: CLEAR_USER_SESSION});

/* Async Action Creators */
export const doLogin = (param) => (dispatch) => {
    dispatch(_isLoginInprogress(true))
    doLoginCall(param).then((authRes) => {
        dispatch(_isLoginInprogress(false))
        dispatch(_setUserSession(authRes))
    }).catch((e)=>{
        toastr.error('Auth Error', e && e._error && e._error.msg || 'Invalid Request')
        dispatch(_isLoginInprogress(false))
    })
};
