import React from 'react';
import Artwork from '../styled-comps/Artwork.jsx';
import ArtistAnchor from '../styled-comps/ArtistAnchor.jsx';

/* 
<ul>
  <li>
  <div>
    <Artwork />
    <div>
      <ArtistAnchor>
        <span>someArtist</span>
      </ArtistAnchor
    </div>
  </div>
  </li>
</ul>
*/

export default class ListTrack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <div>
          <Artwork />
          <div>
            <ArtistAnchor>
              <span>someArtist</span>
            </ArtistAnchor>
          </div>
        </div>
      </li>
    );
  }
}