import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: linear-gradient(to right,rgba(255,255,255,.1),#fff 17px);
  position: absolute;
  height: 50px;
  width: 50px;
  top: 18px;
  right: 0;
  padding: 0 10px 0 20px;
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
  color: #333;
  font-size: 14px;
  line-height: 20px;
  background-size: 16px 16px;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+c3RhdHNfbGlrZXNfZ3JleTwvdGl0bGU+PHBhdGggZD0iTTEwLjgwNSAzYy0yLjAyIDAtMi44MDQgMi4zNDUtMi44MDQgMi4zNDVTNy4yMTMgMyA1LjE5NiAzQzMuNDk0IDMgMS43NDggNC4wOTYgMi4wMyA2LjUxNGMuMzQ0IDIuOTUzIDUuNzI1IDYuNDc5IDUuOTYzIDYuNDg3LjIzOC4wMDggNS43MzgtMy43MjIgNS45ODgtNi41QzE0LjE4OCA0LjIwMSAxMi41MDcgMyAxMC44MDUgM3oiIGZpbGw9IiMyMjIiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==);

  content: "";
  display: inline-block;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center center;
  width: 20px;
  height: 20px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: 4px;
  `;


const TrackButtons = function(props) {
  return (
    <StyledDiv>
      <LikeButton title={"Like"} />
    </StyledDiv>
  );
  

}

export default TrackButtons