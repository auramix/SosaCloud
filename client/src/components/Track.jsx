import React from 'react';
import { Artwork } from '../styled-comps/Artwork.jsx';
import { TrackInfo } from '../styled-comps/TrackInfo.jsx';
import styled from 'styled-components';


const StyledDiv = styled.div`
  height: 62px;
  width:306px;
  :hover {
    .overlay_buttons {
      visibility: visible;
    }
  }
  z-index: 0;
`;



export default class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreClicked: false,
      likeClicked: false
    }
    this.moreButtonHandler = this.moreButtonHandler.bind(this);
    this.likeButtonHandler = this.likeButtonHandler.bind(this);
    this.globalEventListener = this.globalEventListener.bind(this);
    this.removeGlobalListener = this.removeGlobalListener.bind(this);
  }

  moreButtonHandler() {
    this.setState({ moreClicked: !this.state.moreClicked });
    this.globalEventListener();
  };

  likeButtonHandler() {
    this.setState({ likeClicked: !this.state.likeClicked });
  }

  globalEventListener() {
    document.body.addEventListener('click', e => {
      if (e.target.id !== 'more-btn') {
        this.setState({ moreClicked: false });
      }
      this.removeGlobalListener();
    });
  }

  removeGlobalListener() {
    document.body.removeEventListener('click', e => {
      if (e.target.id !== 'more-btn') {
        this.setState({ moreClicked: false });
      }
    })
  }

  render() {
    return (
      <li>
        <StyledDiv >
          <Artwork imageUrl={this.props.track.trackImgUrl} clicked={this.state.moreClicked} />
          <TrackInfo track={this.props.track} moreClicked={this.state.moreClicked} moreClickHandler={this.moreButtonHandler} imageUrl={"https://pics01212001.s3-us-west-1.amazonaws.com/4"} likeClicked={this.state.likeClicked} likeClickHandler={this.likeButtonHandler} />
        </StyledDiv>
      </li>
    );
  }
}