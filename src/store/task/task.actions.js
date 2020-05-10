
import { GET_TASKS, IS_LOADING, NAVIGATE_TO } from './task.reducers';
import { doGetTasksCall } from './task.services';
import { toastr } from 'react-redux-toastr'
import { navigate } from 'hookrouter';

export const _isLoadingInProgress = (isInprogress = false) => ({
    type: IS_LOADING,
    payload: isInprogress
});

export const _setTasks = (tasks) => ({
    type: GET_TASKS,
    payload: tasks
})

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
// export const addTask = (param) => (dispatch) => {
//     dispatch(AddTask(param))
//     doAddTaskCall(param).then((authRes) => {
//         // dispatch(_isLoginInprogress(false))
//         // dispatch(_setUserSession(authRes))
//     }).catch((e) => {
//         toastr.error('Auth Error', e && e._error && e._error.msg || 'Invalid Request')
//         dispatch(_isLoginInprogress(false))
//     })
// };

export const getAllTasks = (param) => (dispatch) => {
    dispatch(_isLoadingInProgress(true));
    doGetTasksCall(param).then((response) => {
        console.log(response);
        dispatch(_isLoadingInProgress(false));
        dispatch(_setTasks(response));
    }).catch((e) => {
        dispatch(_isLoadingInProgress(false));
        toastr.error('Something went wrong');
    });
};
