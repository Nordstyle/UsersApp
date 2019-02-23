import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { userData } from './reducers'

const reducers = combineReducers({ userData });

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));