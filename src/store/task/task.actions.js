import {
    SET_USER_SESSION,
    IS_LOGIN_INPROGRESS,
    NAVIGATE_TO
} from './auth.reducers';
import { doLoginCall } from './auth.services';
import { toastr } from 'react-redux-toastr'
import { navigate } from 'hookrouter';
import AddTask from './actions/addTask';

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
export const addTask = (param) => (dispatch) => {
    dispatch(AddTask(param))
    doAddTaskCall(param).then((authRes) => {
        dispatch(_isLoginInprogress(false))
        dispatch(_setUserSession(authRes))
    }).catch((e) => {
        toastr.error('Auth Error', e && e._error && e._error.msg || 'Invalid Request')
        dispatch(_isLoginInprogress(false))
    })
};
