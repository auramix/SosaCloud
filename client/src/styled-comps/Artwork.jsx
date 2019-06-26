import React from 'react';
import styled from 'styled-components';


const ArtSpan = styled.span`
  margin-right: 10px;
  padding: 5px 6px;
  width: 50px;
  height: 50px;
  position: relative;
  box-shadow: rgba(0,0,0,.1)0 0 0 1px inset;
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
  width: 28px;
  height: 28px;
  margin: 1px 0 1px 1px;
  line-height: 42px;
`;

const Artwork = (props) => {
  return (
    <ArtSpan>
      <div>
        <ImageSpan imageUrl={props.imageUrl}/>
      </div>
      <PlayButtonSpan>
        <PlayButton />
      </PlayButtonSpan>
    </ArtSpan>
  );

}

export default Artwork;