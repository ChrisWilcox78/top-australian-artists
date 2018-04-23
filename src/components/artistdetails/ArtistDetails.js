import React, { Component } from 'react';

import './ArtistDetails.css';
import AUdirectionLink from "@gov.au/direction-links";
import { AUcallout } from "@gov.au/callout";
import AUheading from "@gov.au/headings";
import AUfooter from "@gov.au/footer";
import { Link } from 'react-router-dom';
import LastFmClient from '../../components/lastfmclient/LastFmClient';

class ArtistDetails extends Component {

	constructor(props) {
		super(props);
		this.state = {
			artistName : null,
			artistImageUrl : null,
			artistBio : null
		}
	}

	componentDidMount() {
		LastFmClient.getArtistDetails(this.props.match.params.mbid, details => this.setState(details));
	}

	_renderDetails() {
		return <div>
		<AUheading size="lg" level="2" >
			<div className="artist-name">
				{this.state.artistName}
			</div>
		</AUheading>
		<AUcallout description="Artist details">
			<div className="artist-image">
				<img src={this.state.artistImageUrl} alt={this.state.artistName} />
			</div>
			<div className="artist-bio" dangerouslySetInnerHTML={this.state.artistBio} />
		</AUcallout>
		</div>
	}

	render() {
		return (<div className="artist-details-view" >
			{this.state.artistName ? this._renderDetails() : "Loading Artist Details"}
			<AUfooter>
				<Link to="/">
					<AUdirectionLink
						text="BACK"
						direction="left"
						className="back-link"
					/>
				</Link>
			</AUfooter>
		</div>)
	}
}

export default ArtistDetails;
