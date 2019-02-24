import { FETCH_OVERFLOW_USERDATA, FETCHING_OVERFLOW_USERDATA, FETCH_GITHUB_REPOS, FETCHING_GITHUB_REPOS, GITHUB_ERROR, OVERFLOW_ERROR, ADD_CURRENT_RECORD } from './constants';
import { getStackoverflowHotPosts, getGithubRepos } from './../api';
  
export const fetchUserOverflowData = () => dispatch => {
  dispatch({ type: FETCHING_OVERFLOW_USERDATA });
  getStackoverflowHotPosts()
    .then(data => {
      if (!data || data.error) {
        return dispatch({ type: OVERFLOW_ERROR });
      }
      dispatch({ type: FETCH_OVERFLOW_USERDATA, payload: data })
    })
    .catch((e) => dispatch({ type: OVERFLOW_ERROR, payload: e }));
};

export const fetchGithubRepos = () => dispatch => {
  dispatch({ type: FETCHING_GITHUB_REPOS });
  getGithubRepos()
    .then(data => {
      if (!data || data.error) {
        return dispatch({ type: GITHUB_ERROR });
      }
      dispatch({ type: FETCH_GITHUB_REPOS, payload: data })
    })
    .catch((e) => dispatch({ type: GITHUB_ERROR, payload: e }));
};

export const addCurrentRecord = (data) => ({ type: ADD_CURRENT_RECORD, payload: data });