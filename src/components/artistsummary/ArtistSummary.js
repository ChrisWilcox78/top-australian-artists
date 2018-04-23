import React, { Component } from 'react';

import './ArtistSummary.css';

class ArtistSummary extends Component {

	render() {
		return <div className="artist-summary-view" onClick={this.props.onClick}>
			<div>
				<span className="chart-position">
					{this.props.position}.
				</span>
				<span className="artist-image">
					<img src={this.props.artistImageUrl} alt={this.props.artistName} />
				</span>
			</div>
			<br/>
			<div className="artist-name">
				{this.props.artistName}
			</div>
		</div>
	}
}

export default ArtistSummary;
