import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ArtistSummaryView from "./components/artistsummaryview/ArtistSummaryView";
import ArtistDetailsView from "./components/artistdetailsview/ArtistDetailsView";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			topArtists: null,
			artistDetails: null
		};
	}
	
	_updateTopArtists(data) {
		this.setState({
			topArtists: data.topartists.artist
		});
	}
	
	_updateArtistDetails(data) {
		this.setState({
			artistDetails: {
				mpid: data.artist.mpid,
				name: data.artist.name,
				imageUrl: data.artist.image[2]["#text"],
				bio: {__html: data.artist.bio.content}
			}
		});
	}
	
	_onSummaryItemClick(mbid, e) {
		e.preventDefault();
		fetch(
			"http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=24c990f786fd892d7c74a62505a795c8&format=json&mbid=" +
			mbid
		)
		.then(results => results.json())
		.then(data => this._updateArtistDetails(data));
	}
	
	_onDetailsBackClick(e) {
		e.preventDefault();
		this.setState({
			artistDetails: null
		});
	}
	
	componentDidMount() {
		fetch(
			"http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=australia&limit=10&api_key=24c990f786fd892d7c74a62505a795c8&format=json"
		)
		.then(results => results.json())
		.then(data => this._updateTopArtists(data));
	}
	
	_renderArtistSummaries(topArtists) {
		if (topArtists) {
			return topArtists.map((artist, index) => (
				<ArtistSummaryView
				key={artist.mbid}
				position={index + 1}
				artistName={artist.name}
				artistImageUrl={artist.image[4]["#text"]}
				onClick={e => this._onSummaryItemClick(artist.mbid, e)}
				/>
			));
		} else {
			return "Retrieving top artists...";
		}
	}
	
	_renderArtistDetails(artistDetails) {
		return <ArtistDetailsView 
		key={artistDetails.mpid}
		artistName={artistDetails.name}
		artistImageUrl={artistDetails.imageUrl}
		artistBio={artistDetails.bio}
		onBackClick={(e) => this._onDetailsBackClick(e)}
		/>
	}

	_renderContent() {
		if (this.state.artistDetails) {
			return this._renderArtistDetails(this.state.artistDetails);
		} else {
			return this._renderArtistSummaries(this.state.topArtists);
		}
	}
	
	render() {
		return (
			<div className="app">
				<header className="app-header">
					<h1 className="app-title">Australia's Top Artists</h1>
					<div>Powered by</div>
					<img src={logo} className="app-logo" alt="logo" />
				</header>
				<div className="app-content">
					{this._renderContent()}
				</div>
			</div>
		);
	}
}

export default App;
			