import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { usersOverflowData } from './reducers'

const reducers = combineReducers({ usersOverflowData });

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));