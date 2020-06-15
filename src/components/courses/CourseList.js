import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const CourseList = ({ courses }) => (
	<table className="table">
		<tr>
			<th />
			<th>Title</th>
			<th>Author</th>
			<th>Category</th>
		</tr>
		{courses.map((item) => (
			<tr key={item.title}>
				<td>
					<a href={'http://pluralsight.com/courses/' + item.slug}>Watch</a>
				</td>
				<td>
					<Link to={'course/' + item.slug}>{item.title}</Link>
				</td>
				<td>{item.authorName}</td>
				<td>{item.category}</td>
			</tr>
		))}
	</table>
);

CourseList.propTypes = {
	courses: PropTypes.array.isRequired,
};

export default CourseList;
