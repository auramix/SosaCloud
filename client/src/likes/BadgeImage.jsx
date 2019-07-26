import styled from 'styled-components';
import React from 'react';


const BadgeSpan = styled.span`
  background-image: ${props => `url(${props.imageUrl})`};
  border-radius: 50%;
  display: block;
  width: 40px;
  height: 40px;
  border: 2px solid #fff;
  box-sizing: border-box;
  background-origin: border-box;
}
`;


const BadgeImage = (props) => {
  
  return (
    <BadgeSpan {...props} />
  );
  
}

export default BadgeImage;