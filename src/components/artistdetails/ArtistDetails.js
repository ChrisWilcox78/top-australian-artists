import React, { Component } from 'react';
import './ArtistDetails.css';
import AUdirectionLink from "@gov.au/direction-links";
import { AUcallout } from "@gov.au/callout";
import AUheading from "@gov.au/headings";
import AUfooter from "@gov.au/footer";
import { Link } from 'react-router-dom';
import * as LastFm from '../../components/lastfmclient/LastFmClient';
import ErrorView from '../error/ErrorView';

class ArtistDetails extends Component {

	constructor(props) {
		super(props);
		this.state = {
			artistName : null,
			artistImageUrl : null,
			artistBio : null,
			inError: false
		}
	}

	componentDidMount() {
		LastFm.getArtistDetails(this.props.match.params.mbid)
			.then(details => this.setState(details))
			.catch(error => this._handleDataRetrievalError(error));
	}

	_handleDataRetrievalError(error) {
		this.setState({inError: true});
		console.error("Error retrieving artist details. ", error);
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
		if (this.state.inError) {
			return <ErrorView/>;
		}
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
		</div>);
	}
}

export default ArtistDetails;
