import {
	CITY_LIST
} from '../actions/action-type';

const INITIAL_CITY_DETAILS = {
	cityList : []
}

export function manageCityData( state =INITIAL_CITY_DETAILS, action ) {

	switch(action.type) {
		case CITY_LIST:
		return {
			...state,
			cityList:action.list
		}

		default:
		return state;
	}
}