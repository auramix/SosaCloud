import styled from 'styled-components';
import React from 'react';
import ArtistAnchorEl from '../styled-comps/ArtistAnchor.jsx';
import { List, Like } from '../styled-comps/TrackInteractions.jsx';

const StyledPlaylistSpan = styled.span`
  display: block;
  background: center center/contain no-repeat;
  background-image: url(https://a-v2.sndcdn.com/assets/images/playlist-cover-bg_small@2x-c437aa7.png);
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

const PlaylistNameAnchor = styled.a`
  position: relative;
  color: #333;
  margin: 2px 5px 1px 0px;
  line-height: 1.3em;
  font-weight: 50%;
  white-space: nowrap;
  text-decoration: none;
`;

const PlaylistInfoDiv = styled.div`
  overflow: hidden;
  font: 14px/1.4 "Lucida Grande","Lucida Sans Unicode","Lucida Sans",Garuda,Verdana,Tahoma,sans-serif;
  font-weight: 100;
  line-height: 1;
  margin: 0 0 2px;
  display: block;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  z-index: 1;
`;

const PlaylistInfo = function (props) {
  return (
    <PlaylistInfoDiv>
      <div>
        <ArtistAnchorEl playlist={props.playlist} artistName={props.playlist.userName}/>
      </div>
      <div>
        <PlaylistNameAnchor href={""}>
          {props.playlist.playlistName}
        </PlaylistNameAnchor>
      </div>
      <div>
        <List>
          <Like href={""}>
            <span>{props.playlist.likes}</span>
          </Like>
        </List>
      </div>
    </PlaylistInfoDiv>
  );
}

export {PlaylistInfo};
