import { FETCH_OVERFLOW_USERDATA, FETCHING_OVERFLOW_USERDATA } from './../constants';

export const usersOverflowData = (state = { isLoading: false, data: [] }, action) => {
  switch (action.type) {
    case FETCH_OVERFLOW_USERDATA: return ({ isLoading: false, data: action.payload });
    case FETCHING_OVERFLOW_USERDATA: return ({ isLoading: true, data: [...state.data] });
    default: return state;
  }
};