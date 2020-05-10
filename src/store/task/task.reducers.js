export const ADD_TASK = 'ADD_TASK';
export const MARK_AS_COMPLETED = 'MARK_AS_COMPLETED';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const GET_TASKS = 'GET_TASKS';
export const IS_LOADING = 'IS_LOADING';
export const NAVIGATE_TO = 'NAVIGATE';

const initialState = {
  isLoading: false,
  tasks: [{
    name: 'First task',
    isCompleted: false,
  }]
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        user: initialState.user
      };

    case MARK_AS_COMPLETED:
      return {
        ...state,
        user: payload,
      };

    case DELETE_TASK:
      return {
        ...state,
        url: payload
      };

    case UPDATE_TASK:
      return {
        ...state,
        loading: false,
        hasError: true,
        errorMessage: payload,
      };

    case GET_TASKS: 
      return {
        ...state,
        tasks: payload
      }
     
    case IS_LOADING: {
      return {
        ...state,
        loading: payload
      }
    }
    case NAVIGATE_TO: {
      return {
        ...state,
        url: payload
      }
    }  
    default:
      return state;
  }
}