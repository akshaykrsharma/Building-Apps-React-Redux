import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as courseAction from '../../redux/actions/courseAction';
import { createCourse } from '../../redux/actions/courseAction';
import { bindActionCreators } from 'redux';

class CoursesPage extends Component {
	state = {
		course: {
			title: '',
		},
	};
	handleChange(event) {
		const course = { ...this.state.course, title: event.target.value };
		this.setState({ course: course });
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.actions(this.state.course);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<h2>Courses</h2>
				<h3>Add Course</h3>
				<input type="text" onChange={this.handleChange.bind(this)} value={this.state.course.title} />
				<input type="submit" />
				{this.props.courses.map((course) => (
					<div key={course.title}>{course.title}</div>
				))}
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		courses: state.courses,
	};
};

const mapDispatchToProps = (dispatch) => {
	// createCourse,
	return {
		actions: bindActionCreators(createCourse, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
