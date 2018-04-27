import React, { Component } from "react";
import { Link } from 'react-router-dom';
import * as LastFm  from '../lastfmclient/LastFmClient';
import ArtistSummary from '../artistsummary/ArtistSummary';
import ErrorView from '../error/ErrorView';

class SummaryList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			topArtists: null,
			inError: false
		};
	}

	componentDidMount() {
		LastFm.getTopArtists()
			.then(artistArray => this.setState({topArtists: artistArray}))
			.catch(error => this._handleDataRetrievalError(error));
	}

	_handleDataRetrievalError(error) {
		this.setState({inError: true});
		console.error("Error retrieving artist details. ", error);
	}

	_renderArtistSummaries(topArtists) {
		return topArtists.map((artist, index) => (
			<Link to={'/artist/' + artist.mbid} key={"link-for-" + artist.mbid}>
				<ArtistSummary
				key={artist.mbid}
				position={index + 1}
				artistName={artist.name}
				artistImageUrl={artist.imageUrl}
				/>
			</Link>
		));
	}

	render() {
		if (this.state.inError) {
			return <ErrorView/>;
		}
		return <div>
			{this.state.topArtists ? this._renderArtistSummaries(this.state.topArtists) : "Retrieving top artists..."}
		</div>
	}
}

export default SummaryList;