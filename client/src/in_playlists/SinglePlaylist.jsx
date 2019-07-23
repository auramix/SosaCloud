import styled from 'styled-components';
import React from 'react';
import ArtistAnchorEl from '../styled-comps/ArtistAnchor.jsx';
import { List, Like } from '../styled-comps/TrackInteractions.jsx';
import {Artwork} from '../styled-comps/Artwork.jsx';

const StyledPlaylistSpan = styled.span`
  display: inline-block;
  background: center center/contain no-repeat;
  background-image: url(https://a-v2.sndcdn.com/assets/images/playlist-cover-bg_small@2x-c437aa7.png);
  margin-right: 4px;
  padding: 5px 6px;
  width: 50px;
  height: 50px;
  position: relative;
`;

const StyledDiv = styled.div`
  height: 62px;
  width:306px;
  z-index: 0;
`;

const StyledListItem = styled.li`
  padding: 5px 0px;
`;

const PlaylistNameAnchor = styled.a`
  position: relative;
  color: #333;
  margin: 2px 5px 1px 0px;
  line-height: 1.3em;
  font-weight: 50%;
  white-space: nowrap;
`;

const PlaylistInfoDiv = styled.div`
  overflow: hidden;
  position: absolute;
  font: 14px/1.4 "Lucida Grande","Lucida Sans Unicode","Lucida Sans",Garuda,Verdana,Tahoma,sans-serif;
  font-weight: 100;
  line-height: 1;
  margin: 0 0 2px;
  display: inline-block;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  z-index: 1;
`;



export default class SinglePlaylist extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   fetch(`/api/playlist/likes/${this.props.playlist.id}`, {
  //     method: 'GET'
  //   })
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((jsonData) => {
  //       this.props.likes = jsonData.likes;
  //     })
  //     .catch((err) => {
  //       console.log('***Database Error - playlist/likes/${playlist.id} - ***, ', err);
  //     })
  // }

  

  render() {
    return (
      <StyledListItem>
        <StyledDiv >
          <StyledPlaylistSpan>
            <Artwork imageUrl={this.props.playlist.playlistImgUrl}/>
          </StyledPlaylistSpan>
          
          <PlaylistInfoDiv>
            <div>
              <ArtistAnchorEl playlist={this.props.playlist} artistName={this.props.playlist.userName}/>
            </div>
            <div>
              <PlaylistNameAnchor href={""}>
                {this.props.playlist.playlistName}
              </PlaylistNameAnchor>
            </div>
            <div>
              <List>
                <Like href={""}>
                  <span>{this.props.playlist.likes}</span>
                </Like>
              </List>
            </div>
          </PlaylistInfoDiv>
        </StyledDiv>
      </StyledListItem>
    );
  }
}