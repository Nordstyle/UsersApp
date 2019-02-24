import { FETCH_GITHUB_REPOS, FETCHING_GITHUB_REPOS, GITHUB_ERROR } from './../constants';

export const usersGithubRepos = (state = { isLoading: false, isError: false, data: [] }, action) => {
  switch (action.type) {
    case FETCHING_GITHUB_REPOS: return ({ isLoading: true, isError: false, data: [] });
    case FETCH_GITHUB_REPOS: return ({ isLoading: false, isError: false, data: action.payload });
    case GITHUB_ERROR: return ({ isLoading: false, isError: true, data: action.payload })
    default: return state;
  }
};