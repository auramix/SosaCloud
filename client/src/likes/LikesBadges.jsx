import styled from 'styled-components';
import React from 'react';
import Badge from './Badge.jsx';


const LikesBadges = (props) => {
  let badges = props.userIds.map(id => <Badge key={id} userId={id}/>)

  return (
    <div>
      <ul>
        {badges}
      </ul>     
    </div>
  );
  
}

export default LikesBadges;