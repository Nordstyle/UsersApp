import { combineReducers } from 'redux';
import { usersOverflowData } from './stackoverflow';
import { usersGithubRepos } from './github';

export const reducers = combineReducers({ usersOverflowData, usersGithubRepos });