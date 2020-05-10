import CONFIG from '../../config';
import xhr from '../xhr';

export const doGetTasksCall = (param) => {
    const options = {
        method: 'GET'
    }

    return xhr(`${CONFIG.API_URL}${CONFIG.TASKS}`, options).then((response) =>
        Promise.resolve(response)
    ).catch(e =>
        Promise.reject(
            e || { msg: 'Invalid Request' }
        )
    )
};

export const doAddTaskCall = (data) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(data)
    }

    return xhr(`${CONFIG.API_URL}${CONFIG.TASKS}`, options).then((response) =>
        Promise.resolve(response)
    ).catch(e =>
        Promise.reject(
            e || { msg: 'Invalid Request' }
        )
    )
};


