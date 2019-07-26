import styled from 'styled-components';
import React from 'react';
import UserPopUp from '../styled-comps/ArtistPopUp.jsx';



const Badge = (props) => {
  
  return (
    <li>
      <a>
         <UserPopUp artistName={props.userId} badge={true}/>
      </a>
    </li>
  );
  
}

export default Badge;