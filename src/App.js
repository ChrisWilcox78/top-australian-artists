import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    
    this._updateStateWithArtists = this._updateStateWithArtists.bind(this);
    
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Australia's Top Artists</h1>
          <div>Powered by</div>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
            {this.state.topArtists ? JSON.stringify(this.state.topArtists): 'Retrieving top artists...'}
        </p>
      </div>
    );
  }
}

export default App;
