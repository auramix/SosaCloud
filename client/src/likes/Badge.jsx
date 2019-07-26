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

const Badge = (props) => {
  
  return (
    <BadgeItem>
      <a>
         <UserPopUp artistName={props.userId} badge={true}/>
      </a>
    </BadgeItem>
  );
  
}

export default Badge;