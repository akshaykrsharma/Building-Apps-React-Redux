import { BEGIN_API_CALL } from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
	// type.substring(type.length - 8) === '_SUCCESS';
	return type.includes('_SUCCESS');
}

export default function apiCallStatusReducer(state = initialState.apiCallsInProgress, action) {
	if (action.type == BEGIN_API_CALL) {
		return state + 1;
	} else if (actionTypeEndsInSuccess(action.type)) {
		return state - 1;
	} else {
		return state;
	}
}
