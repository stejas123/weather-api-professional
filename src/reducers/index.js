import { combineReducers } from 'redux';

import { manageCityData } from './reducers-citydata';

const store = combineReducers( {
	manageCityData
});


export default store;