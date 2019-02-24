import { FETCH_OVERFLOW_USERDATA, FETCHING_OVERFLOW_USERDATA, OVERFLOW_ERROR } from './../constants';

export const usersOverflowData = (state = { isLoading: false, isError: false, data: [] }, action) => {
  switch (action.type) {
    case FETCH_OVERFLOW_USERDATA: return ({ isLoading: false, isError: false, data: action.payload });
    case FETCHING_OVERFLOW_USERDATA: return ({ isLoading: true, isError: false, data: [...state.data] });
    case OVERFLOW_ERROR: return ({ isLoading: false, isError: true, data: action.payload})
    default: return state;
  }
};