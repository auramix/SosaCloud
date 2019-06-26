import React from 'react';
import styled from 'styled-components';


const ArtSpan = styled.span`
  margin-right: 10px;
  padding: 5px 6px;
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
  :hover {
    visibility: visible;
  }
  visibility: hidden;
  display: inline-block;
  position: absolute;
  top: 5px;
  bottom: 5px;
  left: 6px;
  right: 6px;
  padding: 11px;
  z-index: 2;
  
`;
const PlayButton = styled.a`
::before {
  display: inline-block;
  position: absolute;
  content: "";
  top: 0;
  left: 1px;
  width: 100%;
  height: 100%;
  vertical-align: top;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDggMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlBsYXkgMjg8L3RpdGxlPjxwYXRoIGQ9Ik0wIDE0bDEuODQ2LTdMMCAwbDggNy04IDd6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=);
}
  width: 28px;
  height: 28px;
  display: block;
  margin: 1px 0 1px 1px;
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
    <ArtSpan>
      <div>
        <ImageSpan imageUrl={props.imageUrl}/>
      </div>
      <PlayButtonSpan className={"test"}>
        <PlayButton />
      </PlayButtonSpan>
    </ArtSpan>
  );

}

export default Artwork;