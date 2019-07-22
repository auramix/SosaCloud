import styled from 'styled-components';
import React from 'react';
import Playlist from './SinglePlaylist.jsx'

class Playlists extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playlists: [], artistPopUpOpen: false  };
    this.artistPopUpListener = this.artistPopUpListener.bind(this);
  }

  componentDidMount() {
    let id = this.props.id || Math.ceil(Math.random() * 100);

    fetch(`/api/playlists/${id}`, {
      method: 'GET'
    })
      .then(data => data.json())
      .then(jsonData => {
        if (Array.isArray(jsonData)) {
          this.setState({ playlists: jsonData })
        }
      })
      .catch((err) => {
        console.log('***Client componentDidMount fetch error in Playlists component***, ', err);
      })
  }

  artistPopUpListener(e) {
    this.setState({ artistPopUpOpen: !this.state.artistPopUpOpen })
  }

  render() {
    let playlists = this.state.playlists;
    if (playlists.length > 0) {
      playlists = playlists.map(playlist => <SinglePlaylist key={track.id} playlist={playlist} artistPopUp={this.state.artistPopUpOpen} artistPopUpHandler={this.artistPopUpListener} />);
    }
    return (
        
    );
  }
}