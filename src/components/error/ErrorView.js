import React, { Component } from 'react';

class ErrorView extends Component {
	render() {
		return (
			<div className="error-notification">
				<h1>An error has occurred.  Please try reloading.</h1>
			</div>
		);
	}
}

export default ErrorView;