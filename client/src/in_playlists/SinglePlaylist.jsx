import styled from 'styled-components';
import React from 'react';
import ArtistAnchorEl from './ArtistAnchor.jsx';
import TrackInfoDiv from '../styled-comps/TrackInfo.jsx';
import { List, Like } from '../styled-comps/TrackInfo.jsx';



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



export default class SinglePlaylist extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch(`/api/playlist/likes/${this.props.playlist.id}`, {
      method: 'GET'
    })
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        this.props.likes = jsonData.likes;
      })
      .catch((err) => {
        console.log('***Database Error - playlist/likes/${playlist.id} - ***, ', err);
      })
  }

  

  render() {
    return (
      <StyledListItem>
        <StyledDiv >
          <Artwork imageUrl={this.props.playlist.playlistImgUrl}/>
          <TrackInfoDiv>
            <div>
              <ArtistAnchorEl {...this.props}/>
            </div>
            <div>
              <PlaylistNameAnchor href={""}>
                {this.props.playlist.playlistName}
              </PlaylistNameAnchor>
            </div>
            <div>
              <List>
                <Like href={""}>
                  <span>{this.props.likes}</span>
                </Like>
              </List>
            </div>
          </TrackInfoDiv>
        </StyledDiv>
      </StyledListItem>
    );
  }
}