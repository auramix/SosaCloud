import styled from 'styled-components';
import React from 'react';
import Badge from './Badge.jsx';


const LikesBadges = (props) => {
  let badges = props.userIds.map(obj => <Badge key={obj.user_id} userId={obj.user_id}/>)

  return (
    <div>
      <ul>
        {badges}
      </ul>     
    </div>
  );
  
}

export default LikesBadges;