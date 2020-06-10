import courses from './courseReducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
	courses: courses,
});

export default rootReducer;
