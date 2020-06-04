import React from 'react';
import { render } from 'react-dom';

function FirstPage() {
	return <h1>Hello World</h1>;
}

render(<FirstPage />, document.getElementById('app'));
