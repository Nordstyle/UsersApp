import { ADD_CURRENT_RECORD } from './../constants';

export const getDataRow = (state = {data: {}}, action) => {
  switch (action.type) {
    case ADD_CURRENT_RECORD: return ({ data: action.payload });
    default: return state;
  }
};