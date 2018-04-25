import React, { Component } from 'react';
import ErrorView from './ErrorView';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inError: false
		};
	}

	componentDidCatch(error, errorInfo) {
		this.errorHandler(error);
	}

	render() {
		if (this.state.inError) {
			return <ErrorView />;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;