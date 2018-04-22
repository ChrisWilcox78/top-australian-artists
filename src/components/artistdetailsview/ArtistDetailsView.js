import React, { Component } from 'react';

import './ArtistDetailsView.css';
import AUdirectionLink from "@gov.au/direction-links";
import { AUcallout } from "@gov.au/callout";
import AUheading from "@gov.au/headings";
import AUfooter from "@gov.au/footer";

class ArtistDetailsView extends Component {

	render() {
		return <div className="artist-details-view" >
		<AUheading size="l" level="2" >
			<div className="artist-name">
				{this.props.artistName}
			</div>
		</AUheading>
			<AUcallout>
				<div className="artist-image">
					<img src={this.props.artistImageUrl} alt={this.props.artistName} />
				</div>
				<div className="artist-bio" dangerouslySetInnerHTML={this.props.artistBio} />
			</AUcallout>
			<AUfooter>
				<AUdirectionLink
					text="BACK"
					direction="left"
					onClick={this.props.onBackClick}
					className="back-link"
				/>
			</AUfooter>
		</div>
	}
}

export default ArtistDetailsView;