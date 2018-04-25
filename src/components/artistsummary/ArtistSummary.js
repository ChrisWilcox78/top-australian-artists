import React, { Component } from 'react';
import PropTypes from "prop-types";

import './ArtistSummary.css';

class ArtistSummary extends Component {

	render() {
		return <div className="artist-summary-view">
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

ArtistSummary.propTypes = {
	artistName: PropTypes.string.isRequired,
	position: PropTypes.number.isRequired,
	artistImageUrl: PropTypes.string.isRequired
};

export default ArtistSummary;
