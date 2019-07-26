import styled from 'styled-components';
import React from 'react';


const BadgeSpan = styled.span`
  background-image: ${props => props.imageUrl};
  border-radius: 50%;
`;


const BadgeImage = (props) => {
  
  return (
    <div>
      <BadgeSpan />
    </div>
  );
  
}

export default BadgeImage;