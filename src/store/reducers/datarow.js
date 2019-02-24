import { ADD_CURRENT_RECORD } from './../constants';

export const dataRow = (state = {}, action) => {
  switch (action.type) {
    case ADD_CURRENT_RECORD: return action.payload;
    default: return state;
  }
};