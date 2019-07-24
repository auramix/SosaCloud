import styled from 'styled-components';
import React from 'react';
import ArtistAnchorEl from '../styled-comps/ArtistAnchor.jsx';
import { List, Like } from '../styled-comps/TrackInteractions.jsx';
import {Artwork} from '../styled-comps/Artwork.jsx';
import {PlaylistInfo} from './PlaylistInfo.jsx';

const StyledPlaylistSpan = styled.span`
  display: block;
  background: center center/contain no-repeat;
  background-image: url(https://sosacloud-icon-assets.s3-us-west-1.amazonaws.com/playlist_cover.png);
  margin-right: 4px;
  padding: 5px 6px;
  width: 50px;
  height: 50px;
  position: relative;
  float: left;
`;

const StyledDiv = styled.div`
  height: 62px;
  width:306px;
  z-index: 0;
`;

const StyledListItem = styled.li`
  padding: 5px 0px;
`;




export default class SinglePlaylist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledListItem>
        <StyledDiv >
          <StyledPlaylistSpan>
            <Artwork playlistArtSpan={true} imageUrl={this.props.playlist.playlistImgUrl}/>
          </StyledPlaylistSpan>
          
          <PlaylistInfo playlist={this.props.playlist}/>
          
        </StyledDiv>
      </StyledListItem>
    );
  }
}