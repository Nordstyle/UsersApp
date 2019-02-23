import { FETCH_USER_DATA } from './constants';

export const userData = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_DATA: return action.payload;
    default: return state;
  }
};