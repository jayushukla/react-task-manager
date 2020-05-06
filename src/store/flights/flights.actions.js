import {
    SET_FLIGHT_LOCATIONS,
    SET_AVAILABLE_FLIGHTS,
    CLEAR_AVAILABLE_FLIGHTS,
    FETCHING_AVAILABLE_FLIGHTS,
    FETCHED_AVAILABLE_FLIGHTS,
    FETCH_FAIL,
    CLEAR_ERROR,
 } from './flights.reducers';
import { getAvailableFlights, getFlightLocations} from './flights.services';

/* Sync Action Creators */
export const fetchingAvailableFlights = () => ({type: FETCHING_AVAILABLE_FLIGHTS});
export const fetchedAvailableFlights = () => ({type: FETCHED_AVAILABLE_FLIGHTS});

export const setFlightLocations = (flightLocations = []) => ({
    type: SET_FLIGHT_LOCATIONS,
    payload: flightLocations
});

export const setAvailableFlights = (availableFlights = []) => ({
    type: SET_AVAILABLE_FLIGHTS,
    payload: availableFlights
});
export const fetchFail = (errorMessage = 'Invalid Request') => ({type: FETCH_FAIL, payload: errorMessage});
export const clearError = () => ({type: CLEAR_ERROR});

export const clearAvailableFlights = () => ({type: CLEAR_AVAILABLE_FLIGHTS});

/* Async Action Creators */
export const loadAvailableFlights = (param) => (dispatch) => {
    dispatch(fetchingAvailableFlights())
    getAvailableFlights(param)
    .then( (flights) => {
        dispatch(fetchedAvailableFlights())
        dispatch(setAvailableFlights(flights))
    }).catch((e)=>{
        dispatch(fetchFail(e._error))
    })
};

export const loadFlightLocations = (search = '') => (dispatch) => {
    getFlightLocations(search)
    .then( (flightLocations) => {
        console.log(flightLocations);
        dispatch(setFlightLocations(flightLocations))
    }).catch((e)=>{
        dispatch(fetchFail(e._error))
    })
};
