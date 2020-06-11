import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCourse } from '../../redux/actions/courseAction';
import { loadAuthor } from '../../redux/actions/authorAction';

import { bindActionCreators } from 'redux';

import CourseList from './CourseList';

class CoursesPage extends Component {
	state = {
		course: {
			title: '',
		},
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
		this.props.actions
			.createCourse(this.state.course)
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<>
				<h2>Courses</h2>
				<CourseList courses={this.props.courses}></CourseList>
			</>
		);
	}
}

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
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadCourse: bindActionCreators(loadCourse, dispatch),
		loadAuthor: bindActionCreators(loadAuthor, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
