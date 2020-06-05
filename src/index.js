import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
function FunctionalComponent() {
	return <h1>Functional Component</h1>;
}

const ArrowFunction = (props) => <h3>Arrow Function</h3>;

const HooksFunction = function () {
	const [count, setCount] = useState(0);
	return (
		<div>
			<p>Hooks: Your count {count}</p>
			<button
				style={{ width: 100, height: 44 }}
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Click Me
			</button>
		</div>
	);
};

class ClassComponent extends Component {
	render() {
		return <h2>Class Component</h2>;
	}
}

render(
	<div>
		<FunctionalComponent />
		<ClassComponent />
		<ArrowFunction />
		<HooksFunction />
	</div>,
	document.getElementById('app')
);
