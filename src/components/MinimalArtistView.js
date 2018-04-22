import React, { Component } from 'react';

import './MinimalArtistView.css';

class MinimalArtistView extends Component {

	render() {
		return <div className="minimal-artist-view" onClick={this.props.onClick}>
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

export default MinimalArtistView;