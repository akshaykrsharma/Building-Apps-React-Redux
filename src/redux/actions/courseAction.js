import { CREATE_COURSE, LOAD_COURSE_SUCCESS } from './actionTypes';
import * as courseApi from '../../api/courseApi';
export function createCourse(course) {
	return { type: CREATE_COURSE, payload: course };
}
export function loadCourseSuccess(course) {
	return { type: LOAD_COURSE_SUCCESS, payload: course };
}

// Thunk a function which returns another function, It's the work flow of thunk
export function loadCourse() {
	return (dispatch) => {
		courseApi
			.getCourses()
			.then((courses) => {
				dispatch(loadCourseSuccess(courses));
			})
			.catch((exp) => {
				throw exp;
			});
	};
}
