import courses from './courseReducer';
import authors from './authorReducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
	courses: courses,
	authors: authors,
});

export default rootReducer;
