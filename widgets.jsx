import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Weather from './frontend/weather';

class App extends React.Component {
	render () {
		return (
			<div>
			<Clock/>
			<Weather/>
			</div>
		);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<App/>, root);
});
