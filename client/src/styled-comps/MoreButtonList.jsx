import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: block;
  position: absolute;
  width: 150px;
  height: 160px;
  left: 200px;

  border: 1px solid #e5e5e5;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,.1);
  z-index: 4;
`;

const Button = styled.button`
  border-bottom: 1px solid #e5e5e5;
  text-indent: 30px;
  background-color: #fff;
  display: block;
  border: none;
  height: 32px;
  position: relative;
  padding-right: 28px;
  padding-left: 3px;
  text-align: left;
  width: 100%;
  font-size: 100%
  align-items: flex-start;
  border-bottom: 1px solid #e5e5e5;

  :focus {
    outline: none;
  }

  :hover {
    background-color: #f2f2f2;
  }

  ::before {
    content: "";
    background-size: 16px 16px;
    left: 2px;
    display: block;
    background-repeat: no-repeat;
    background-position: center center;
    width: 20px;
    height: 20px;
    top: 5px;
    bottom: 0;
    margin: auto 0;
    position: relative;
  }
`;
const RepostButton = styled(Button)`
  ::before {
    background-image: url(https://sosacloud-icon-assets.s3-us-west-1.amazonaws.com/repost_more.svg);
  }
`;
const ShareButton = styled(Button)`
  ::before {
    background-image: url(https://sosacloud-icon-assets.s3-us-west-1.amazonaws.com/share_more.svg)
  }
`;
const AddToNextButton = styled(Button)`
  ::before {
    background-image: url(https://sosacloud-icon-assets.s3-us-west-1.amazonaws.com/add_more.svg);
  }
`;
const AddToPlaylistButton = styled(Button)`
  ::before {
    background-image: url(https://sosacloud-icon-assets.s3-us-west-1.amazonaws.com/addNext_more.svg)
  }
`;
const StationButton = styled(Button)`
  ::before {
    background-image: url(https://sosacloud-icon-assets.s3-us-west-1.amazonaws.com/station_more.svg)
  }
`;


const StyledSpan = styled.span`
  bottom: 15px;
  position: relative;
  left: 26px;

`;


const MoreButtonList = function (props) {
  return (
    <StyledDiv className={"more-list"}>
      <RepostButton title={"Repost"}><StyledSpan>Repost</StyledSpan></RepostButton>
      <ShareButton title={"Share"}><StyledSpan>Share</StyledSpan></ShareButton>
      <AddToNextButton title={"Add to Next up"}><StyledSpan>Add to Next up</StyledSpan></AddToNextButton>
      <AddToPlaylistButton title={"Add to Playlist"}><StyledSpan>Add to Playlist</StyledSpan></AddToPlaylistButton>
      <StationButton title={"Go to Station"}><StyledSpan>Station</StyledSpan></StationButton>
    </StyledDiv>
  )
}

export default MoreButtonList;