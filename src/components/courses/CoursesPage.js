import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCourse } from '../../redux/actions/courseAction';
import { loadAuthor } from '../../redux/actions/authorAction';

import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import CourseList from './CourseList';
import Spinner from '../common/Spinner';

class CoursesPage extends Component {
	state = {
		redirectToAddCoursePage: false,
	};

	componentDidMount() {
		this.props.courses.length == 0 && this.props.loadCourse();
		this.props.authors.length == 0 && this.props.loadAuthor();
	}

	handleChange(event) {
		const course = { ...this.state.course, title: event.target.value };
		this.setState({ course: course });
	}

	handleSubmit(event) {
		event.preventDefault();
		// this.props.createCourse(this.state.course)
		// 	.then((res) => {
		// 		console.log(res);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
	}

	render() {
		if (this.props.loading) return <Spinner />;

		return (
			<>
				{this.state.redirectToAddCoursePage && <Redirect to="./course"></Redirect>}
				<h2>Courses</h2>
				<button
					style={{ marginBottom: 20 }}
					className="btn btn-primary add-course"
					onClick={() => this.setState({ redirectToAddCoursePage: true })}
				>
					Add Course
				</button>

				<CourseList courses={this.props.courses}></CourseList>
			</>
		);
	}
}

CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	authors: PropTypes.array.isRequired,
	loadCourse: PropTypes.func.isRequired,
	loadAuthor: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
	return {
		courses:
			state.authors.length === 0
				? []
				: state.courses.map((course) => {
						return {
							...course,
							authorName: state.authors.find((item) => item.id == course.authorId).name,
						};
						// eslint-disable-next-line no-mixed-spaces-and-tabs
				  }),
		authors: state.authors,
		loading: state.apiCallsInProgress > 0,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadCourse: bindActionCreators(loadCourse, dispatch),
		loadAuthor: bindActionCreators(loadAuthor, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
