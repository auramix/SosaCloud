import React from 'react';
import styled from 'styled-components';
import MoreButtonDiv from '../components/MoreButtonDiv.jsx';

const orangeBackground = 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+c3RhdHNfbGlrZXNfZ3JleTwvdGl0bGU+PHBhdGggZD0iTTEwLjgwNSAzYy0yLjAyIDAtMi44MDQgMi4zNDUtMi44MDQgMi4zNDVTNy4yMTMgMyA1LjE5NiAzQzMuNDk0IDMgMS43NDggNC4wOTYgMi4wMyA2LjUxNGMuMzQ0IDIuOTUzIDUuNzI1IDYuNDc5IDUuOTYzIDYuNDg3LjIzOC4wMDggNS43MzgtMy43MjIgNS45ODgtNi41QzE0LjE4OCA0LjIwMSAxMi41MDcgMyAxMC44MDUgM3oiIGZpbGw9IiNGNTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==)';
const defaultBackground = 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+c3RhdHNfbGlrZXNfZ3JleTwvdGl0bGU+PHBhdGggZD0iTTEwLjgwNSAzYy0yLjAyIDAtMi44MDQgMi4zNDUtMi44MDQgMi4zNDVTNy4yMTMgMyA1LjE5NiAzQzMuNDk0IDMgMS43NDggNC4wOTYgMi4wMyA2LjUxNGMuMzQ0IDIuOTUzIDUuNzI1IDYuNDc5IDUuOTYzIDYuNDg3LjIzOC4wMDggNS43MzgtMy43MjIgNS45ODgtNi41QzE0LjE4OCA0LjIwMSAxMi41MDcgMyAxMC44MDUgM3oiIGZpbGw9IiMyMjIiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==)';

const StyledDiv = styled.div`
  visibility: ${props => props.clicked ? 'visible' : 'hidden'};
  background: linear-gradient(to right,rgba(255,255,255,.1),#fff 17px);
  position: absolute;
  height: 20px;
  width: 60px;
  left: 240px;
  padding-top: 18px;
  z-index: 2;
`;

const LikeButton = styled.button`
  min-width: 25px;
  float: left;
  height: 26px;
  margin: 0;
  padding: 2px 11px 2px 10px;
  border: '1px solid #e5e5e5';
  border-radius: 3px;
  background-color: #fff;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  background-size: 16px 16px;
  background-image: ${props => props.clicked ? orangeBackground : defaultBackground};

  content: "";
  display: inline-block;
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  width: 20px;
  height: 20px;
  margin-right: 5px;

  :hover {
    border-color: ${props => props.clicked ? '#f30' : '#ccc'};
  }
  :focus {
    outline: none;
  }
  `;




const TrackButtons = function (props) {

  return (
    <StyledDiv className={"overlay_buttons"} clicked={props.moreClicked}>
      <LikeButton title={"Like"} onClick={props.likeClickHandler} clicked={props.likeClicked} />
      <MoreButtonDiv clickHandler={props.moreClickHandler} clicked={props.moreClicked} />
    </StyledDiv>
  );

}

export { TrackButtons, LikeButton };
