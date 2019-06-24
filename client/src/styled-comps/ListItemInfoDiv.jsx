import React from 'react';
import styled from 'styled-components';
import ArtistAnchor from './ArtistAnchor.jsx';
import TrackNameAnchor from './TrackNameAnchor.jsx';        



const ListItemInfoDiv = styled.div`
  overflow: hidden;
`; 

const ListItemInfo = function(props) {
  return (
    <ListItemInfoDiv>
      <ArtistAnchor href={""}>
        <span>someArtist</span>
      </ArtistAnchor>
      <TrackNameAnchor href={""}>TrackName</TrackNameAnchor>
    </ListItemInfoDiv>
  )
}

export default ListItemInfo;