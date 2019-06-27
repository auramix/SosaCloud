import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
`;

const Button = styled.button`
  border-bottom: 1px solid #e5e5e5;
  text-indent: 30px;
  background-color: #fff;
  display: block;
  border: none;
  height: 32px;
  position: relative;
  padding-right: 28px;
  padding-left: 3px;
  text-align: left;
  width: 100%;
  font-size: 100%

  ::before {
    content: "";
    content: "";
    display: block;
    position: relative;
    background-repeat: no-repeat;
    background-position: center center;
    width: 20px;
    height: 20px;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
`;

const RepostButton = styled(Button)`
  ::before {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+c3RhdHNfcmVwb3N0PC90aXRsZT48cGF0aCBkPSJNMiA2djVjMCAxLjEwNS45MDIgMiAyLjAwOSAyaDYuOTg3SDEwbC0yLTJINFY2aC0uNUg2TDMgMyAwIDZoMnptNC0zaC0uOTk2IDYuOTg3QzEzLjA5OCAzIDE0IDMuODk1IDE0IDV2NWgtMlY1SDhMNiAzem0xMCA3aC02bDMgMyAzLTN6IiBmaWxsPSIjMjIyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=);
  }
`;

const MoreButtonList = function(props) {
  return (
    <StyledDiv>
      <RepostButton title={"Repost"}>Repost</RepostButton>
    </StyledDiv>
  )
}

export default MoreButtonList;