import {
    SET_USER_SESSION,
    IS_LOGIN_INPROGRESS,
    NAVIGATE_TO
} from './auth.reducers';
import { doLoginCall } from './auth.services';
import { toastr } from 'react-redux-toastr'
import { navigate } from 'hookrouter';

/* Sync Action Creators */
export const _setUserSession = (authRes = null) => {
    console.log('Auth', authRes);
    localStorage.setItem('userData', JSON.stringify(authRes));
    return {
        type: SET_USER_SESSION,
        payload: authRes
    }
};

export const _isLoginInprogress = (isInprogress = false) => ({
    type: IS_LOGIN_INPROGRESS,
    payload: isInprogress
});

export const _doNavigate = (url = '/') => {
    console.log('Navigate to ', url);
    navigate(url, true);
    return {
        type: NAVIGATE_TO,
        payload: url
    }
};

export const doNavigate = (param) => (dispatch) => {
    dispatch(_doNavigate(param));
};

/* Async Action Creators */
export const doLogin = (param) => (dispatch) => {
    dispatch(_isLoginInprogress(true))
    doLoginCall(param).then((authRes) => {
        dispatch(_isLoginInprogress(false))
        dispatch(_setUserSession(authRes))
    }).catch((e) => {
        toastr.error('Auth Error', e && e._error && e._error.msg || 'Invalid Request')
        dispatch(_isLoginInprogress(false))
    })
};
