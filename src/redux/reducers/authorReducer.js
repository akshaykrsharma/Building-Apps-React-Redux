import { LOAD_AUTHOR_SUCCESS } from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.authors, action) {
	switch (action.type) {
		case LOAD_AUTHOR_SUCCESS:
			return action.payload;

		default:
			return state;
	}
}
