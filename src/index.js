import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store'

import App from './components/App'

const target = document.querySelector('#root');

window.store = store;

render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter> 
  </Provider>,
  target
)