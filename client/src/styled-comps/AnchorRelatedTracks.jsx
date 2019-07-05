import React from 'React';
import styled from 'styled-components';

const ImageSpan = styled.span`
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCI+PHBhdGggZmlsbD0iIzk5OSIgZD0iTTUgMTJoMnY0SDV6TTIxIDEyaDJ2NGgtMnpNMTcgMTBoMnY4aC0yek05IDhoMnYxMkg5ek0xMyA1aDJ2MThoLTJ6Ii8+PC9zdmc+);
  background-size: 28px 28px;
  background-position: center center;
  display: inline-block;
  margin-right: 4px;
  height: 24px;
  width: 21px;
  `;

const TextSpan = styled.span`
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

const StyledAnchor = styled.a`
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

const ViewAllSpan = styled(TextSpan)`
  font-family: "InterstateSound Tnum", "Interstate", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans";
  position: relative;
  left: 40%;
  color: #999;

`;


const AnchorRelatedTracks = function () {
  return (
    <StyledAnchor href={''}>
      <StyledH3>
        <ImageSpan />
        <TextSpan>Related tracks</TextSpan>
      </StyledH3>
      <ViewAllSpan className={"view-all"}>View All</ViewAllSpan>
    </StyledAnchor>
  );
}

export default AnchorRelatedTracks;