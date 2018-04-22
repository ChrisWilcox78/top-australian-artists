import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MinimalArtistView from './components/MinimalArtistView';

class App extends Component {

  constructor(props) {
    super(props);
    
    this._updateStateWithArtists = this._updateStateWithArtists.bind(this);
    this._renderMinimalComponentList = this._renderMinimalComponentList.bind(this);

    this.state = {
      topArtists: null
    };
  }

  _updateStateWithArtists(data) {
    this.setState ({
      topArtists: data.topartists.artist
    });
  }

  componentDidMount() {
    fetch('http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=australia&limit=10&api_key=24c990f786fd892d7c74a62505a795c8&format=json')
    .then(results => results.json())
    .then(this._updateStateWithArtists);
  }

  _renderMinimalComponentList(topArtists) {
    return topArtists.map((artist, index) => <MinimalArtistView key={artist.mbid} position={index + 1} artistName={artist.name} artistImageUrl={artist.image[4]["#text"]} />)
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
            {this.state.topArtists ? this._renderMinimalComponentList(this.state.topArtists) : 'Retrieving top artists...'}
        </div>
      </div>
    );
  }
}

export default App;
