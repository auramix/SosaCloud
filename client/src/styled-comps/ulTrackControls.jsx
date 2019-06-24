import React from 'react';
import styled from 'styled-components';

const UList = styled.ul`
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

const ULTrackControls = function(props) {
  return (
    <UList>
      <li><span>Play</span></li>
      <li><span>Like</span></li>
      <li><span>Repost</span></li>
      <li><span>Comment</span></li>
    </UList>
  )
}

export default ULTrackControls;