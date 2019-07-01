import React from 'react';
import styled from 'styled-components';
import { ArtistAnchor } from './TrackInfo.jsx'
import { List, Like } from './TrackInteractions.jsx'

const PopUpDiv = styled.div`
  visibility: hidden;
  position: absolute;
  background-color: #fff;
  width: 150px;
  min-height: 199px;
  border-radius: 4px;
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0,0,0,.1);
  text-align: center;
  :focus {
    visibility: visible;
  }
  z-index: 1;
`;

const ArtistImageDiv = styled.div`
  position: relative;
  display: inline-block;
  height: 80px;
  width:  80px;
  margin: 5px auto 15px;
`;

const ArtistImage = styled.span`
  display: inline-block;
  background-image: ${props => `url(${props.imageUrl})`};
  height: 80px;
  width 80px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, .1) 0 0 0 1px inset;
`;

const FollowerCountAnchor = styled.a`
  display: inline-block;
  width: 25px;
  height: 25px;
  ::before {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCI+PHBhdGggZmlsbD0icmdiYSgxNTMsIDE1MywgMTUzLCAwLjcpIiBkPSJNMTguNCAxOC41bDIuNSA1IC4yLjVIMjhsLTIuMS00LjMtNC4xLTEuNXYtMi41YzEuMi0xLjEgMS44LTMuMiAxLjgtNS4xIDAtMi4xLTItMy42LTMuNS0zLjZzLTMuNSAxLjYtMy41IDMuNmMwIDEuOS41IDQgMS44IDUuMXYyLjVoLS4xbC4xLjN6Ii8+PHBhdGggZmlsbD0iIzk5OSIgZD0iTTE3LjUgMTlsLTUtMS44di0zYzEuNC0xLjIgMi0zLjggMi01LjkgMC0yLjQtMi4zLTQuMy00LTQuMy0xLjcgMC00IDEuOC00IDQuMyAwIDIuMi42IDQuNyAyIDUuOXYzbC01IDEuOEwxIDI0aDE5bC0yLjUtNXoiLz48L3N2Zz4=);
    background-size: contain;
  }
`;

const LocationDiv = styled.div`
  position: relative;
`;

const FollowButton = styled.button`
  border: 1px solid #e5e5e5;
  border-color: #ccc;
  height: auto;
  width: auto;
`;

const BoxArrow = styled.div`
  top: -5px;
  left: 50%;
  bottom: auto;
  margin-left: -4px;
  display: block;
  transform: rotate(45deg);
  background: #fff;
  border: 1px solid #ccc;
  border-width: 1px 0 0 1px;
  position: absolute;
  width: 8px;
  height: 8px;
  box-shadow: -1px -1px 1px -1px rgba(0,0,0, .5);
  z-index: 1; 
`;

const ArtistPopUp = function (props) {

  return (
    <PopUpDiv className={"artist-pop-up"}>

      <ArtistImageDiv>
        <ArtistImage imageUrl={props.imageUrl} />
      </ArtistImageDiv>

      <div>
        <ArtistAnchor>
          <span>Artist</span>
        </ArtistAnchor>
      </div>

      <div>
        <FollowerCountAnchor>
          <span>123</span>
        </FollowerCountAnchor>
      </div>

      <LocationDiv>
        <p>San Francisco</p>
      </LocationDiv>
      <FollowButton>Follow</FollowButton>
      <BoxArrow />
    </PopUpDiv>
  );

}

export { ArtistPopUp };


