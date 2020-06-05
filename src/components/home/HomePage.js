import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
	<div className="jumbotron">
		<h1>HomePage</h1>
		<p>Resposive Web apps</p>
		<Link to="about" className="btn btn-primary btn-lg">
			Go to About
		</Link>
	</div>
);
export default HomePage;
