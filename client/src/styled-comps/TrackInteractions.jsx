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
    background-image: url(https://sosacloud-icon-assets.s3-us-west-1.amazonaws.com/download.svg);
  }
`;

const Like = styled(Play)`
:hover {
  color: #333;
}
::before {
  background-image: url(https://sosacloud-icon-assets.s3-us-west-1.amazonaws.com/like.svg);
}

`;
const Repost = styled(Like)`
::before {
  background-size: 16px 16px;
  background-image: url(https://sosacloud-icon-assets.s3-us-west-1.amazonaws.com/repost.svg)
`;
const Comment = styled(Like)`
::before {
  background-image: url(https://sosacloud-icon-assets.s3-us-west-1.amazonaws.com/comment.svg);
}
`;


const TrackInteractions = function (props) {
  return (
    <div>
      <List id={"interactive-list"}>
        <li><Play><span>{props.track.numPlays}</span></Play></li>
        <li><Like href={""}><span>{props.likes}</span></Like></li>
        <li><Repost href={""}><span>{props.track.numReposts}</span></Repost></li>
        <li><Comment href={""}><span>{props.track.numComments}</span></Comment></li>
      </List>
    </div>
  )
}

export { TrackInteractions, List, Like };