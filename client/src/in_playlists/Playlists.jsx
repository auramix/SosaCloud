import styled from 'styled-components';
import React from 'react';
import SinglePlaylist from './SinglePlaylist.jsx';
import List from '../styled-comps/RelatedTrackList.jsx';

export default class Playlists extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playlists: [], artistPopUpOpen: false  };
  }

  componentDidMount() {
    let id = this.props.id || Math.ceil(Math.random() * 100);

    fetch(`/api/playlists/${id}`, {
      method: 'GET'
    })
      .then(data => data.json())
      .then(jsonData => {
        if (Array.isArray(jsonData)) {
          console.log('This is our jsonData: ', jsonData);
          this.setState({ playlists: jsonData })
        }
      })
      .then(() => {
        if (this.state.playlists.length) {
          this.props.renderPlaylists();
        }
      })
      .catch((err) => {
        console.log('***Client componentDidMount fetch error in Playlists component***, ', err);
      })
  }

  
  render() {
    let playlists = this.state.playlists;
    if (playlists.length > 0) {
      playlists = playlists.map(playlist => <SinglePlaylist key={playlist.id} playlist={playlist} />);
    }
    return (
        <List>
          {playlists}
        </List>
    );
  }
}