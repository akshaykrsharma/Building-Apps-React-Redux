import { CREATE_COURSE, LOAD_COURSE_SUCCESS } from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
	switch (action.type) {
		case CREATE_COURSE:
			return [...state, { ...action.payload }];

		case LOAD_COURSE_SUCCESS:
			return action.payload;

		default:
			return state;
	}
}
