import React from 'react';
import styled from 'styled-components';
import TrackInteractions from './TrackInteractions.jsx'


const TrackInfo = styled.div`
  overflow: hidden;
  font: 12px/1.4 "Lucida Grande","Lucida Sans Unicode","Lucida Sans",Garuda,Verdana,Tahoma,sans-serif;
  line-height: 1;
  margin: 0 0 2px;
  display: block;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
`; 

const ArtistAnchor = styled(TrackInfo)`
  color: #999;
`;

const TrackNameAnchor = styled(TrackInfo)`
  color: #333;
`; 

const ListItemInfo = function(props) {
  return (
    <TrackInfo>
      <ArtistAnchor as="a" href={""}>
        <span>someArtist</span>
      </ArtistAnchor>
      <TrackNameAnchor as="a" href={""}>
        TrackName
      </TrackNameAnchor>
      <TrackInteractions />
    </TrackInfo>
  )
}

export default ListItemInfo;