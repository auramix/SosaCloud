import React from 'react';
import styled from 'styled-components';
import TrackInteractions from './TrackInteractions.jsx'
import TrackButtons from './TrackButtons.jsx';


const TrackInfoDiv = styled.div`
  overflow: hidden;
  font: 14px/1.4 "Lucida Grande","Lucida Sans Unicode","Lucida Sans",Garuda,Verdana,Tahoma,sans-serif;
  font-weight: 100;
  line-height: 1;
  margin: 0 0 2px;
  display: block;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
`; 

const ArtistAnchor = styled(TrackInfoDiv)`
  color: #999;
  margin: 5px 5px 2px 0px;
  :hover {
    color: #333;
  }
`;

const TrackNameAnchor = styled(TrackInfoDiv)`
  color: #333;
  margin: 2px 5px 1px 0px;
  line-height: 1.3em;
  font-weight: 50%;
`; 

const TrackInfo = function(props) {
  return (
    <TrackInfoDiv>
      <ArtistAnchor as="a" href={""}>
        <span>Artist</span>
      </ArtistAnchor>

      <TrackNameAnchor as="a" href={""}>
        Track Name
      </TrackNameAnchor>

      <TrackInteractions />
      <TrackButtons />
    </TrackInfoDiv>
  )
}

export default TrackInfo;