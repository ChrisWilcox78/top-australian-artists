import React, { Component } from "react";
import { Link } from 'react-router-dom';
import LastFmClient from '../lastfmclient/LastFmClient';
import ArtistSummary from '../artistsummary/ArtistSummary'

class SummaryList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			topArtists: null
		};
	}

	componentDidMount() {
		LastFmClient.getTopArtists(artistArray => this.setState({topArtists: artistArray}));
	}

	_renderArtistSummaries(topArtists) {
		return topArtists.map((artist, index) => (
			<Link to={'/artist/' + artist.mbid} key={"link-for-" + artist.mbid}>
				<ArtistSummary
				key={artist.mbid}
				position={index + 1}
				artistName={artist.name}
				artistImageUrl={artist.image[4]["#text"]}
				/>
			</Link>
		));
	}

	render() {
		return <div>
			{this.state.topArtists ? this._renderArtistSummaries(this.state.topArtists) : "Retrieving top artists..."}
		</div>
	}
}

export default SummaryList;