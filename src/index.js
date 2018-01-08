import React from 'react';
import ReactDOM from 'react-dom';
import './markdown-edit/css/style.css';
import './markdown-edit/css/github-style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux'
import {createStore} from 'redux'

import reducer from './reducers/Index'

let store  = createStore(reducer)
store.subscribe(() => {
  console.log(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
document.getElementById('root'));
registerServiceWorker();
