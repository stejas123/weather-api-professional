import axios from 'axios';

import {
	API_KEY,
	CITY_LIST
} from './action-type';


function dispatchCityList(list){
	return {
		type: CITY_LIST,
		list
	}
}

export function listAllCities() {
	return dispatch => {
		return axios.get(`http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&${API_KEY}`)
		.then(resObj => {
				console.log(resObj);
				dispatch => {
				dispatchCityList(resObj.data.list);
				return resObj;
			}
		})
		.catch( error => {
			return error;
		});
	}
}