import { combineReducers } from 'redux';
import { usersOverflowData } from './stackoverflow';
import { usersGithubRepos } from './github';
import { dataRow } from './datarow';

export const reducers = combineReducers({ usersOverflowData, usersGithubRepos, dataRow });