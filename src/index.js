import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './App';
import store from './reducers/index';

ReactDOM.render(
	<Provider store = {createStore(store)}>
  	<App />
  	</Provider>,
  document.getElementById('root')
);
