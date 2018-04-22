import React, { Component } from 'react';

import './ArtistDetailsView.css';

class ArtistDetailsView extends Component {

	render() {
		return <div className="artist-details-view" >
			<div className="artist-name">
				{this.props.artistName}
			</div>
			<div className="artist-image">
				<img src={this.props.artistImageUrl} alt={this.props.artistName} />
			</div>
			<div className="artist-bio" dangerouslySetInnerHTML={this.props.artistBio} />
			<a className="back-link" onClick={this.props.onBackClick}>BACK</a>
		</div>
	}
}

export default ArtistDetailsView;