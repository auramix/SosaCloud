import styled from 'styled-components';
import React from 'react';
import UserPopUp from '../styled-comps/ArtistPopUp.jsx';

const BadgeItem = styled.li`
  margin-right: -8px;
  :hover {
    .artist-pop-up {
      visibility: visible;
    }
  }
`;

const BadgeAnchor = styled.a`
  position: relative;
  height: 0px;
  width: 0px;
`;

const Badge = (props) => {
  
  return (
    <BadgeItem>
      <BadgeAnchor>
         <UserPopUp artistName={props.userId} badge={true}/>
      </BadgeAnchor>
    </BadgeItem>
  );
  
}

export default Badge;