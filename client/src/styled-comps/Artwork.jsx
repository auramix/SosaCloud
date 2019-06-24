import styled from 'styled-components';


const Artwork = styled.span`
  background-image: url(${props => props.imageUrl});
  width: 50px;
  height: 50px;
  box-shadow: rgba(0,0,0,.1)0 0 0 1px inset;
  display: block;
  position: relative;
`; 

export default Artwork;