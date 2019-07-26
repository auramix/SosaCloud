import React from 'react';
import styled from 'styled-components';

const ImageSpan_ART = styled.span`
  background-image: ${props => props.imageUrl};
  background-size: ${props => props.imageSize};
  background-position: center center;
  background-repeat: no-repeat;
  display: inline-block;
  margin-right: 4px;
  height: 24px;
  width: 21px;
  `;

const TextSpan_ART = styled.span`
  display: inline-block;
  font-size: 14px;
  color: #999;
  line-height: 24px;
  vertical-align: top;
`;

const StyledH3 = styled.h3`
  display: inline-block;
  font-family: "InterstateSound Tnum", "Interstate", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans";
  font-weight: 100;
  font-size: 14px;
  line-height: 24px;
  margin: 0;
`;

const StyledAnchor_ART = styled.a`
  display: block;
 border-bottom: 1px solid #f2f2f2;
 height: 30px;
 text-decoration: none;
 :hover {
   .view-all {
     color: #333;
   }
}
`;

const ViewAllSpan = styled(TextSpan_ART)`
  font-family: "InterstateSound Tnum", "Interstate", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans";
  position: absolute;
  right: 0;
  color: #999;

`;


const AnchorRelatedTracks = function (props) {
  return (
    <StyledAnchor_ART href={''}>
      <StyledH3>
        <ImageSpan_ART imageUrl={props.imageUrl}/>
        <TextSpan_ART>{props.textHeader}</TextSpan_ART>
      </StyledH3>
      <ViewAllSpan className={"view-all"}>View All</ViewAllSpan>
    </StyledAnchor_ART>
  );
}

export default AnchorRelatedTracks;