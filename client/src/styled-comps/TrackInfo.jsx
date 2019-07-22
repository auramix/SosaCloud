import React from 'react';
import styled from 'styled-components';
import { TrackInteractions } from './TrackInteractions.jsx'
import { TrackButtons } from './TrackButtons.jsx';
import ArtistAnchorEl from './ArtistAnchor.jsx';
import MoreButtonList from './MoreButtonList.jsx';


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
  z-index: 1;
`;


const TrackNameAnchor = styled(TrackInfoDiv)`
  position: relative;
  color: #333;
  margin: 2px 5px 1px 0px;
  line-height: 1.3em;
  font-weight: 50%;
  white-space: nowrap;
`;

const TrackInfo = function (props) {
  let moreDropDown = props.moreClicked && !props.artistPopUp ? <MoreButtonList /> : null;

  return (
    <TrackInfoDiv>
      <TrackButtons moreClickHandler={props.moreClickHandler} moreClicked={props.moreClicked} likeClicked={props.likeClicked} likeClickHandler={props.likeClickHandler} />
      <div>
        <ArtistAnchorEl {...props}/>
      </div>

      <div>
        <TrackNameAnchor as="a" href={""}>
          {props.track.trackName}
        </TrackNameAnchor>
      </div>
      {moreDropDown}

      <TrackInteractions track={props.track} likes={props.likes} />
    </TrackInfoDiv>
  )
}

export { TrackInfo, TrackInfoDiv };