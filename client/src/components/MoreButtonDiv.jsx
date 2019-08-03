import React from 'react';
import MoreButtonList from '../styled-comps/MoreButtonList.jsx';
import styled from 'styled-components';

let orangeBackground = 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iNCIgdmlld0JveD0iMCAwIDE0IDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPm1vcmU8L3RpdGxlPjxnIGZpbGw9IiNGNTAiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiLz48Y2lyY2xlIGN4PSI3IiBjeT0iMiIgcj0iMiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMiIgcj0iMiIvPjwvZz48L3N2Zz4=)';
let greyBackground = 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iNCIgdmlld0JveD0iMCAwIDE0IDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPm1vcmU8L3RpdGxlPjxnIGZpbGw9IiMyMjIiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiLz48Y2lyY2xlIGN4PSI3IiBjeT0iMiIgcj0iMiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMiIgcj0iMiIvPjwvZz48L3N2Zz4=)';

const MoreButton = styled.button`
  min-width: 25px;
  float: left;
  height: 26px;
  margin: 0;
  padding: 2px 11px 2px 10px;
  border-radius: 3px;
  background-color: #fff;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  background-size: 16px 16px;
  background-image: ${props => props.clicked ? orangeBackground : greyBackground};
  border: ${props => props.clicked ? '1px solid #f50' : '1px solid #e5e5e5'};
  
  content: "";
  display: inline-block;
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  z-index: 2;

  :hover {
    border-color: ${props => props.clicked ? '1px solid #f50' : '#ccc'};
  }
  :focus {
    outline: none;
  }
  `;

const MoreButtonDiv = function (props) {
  return (
    <div>
      <MoreButton id={"more-btn" + props.trackId} title={"More"} clicked={props.clicked} onClick={(e) => props.clickHandler(e)} />
    </div>
  )
}

export default MoreButtonDiv;