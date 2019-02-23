import { FETCH_OVERFLOW_USERDATA, FETCHING_OVERFLOW_USERDATA } from './constants';
import { getStackoverflowHotPosts } from './../api';

export const fetchUserOverflowData = () => dispatch => {
  dispatch({ type: FETCHING_OVERFLOW_USERDATA });
  getStackoverflowHotPosts().then(data => {
    if (data.error) {
      return console.log('Error')
    }
    dispatch({ type: FETCH_OVERFLOW_USERDATA, payload: data })
  })
};