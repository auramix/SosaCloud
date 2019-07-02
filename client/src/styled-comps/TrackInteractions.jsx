import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  margin-block-start: 0px;
  margin-block-end: 0px;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const Play = styled.a`
  margin-right: 9px;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #999;
  font-size: 11px;
  line-height: 12px;
  display: inline-block;
  font-family: "InterstateSound Tnum","Interstate","Lucida Grande","Lucida Sans Unicode","Lucida Sans",Garuda,Verdana,Tahoma,sans-serif;
  font-weight: 100;
  text-decoration: none;


  ::before {
    display: inline-block;
    margin-right: 5px;
    content: "";
    width: 16px;
    height: 12px;
    vertical-align: top;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+c3RhdHNfcGxheSA0PC90aXRsZT48cGF0aCBkPSJNNCAxM1YzbDkgNS05IDV6IiBmaWxsPSIjOTk5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=);
  }
`;

const Like = styled(Play)`
:hover {
  color: #333;
}
::before {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+c3RhdHNfbGlrZXNfZ3JleTwvdGl0bGU+PHBhdGggZD0iTTEwLjgwNSAzYy0yLjAyIDAtMi44MDQgMi4zNDUtMi44MDQgMi4zNDVTNy4yMTMgMyA1LjE5NiAzQzMuNDk0IDMgMS43NDggNC4wOTYgMi4wMyA2LjUxNGMuMzQ0IDIuOTUzIDUuNzI1IDYuNDc5IDUuOTYzIDYuNDg3LjIzOC4wMDggNS43MzgtMy43MjIgNS45ODgtNi41QzE0LjE4OCA0LjIwMSAxMi41MDcgMyAxMC44MDUgM3oiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==);
}

`;
const Repost = styled(Like)`
::before {
  background-size: 16px 16px;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+c3RhdHNfcmVwb3N0PC90aXRsZT48cGF0aCBkPSJNMiA2djVjMCAxLjEwNS45MDIgMiAyLjAwOSAyaDYuOTg3SDEwbC0yLTJINFY2aC0uNUg2TDMgMyAwIDZoMnptNC0zaC0uOTk2IDYuOTg3QzEzLjA5OCAzIDE0IDMuODk1IDE0IDV2NWgtMlY1SDhMNiAzem0xMCA3aC02bDMgMyAzLTN6IiBmaWxsPSIjOTk5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)
`;
const Comment = styled(Like)`
::before {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+c3RhdHNfY29tbWVudDwvdGl0bGU+PHBhdGggZD0iTTUgM2MtMS4xMDUgMC0yIC44ODctMiAyLjAwNnYyLjk4OEMzIDkuMTAyIDMuODg3IDEwIDUgMTBoNmMxLjEwNSAwIDItLjg4NyAyLTIuMDA2VjUuMDA2QTEuOTk4IDEuOTk4IDAgMCAwIDExIDNINXptMCA3djNsMy0zSDV6IiBmaWxsPSIjOTk5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=);
}
`;


const TrackInteractions = function (props) {
  return (
    <div>
      <List id={"interactive-list"}>
        <li><Play><span>{props.track.numPlays}</span></Play></li>
        <li><Like href={""}><span>19</span></Like></li>
        <li><Repost href={""}><span>{props.track.numReposts}</span></Repost></li>
        <li><Comment href={""}><span>{props.track.numComments}</span></Comment></li>
      </List>
    </div>
  )
}

export { TrackInteractions, List, Like };