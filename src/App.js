import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ArtistSwitch from './components/routing/ArtistSwitch';
import ErrorBoundary from './components/error/ErrorBoundary';

class App extends Component {
	render() {
		return (
			<div className="app">
				<header className="app-header">
					<h1 className="app-title">Australia's Top Artists</h1>
					<div>Powered by</div>
					<img src={logo} className="app-logo" alt="logo" />
				</header>
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
			