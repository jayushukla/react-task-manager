export const SET_FLIGHT_LOCATIONS = `SET_FLIGHT_LOCATIONS`;
export const SET_AVAILABLE_FLIGHTS = `SET_AVAILABLE_FLIGHTS`;
export const CLEAR_AVAILABLE_FLIGHTS = `CLEAR_AVAILABLE_FLIGHTS`;
export const FETCHING_AVAILABLE_FLIGHTS = `FETCHING_AVAILABLE_FLIGHTS`;
export const FETCHED_AVAILABLE_FLIGHTS = `FETCHED_AVAILABLE_FLIGHTS`;
export const FETCH_FAIL = `FETCH_FAIL`;
export const CLEAR_ERROR = `CLEAR_ERROR`;


const initialState = {
    loading: false,
    flights: [],
    hasError: false,
    errorMessage: '',
    flightLocations: []
}

export default function(state = initialState, {type, payload} ) {
    switch(type) {
        case CLEAR_AVAILABLE_FLIGHTS:
            return {
                ...state,
                flights: initialState.flights
            };

        case FETCHING_AVAILABLE_FLIGHTS:
            return {
                ...state,
                loading: true,
            };

        case FETCHED_AVAILABLE_FLIGHTS:
            return {
                ...state,
                loading: false,
            };

        case SET_AVAILABLE_FLIGHTS:
            return {
                ...state,
                flights: payload,
            };
        
        case SET_FLIGHT_LOCATIONS:
            return {
                ...state,
                flightLocations: payload,
            };

        case FETCH_FAIL:
            return {
                ...state,
                loading: false,
                hasError: true,
                errorMessage: payload,
            };

        case CLEAR_ERROR:
            return {
                ...state,
                loading: false,
                hasError: false,
                errorMessage: '',
            };

        default:
            return state;
    }
}