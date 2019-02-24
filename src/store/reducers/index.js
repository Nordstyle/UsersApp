import { combineReducers } from 'redux';
import { usersOverflowData } from './stackoverflow';
import { usersGithubRepos } from './github';
import { getDataRow } from './datarow';

export const reducers = combineReducers({ usersOverflowData, usersGithubRepos, getDataRow });