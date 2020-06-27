import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadCourse, saveCourse } from '../../redux/actions/courseAction';
import { loadAuthor } from '../../redux/actions/authorAction';
import PropTypes from 'prop-types';
import CourseForm from './CourseForm';
import { newCourse } from '../../../tools/mockData';
import Spinner from '../common/Spinner';
import { toast } from 'react-toastify';

function ManageCoursePage({ courses, authors, loadAuthor, loadCourse, saveCourse, history, ...props }) {
	const [course, setCourse] = useState({ ...props.course });
	const [errors, setErrors] = useState({});
	const [saving, setSaving] = useState(false);

	useEffect(() => {
		if (courses.length === 0) {
			loadCourse();
		} else {
			setCourse({ ...props.course });
		}

		if (authors.length === 0) {
			loadAuthor();
		}
	}, [props.course]);

	function handleChange(event) {
		const { name, value } = event.target;
		setCourse((prevCourse) => ({
			...prevCourse,
			[name]: name === 'authorId' ? parseInt(value, 10) : value,
		}));
	}

	// function handleSave(event) {
	// 	event.preventDefault();
	// 	saveCourse(course).then(() => {
	// 		history.push('/courses');
	// 	});
	// }

	function handleSave(event) {
		event.preventDefault();
		setSaving(true);
		const saveIt = saveCourse(course);
		saveIt
			.then(() => {
				toast.success('Course saved.');
				history.push('/courses');
			})
			.catch((error) => {
				setSaving(false);
				setErrors({ onSave: error.message });
			});
	}

	if (courses.length == 0 && authors.length == 0) {
		return <Spinner />;
	}

	return (
		<CourseForm
			saving={saving}
			course={course}
			errors={errors}
			authors={authors}
			onChange={handleChange}
			onSave={handleSave}
		/>
	);
}

ManageCoursePage.propTypes = {
	course: PropTypes.object.isRequired,
	authors: PropTypes.array.isRequired,
	courses: PropTypes.array.isRequired,
	loadCourse: PropTypes.func.isRequired,
	loadAuthor: PropTypes.func.isRequired,
	saveCourse: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
};

export function getCourseBySlug(courses, slug) {
	return courses.find((course) => course.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
	const slug = ownProps.match.params.slug;
	const course = slug && state.courses.length > 0 ? getCourseBySlug(state.courses, slug) : newCourse;
	return {
		course,
		courses: state.courses,
		authors: state.authors,
	};
}

const mapDispatchToProps = {
	loadCourse,
	loadAuthor,
	saveCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
