import { LOAD_AUTHOR_SUCCESS } from './actionTypes';
import * as authorApi from '../../api/authorApi';

export function loadAuthorSuccess(course) {
	return { type: LOAD_AUTHOR_SUCCESS, payload: course };
}

// Thunk a function which returns another function, It's the work flow of thunk
export function loadAuthor() {
	return (dispatch) => {
		authorApi
			.getAuthors()
			.then((author) => {
				dispatch(loadAuthorSuccess(author));
			})
			.catch((exp) => {
				throw exp;
			});
	};
}
