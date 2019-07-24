import React from 'react';
import ReactDOM from 'react-dom';
import Track from './components/Track.jsx';
import AnchorRelatedTracks from './styled-comps/AnchorRelatedTracks.jsx';
import RelatedTrackList from './styled-comps/RelatedTrackList.jsx';
import styled from 'styled-components';
import Playlists from './in_playlists/Playlists.jsx';


const Sidebar = styled.div`
  position: absolute;
  background-color: #fff;
  margin-right: 119px;
  right: 0;
  bottom: -80px;
  width: 300px;
  margin-bottom: 50px;
  margin-top: 20px;
`;

const AnchorInPlaylists = styled(AnchorRelatedTracks)`
  background-size: 18px 18px;
`;

const RelatedTracksDiv = styled.div`
  margin-bottom: 20px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { relatedTracks: [], artistPopUpOpen: false, playlists: false };
    this.artistPopUpListener = this.artistPopUpListener.bind(this);
    this.renderPlaylists = this.renderPlaylists.bind(this);
  }

  componentDidMount() {
    let id = this.props.path || Math.ceil(Math.random() * 100);
    // added id to end point
    fetch(`/api/track/${id}`, {
      method: 'GET'
    })
      .then(data => data.json())
      .then(jsonData => {
        if (Array.isArray(jsonData)) {
          this.setState({ relatedTracks: jsonData })
        }
      })
      .catch((err) => {
        console.log('***Client componentDidMount fetch error***, ', err);
      })
  }

  artistPopUpListener(e) {
    this.setState({ artistPopUpOpen: !this.state.artistPopUpOpen })
  }

  renderPlaylists() {
    this.setState({playlists: true});
  }


  render() {
    let relatedTracks = this.state.relatedTracks;
    if (relatedTracks.length > 0) {
      relatedTracks = relatedTracks.map(track => <Track key={track.id} track={track} artistPopUp={this.state.artistPopUpOpen} artistPopUpHandler={this.artistPopUpListener} />);
    }

    let inPlaylists = null;
    if (this.state.playlists) {
      inPlaylists = <AnchorInPlaylists textHeader={"In playlists"} imageSize={"18px 18px"} imageUrl={"url(https://sosacloud-icon-assets.s3-us-west-1.amazonaws.com/inPlaylists.svg)"}/>
    }

    return (
        <Sidebar>
          <RelatedTracksDiv>
            <AnchorRelatedTracks textHeader={"Related tracks"} imageSize={"28px 28px"} imageUrl={"url(https://sosacloud-icon-assets.s3-us-west-1.amazonaws.com/relatedTracks.svg)"}/>
            <RelatedTrackList>
              {relatedTracks}
            </RelatedTrackList>
          </RelatedTracksDiv>
          <div>
            {inPlaylists}
            <Playlists renderPlaylists={this.renderPlaylists}/>
          </div>
        </Sidebar>
    );
  }
}


ReactDOM.render(<App path={window.location.pathname.slice(1, -1)}/>, document.getElementById('sidebar-views'));
