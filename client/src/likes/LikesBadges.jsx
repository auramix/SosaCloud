import styled from 'styled-components';
import React from 'react';
import Badge from './Badge.jsx';

const BadgesList = styled.ul`
  list-style: none;
  display: flex;
  padding-inline-start: 0px;
  justify-content: left;
`;


const LikesBadges = (props) => {
  let badges = props.userIds.map(obj => <Badge key={obj.user_id} userId={obj.user_id}/>)

  return (
    <div>
      <BadgesList>
        {badges}
      </BadgesList>     
    </div>
  );
  
}

export default LikesBadges;