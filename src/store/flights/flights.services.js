import CONFIG from '../../config';
import xhr from '../xhr';

export const getAvailableFlights = (param) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(param)
    }

    return xhr(`${CONFIG.FLIGHT_API}/availability`, options)
        .catch(e => {
            Promise.reject({
                _error: e.response.error || 'Invalid Request'
            })
        })
        .then((response) => 
                response.ok ? response.json() : Promise.reject(response) )
};

export const getFlightLocations = (search) => {
    const options = {
        method: 'GET'
    }
    
    const url = `${CONFIG.FLIGHT_API}/airport${search? '?search='+search: ''}` //`https://jsonplaceholder.typicode.com/todos/1`
    
    return xhr(url, options)
        .catch(e => {
            Promise.reject({
                _error: e.response.error || 'Invalid Request'
            })
        })
        .then((response) => response)
};
