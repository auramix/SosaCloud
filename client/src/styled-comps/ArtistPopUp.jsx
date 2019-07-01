import React from 'react';
import styled from 'styled-components';
import { List, Like } from './TrackInteractions.jsx'

const PopUpDiv = styled.div`
  visibility: hidden;
  position: absolute;
  
  background-color: #fff;
  width: auto;
  min-width: 135px;
  min-height: 199px;
  border-radius: 4px;
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0,0,0,.1);
  text-align: center;
  
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
  cursor: pointer;
`;

const ArtistAnchor = styled.div`
  position: realtive;
  height: 19px;
  font-color: #333;
  cursor: pointer;
  :hover {
    color: black;
  }
`;

const FollowerCountAnchor = styled.div`
  display: inline-block;
  height: 22px;
  margin-right: 9px;
  margin-top: 5px;
  margin-bottom: 4px;
  color: #ccc;
  font-size: 11px;
  line-height: 12px;
  font-family: "InterstateSound Tnum","Interstate","Lucida Grande","Lucida Sans Unicode","Lucida Sans",Garuda,Verdana,Tahoma,sans-serif;
  font-weight: 100;
  text-decoration: none;
  cursor: pointer;

  ::before {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCI+PHBhdGggZmlsbD0icmdiYSgxNTMsIDE1MywgMTUzLCAwLjcpIiBkPSJNMTguNCAxOC41bDIuNSA1IC4yLjVIMjhsLTIuMS00LjMtNC4xLTEuNXYtMi41YzEuMi0xLjEgMS44LTMuMiAxLjgtNS4xIDAtMi4xLTItMy42LTMuNS0zLjZzLTMuNSAxLjYtMy41IDMuNmMwIDEuOS41IDQgMS44IDUuMXYyLjVoLS4xbC4xLjN6Ii8+PHBhdGggZmlsbD0iIzk5OSIgZD0iTTE3LjUgMTlsLTUtMS44di0zYzEuNC0xLjIgMi0zLjggMi01LjkgMC0yLjQtMi4zLTQuMy00LTQuMy0xLjcgMC00IDEuOC00IDQuMyAwIDIuMi42IDQuNyAyIDUuOXYzbC01IDEuOEwxIDI0aDE5bC0yLjUtNXoiLz48L3N2Zz4=);
    background-size: contain;
    display: inline-block;
    margin-right: 5px;
    content: "";
    width: 16px;
    height: 18px;
    vertical-align: top;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const Location = styled.p`
  display: block;
  line-height: 16.8px;
  margin-bottom: 10px;
  margin-top: 0px;
  cursor: text;
`;

const StyledSpan = styled.span`
  display: inline-block;
  margin-top: 5px;
  height: auto;
  color: #333;
  :hover {
    color: black;
  }
`;

const FollowerSpan = styled(StyledSpan)`
  color: #999;
  :hover{
    color: #333;
  }
`;

const FollowButton = styled.button`
  margin-top: 5px;
  height: 22px;
  padding: 2px 9px 2px 8px;
  border-radius: 3px;
  border: 1px solid #e5e5e5;
  height: auto;
  width: auto;
  cursor: pointer;

  :hover{
    border-color: #ccc;
  }
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
      <div style={{ cursor: "default" }}>
        <ArtistImageDiv>
          <ArtistImage imageUrl={props.imageUrl} />
        </ArtistImageDiv>

        <div>
          <ArtistAnchor>
            <StyledSpan >Artist</StyledSpan>
          </ArtistAnchor>
        </div>

        <div>
          <FollowerCountAnchor>
            <FollowerSpan>123</FollowerSpan>
          </FollowerCountAnchor>
        </div>

        <div style={{ position: 'relative', color: '#999' }}>
          <Location>San Francisco</Location>
        </div>
        <FollowButton type={"button"}>Follow</FollowButton>
      </div>
      <BoxArrow />
    </PopUpDiv>
  );

}

export { ArtistPopUp };


