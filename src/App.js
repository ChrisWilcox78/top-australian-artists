import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import ArtistSummaryView from "./components/artistsummaryview/ArtistSummaryView";
// import ArtistDetails from "./components/artistdetails/ArtistDetails";
// import LastFmClient from './components/lastfmclient/LastFmClient';
import ArtistSwitch from './components/routing/ArtistSwitch';


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
					<ArtistSwitch />
				</div>
			</div>
		);
	}
}

export default App;
			