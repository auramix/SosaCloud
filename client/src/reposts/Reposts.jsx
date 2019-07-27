import styled from 'styled-components';
import React from 'react';
import AnchorRelatedTracks from '../styled-comps/AnchorRelatedTracks.jsx';
import RepostsBadges from '../likes/LikesBadges.jsx';


export default class Reposts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userIds: [], reposts: 0};
  }

  componentDidMount() {
    let trackId = this.props.trackId || Math.ceil(Math.random() * 100);

    fetch(`/api/track/reposts/${trackId}`, {
      method: 'GET'
    })
      .then(data => data.json())
      .then(jsonData => {
        if (Array.isArray(jsonData)) {
          console.log('This is our userIds jsonData from Reposts component: ', jsonData);
          this.setState({ userIds: jsonData.slice(0, 9), reposts: jsonData.length })
        }
      })
      .catch((err) => {
        console.log('***Client componentDidMount fetch error in Reposts component***, ', err);
      })
  }

  
  render() {
    let reposts = this.state.reposts === 1 ? " repost" : " reposts";

    return (
      <div>
        <AnchorRelatedTracks textHeader={this.state.reposts + reposts} imageSize={"20px 20px"} imageUrl={"url(https://sosacloud-icon-assets.s3-us-west-1.amazonaws.com/repost.svg)"}/>
        <RepostsBadges userIds={this.state.userIds}/>
      </div>
    );
  }
}