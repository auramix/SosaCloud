import React from 'react';
import styled from 'styled-components';
import MoreButtonList from './MoreButtonList.jsx';


const StyledDiv = styled.div`
  visibility: hidden;
  background: linear-gradient(to right,rgba(255,255,255,.1),#fff 17px);
  position: absolute;
  height: 20px;
  width: 60px;
  top: 18px;
  left: 240px;
`;

const LikeButton = styled.button`
  min-width: 25px;
  float: left;
  height: 26px;
  margin: 0;
  padding: 2px 11px 2px 10px;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  background-color: #fff;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  background-size: 16px 16px;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+c3RhdHNfbGlrZXNfZ3JleTwvdGl0bGU+PHBhdGggZD0iTTEwLjgwNSAzYy0yLjAyIDAtMi44MDQgMi4zNDUtMi44MDQgMi4zNDVTNy4yMTMgMyA1LjE5NiAzQzMuNDk0IDMgMS43NDggNC4wOTYgMi4wMyA2LjUxNGMuMzQ0IDIuOTUzIDUuNzI1IDYuNDc5IDUuOTYzIDYuNDg3LjIzOC4wMDggNS43MzgtMy43MjIgNS45ODgtNi41QzE0LjE4OCA0LjIwMSAxMi41MDcgMyAxMC44MDUgM3oiIGZpbGw9IiMyMjIiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==);

  content: "";
  display: inline-block;
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  width: 20px;
  height: 20px;
  margin-right: 5px;

  :hover {
    border-color: #ccc;
  }
  `;

const MoreButton = styled(LikeButton)`
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iNCIgdmlld0JveD0iMCAwIDE0IDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPm1vcmU8L3RpdGxlPjxnIGZpbGw9IiMyMjIiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiLz48Y2lyY2xlIGN4PSI3IiBjeT0iMiIgcj0iMiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMiIgcj0iMiIvPjwvZz48L3N2Zz4=);
  position: relative;
  margin-right: 0px;

  :focus:enabled {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iNCIgdmlld0JveD0iMCAwIDE0IDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPm1vcmU8L3RpdGxlPjxnIGZpbGw9IiNGNTAiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiLz48Y2lyY2xlIGN4PSI3IiBjeT0iMiIgcj0iMiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMiIgcj0iMiIvPjwvZz48L3N2Zz4=);
    border: 1px solid #f50;
  }
  `;


const TrackButtons = function(props) {
  return (
    <div>
      <StyledDiv className={"overlay_buttons"}>
        <LikeButton title={"Like"} />
        <MoreButton title={"More"} />
      </StyledDiv>
      <MoreButtonList />
    </div>
  );
  

}

export default TrackButtons