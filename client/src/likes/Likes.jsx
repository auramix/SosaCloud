import styled from 'styled-components';
import React from 'react';
import AnchorRelatedTracks from '../styled-comps/AnchorRelatedTracks.jsx';
import LikesBadges from './LikesBadges.jsx';


export default class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userIds: [], likes: 0};
  }

  componentDidMount() {
    let trackId = this.props.trackId || Math.ceil(Math.random() * 100);

    fetch(`/api/track/likes/${trackId}`, {
      method: 'GET'
    })
      .then(data => data.json())
      .then(jsonData => {
        if (Array.isArray(jsonData)) {
          console.log('This is our userIds jsonData from Likes component: ', jsonData);
          this.setState({ userIds: jsonData.slice(0, 9), likes: jsonData.length })
        }
      })
      .catch((err) => {
        console.log('***Client componentDidMount fetch error in Likes component***, ', err);
      })
  }

  
  render() {
    let text = this.state.likes === 1 ? " like" : " likes";

    return (
      <div>
        <AnchorRelatedTracks textHeader={this.state.likes + text} imageSize={"20px 20px"} imageUrl={"url(https://sosacloud-icon-assets.s3-us-west-1.amazonaws.com/like.svg)"}/>
        <LikesBadges userIds={this.state.userIds}/>
      </div>
    );
  }
}