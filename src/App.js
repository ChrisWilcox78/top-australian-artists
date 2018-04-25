import React, { Component } from "react";
import "./App.css";
import ArtistSwitch from './components/routing/ArtistSwitch';
import ErrorBoundary from './components/error/ErrorBoundary';
import Header from './components/header/Header';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Header />
				<div className="app-content">
				<ErrorBoundary>
					<ArtistSwitch />
				</ErrorBoundary>
				</div>
			</div>
		);
	}
}

export default App;
			