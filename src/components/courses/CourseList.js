import React from 'react';
const CourseList = ({ courses }) => (
	<table className="table">
		<tr>
			<th>Title</th>
			<th>Author</th>
			<th>Category</th>
		</tr>
		{courses.map((item) => (
			<tr key={item.title}>
				<td>{item.title}</td>
				<td>{item.authorName}</td>
				<td>{item.category}</td>
			</tr>
		))}
	</table>
);

export default CourseList;
