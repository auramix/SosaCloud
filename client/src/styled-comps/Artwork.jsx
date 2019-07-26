import React from 'react';
import styled from 'styled-components';


const ArtSpan = styled.span`
  margin-right: 4px;
  padding: ${props => props.playlistArtSpan ? '0px 5px 0px 0px' : '5px 6px 6px 0px'};
  width: 50px;
  height: 50px;
  position: relative;
  float: left;
`;


const ImageSpan = styled.span`
  background-image: url(${props => props.imageUrl});
  height: 50px;
  width: 50px;
  display: block;
  background-size: cover;
`;

const PlayButtonSpan = styled.span`
  visibility: ${props => props.clicked ? 'visible' : 'hidden'};
  display: inline-block;
  position: absolute;
  top: 5px;
  bottom: 5px;
  padding: 11px;
  z-index: 2;
`;
const PlayButton = styled.a`
::before {
  display: block;
  position: relative;
  content: "";
  top: 0;
  left: 1px;
  width: 28px;
  height: 28px;
  vertical-align: top;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(https://sosacloud-icon-assets.s3-us-west-1.amazonaws.com/playButton.svg);


}

::after {
  content: '';
  opacity: 0;
  transition: opacity .5s;
}
  width: 28px;
  height: 28px;
  display: block;
  line-height: 42px;
  background-color: #f50;
  border-radius: 50%;
  :hover {
    background-color: #f30;  
  }
  
`;


// Pause : data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDggMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlBhdXNlIDI4PC90aXRsZT48cGF0aCBkPSJNNSAwdjEyaDNWMEg1ek0wIDB2MTJoM1YwSDB6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=

const Artwork = (props) => {
  return (
   
    <ArtSpan playlistArtSpan={props.playlistArtSpan}>
      <div>
        <ImageSpan imageUrl={props.imageUrl} />
      </div>
      <PlayButtonSpan className={"overlay_buttons"} clicked={props.clicked}>
        <PlayButton title={"Play"}></PlayButton>
      </PlayButtonSpan>
    </ArtSpan>
   
  );

}

export { Artwork, ImageSpan };