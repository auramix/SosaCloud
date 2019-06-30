import React from 'react';
import styled from 'styled-components';
import {ImageSpan} from './Artwork.jsx';

const PopUpDiv = styled.div`
  visibility: hidden;
  position: absolute;
`;

const ArtistImage = styled(ImageSpan)`
  background-image: ${props => props.imageUrl};
  height: 80px;
  width: 80px;
  border-radius 50%;
`;

const FollowerCountDiv = styled.div`
  ::before {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCI+PHBhdGggZmlsbD0icmdiYSgxNTMsIDE1MywgMTUzLCAwLjcpIiBkPSJNMTguNCAxOC41bDIuNSA1IC4yLjVIMjhsLTIuMS00LjMtNC4xLTEuNXYtMi41YzEuMi0xLjEgMS44LTMuMiAxLjgtNS4xIDAtMi4xLTItMy42LTMuNS0zLjZzLTMuNSAxLjYtMy41IDMuNmMwIDEuOS41IDQgMS44IDUuMXYyLjVoLS4xbC4xLjN6Ii8+PHBhdGggZmlsbD0iIzk5OSIgZD0iTTE3LjUgMTlsLTUtMS44di0zYzEuNC0xLjIgMi0zLjggMi01LjkgMC0yLjQtMi4zLTQuMy00LTQuMy0xLjcgMC00IDEuOC00IDQuMyAwIDIuMi42IDQuNyAyIDUuOXYzbC01IDEuOEwxIDI0aDE5bC0yLjUtNXoiLz48L3N2Zz4=);
  }
  position: relative;
  height: auto;
  width: auto;
`;

const LocationDiv = styled.div`
  position: relative;
`;

const FollowButton = styled.button`
  border: 1px solid #e5e5e5;
  border-color: #ccc;

`;

const ArtistPopUp = function(props) {

  return (
    <PopUpDiv className={"artist-pop-up"}>
      <ArtistImage />
      <FollowerCountDiv>
        <span>123</span>
      </FollowerCountDiv>
      <LocationDiv>
        <p>San Francisco</p>
      </LocationDiv>
      <FollowButton />
    </PopUpDiv>
  );

}

export {ArtistPopUp};


