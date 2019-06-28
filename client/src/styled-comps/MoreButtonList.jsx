import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: absolute;
  width: 150px;
  height: 160px;
  left: 265px;
  top: 40px;
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
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+c3RhdHNfcmVwb3N0PC90aXRsZT48cGF0aCBkPSJNMiA2djVjMCAxLjEwNS45MDIgMiAyLjAwOSAyaDYuOTg3SDEwbC0yLTJINFY2aC0uNUg2TDMgMyAwIDZoMnptNC0zaC0uOTk2IDYuOTg3QzEzLjA5OCAzIDE0IDMuODk1IDE0IDV2NWgtMlY1SDhMNiAzem0xMCA3aC02bDMgMyAzLTN6IiBmaWxsPSIjMjIyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=);
  }
`;
const ShareButton = styled(Button)`
  ::before {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+c2hhcmU8L3RpdGxlPjxnIGZpbGw9IiMyMjIiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTEyIDNDOC4wMzIgMyA3IDQuOCA3IDcuOGMxLjY0Mi0zIDQuMTU3LTIuNzk1IDUtMi43OTVWM3ptMC0ydjZsMy0zLTMtM3oiLz48cGF0aCBkPSJNMTQgN3Y0YTIgMiAwIDAgMS0yLjAwOSAySDQuMDFBMi4wMDYgMi4wMDYgMCAwIDEgMiAxMVY1YTIgMiAwIDAgMSAyLjAwOS0yaDMuMTlhNS45MzMgNS45MzMgMCAwIDAtMS4zODMgMkg0djZoOFY5bDItMnptLTMtMmgtLjA0bC4wNC0uMDFWNXoiLz48L2c+PC9zdmc+)
  }
`;
const AddToNextButton = styled(Button)`
  ::before {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoMjB2MjBIMHoiLz48cGF0aCBmaWxsPSIjMjIyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00IDloMTB2Mkg0Vjl6bTAgNGgxMHYySDR2LTJ6bTAtOGg4djJINFY1em0xMC00bDQgMy00IDNWMXoiLz48L2c+PC9zdmc+);
  }
`;
const AddToPlaylistButton = styled(Button)`
  ::before {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R3JvdXA8L3RpdGxlPjxwYXRoIGQ9Ik0xMiAzVjFoMnYyaDJ2MmgtMnYyaC0yVjVoLTJWM2gyek0wIDN2Mmg4VjNIMHptMCA0djJoMTBWN0gwem0wIDR2MmgxMHYtMkgweiIgZmlsbD0iIzIyMiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)
  }
`;
const StationButton = styled(Button)`
  ::before {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxOCAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+QTUxN0JGMTEtRTM2OS00QTc0LUI4OEEtNjg4ODE2MTkwRjA0PC90aXRsZT48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iIzIyMiIgY3g9IjkiIGN5PSI3IiByPSIyLjUiLz48cGF0aCBkPSJNMTUuMDI4IDEyLjk5M0E4LjQ3MyA4LjQ3MyAwIDAgMCAxNy41IDdjMC0yLjMyNC0uOTMzLTQuNDMtMi40NDUtNS45NjVNMTIuOTA1IDEwLjg3M0E1LjQ4MyA1LjQ4MyAwIDAgMCAxNC41IDdhNS40ODIgNS40ODIgMCAwIDAtMS41Ni0zLjgzOE0zLjAxNy45NjNBOC40NzQgOC40NzQgMCAwIDAgLjUgN2MwIDIuMzYuOTYyIDQuNDk1IDIuNTE1IDYuMDM2TTUuMTA0IDMuMTE4QTUuNDgzIDUuNDgzIDAgMCAwIDMuNSA3YzAgMS41NC42MzMgMi45MzIgMS42NTMgMy45MyIgc3Ryb2tlPSIjMjIyIi8+PC9nPjwvc3ZnPg==)
  }
`;


const StyledSpan = styled.span`
  bottom: 15px;
  position: relative;
  left: 26px;

`;


const MoreButtonList = function(props) {
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