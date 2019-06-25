import React from 'react';
import Artwork from '../styled-comps/Artwork.jsx';
import ListItemInfo from '../styled-comps/TrackInfo.jsx';

export default class ListTrack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <div >
          <Artwork imageUrl={"https://pics01212001.s3-us-west-1.amazonaws.com/4"}/>
          <ListItemInfo />  
        </div>
      </li>
    );
  }
}