import { CREATE_COURSE_SUCCESS, UPDATE_COURSE_SUCCESS, LOAD_COURSE_SUCCESS } from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
	switch (action.type) {
		case CREATE_COURSE_SUCCESS:
			return [...state, { ...action.payload }];

		case UPDATE_COURSE_SUCCESS:
			return state.map((course) => {
				return course.id === action.payload.id ? action.payload : course;
			});

		case LOAD_COURSE_SUCCESS:
			return action.payload;

		default:
			return state;
	}
}
