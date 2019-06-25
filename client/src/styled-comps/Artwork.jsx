import styled from 'styled-components';


const Artwork = styled.span`
  background-image: url(${props => props.imageUrl});
  margin-right: 10px;
  padding: 5px 6px;
  width: 50px;
  height: 50px;
  position: relative;
  box-shadow: rgba(0,0,0,.1)0 0 0 1px inset;
  float: left;
`; 

export default Artwork;