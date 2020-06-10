import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCourse } from '../../redux/actions/courseAction';

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
		this.props.createCourse(this.state.course);
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

const mapDispatchToProps = {
	createCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
