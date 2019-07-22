import React from 'react';
import ReactDOM from 'react-dom';
import Track from './components/Track.jsx';
import AnchorRelatedTracks from './styled-comps/AnchorRelatedTracks.jsx';
import RelatedTrackList from './styled-comps/RelatedTrackList.jsx';
import styled from 'styled-components';


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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { relatedTracks: [], artistPopUpOpen: false };
    this.artistPopUpListener = this.artistPopUpListener.bind(this);
  }

  componentDidMount() {
    // uncommented randomId
    console.log(this.props.path)
    let id = this.props.path || Math.ceil(Math.random() * 100);
    // added id to end point
    fetch(`/api/track/${id}`, {
      method: 'GET'
    })
      .then(data => data.json())
      // .then(res => res.text()) // convert to plain text
      // .then(text => console.log('TEXT', text))
      .then(jsonData => {
        console.log('PATH => ', this.props.path);
        console.log('RelatedTracks - ', jsonData);
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


  render() {
    let relatedTracks = this.state.relatedTracks;
    if (relatedTracks.length > 0) {
      relatedTracks = relatedTracks.map(track => <Track key={track.id} track={track} artistPopUp={this.state.artistPopUpOpen} artistPopUpHandler={this.artistPopUpListener} />);
    }
    return (
        <Sidebar>
          <div>
            <AnchorRelatedTracks textHeader={"Related tracks"} imageSize={"28px 28px"} imageUrl={"url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCI+PHBhdGggZmlsbD0iIzk5OSIgZD0iTTUgMTJoMnY0SDV6TTIxIDEyaDJ2NGgtMnpNMTcgMTBoMnY4aC0yek05IDhoMnYxMkg5ek0xMyA1aDJ2MThoLTJ6Ii8+PC9zdmc+)"}/>
            <RelatedTrackList>
              {relatedTracks}
            </RelatedTrackList>
          </div>
          <div>
            <AnchorInPlaylists textHeader={"In playlists"} imageSize={"18px 18px"} imageUrl={"url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+aWNfcGxheWxpc3RfMTg8L3RpdGxlPjxnIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTIgNmgxMHYxMEgyeiIvPjxwYXRoIGZpbGwtb3BhY2l0eT0iLjciIGQ9Ik01IDJoMTF2MTBoLTJWNEg1eiIvPjwvZz48L3N2Zz4=)"}/>
          </div>
        </Sidebar>
    );
  }
}


ReactDOM.render(<App path={window.location.pathname.slice(1, -1)}/>, document.getElementById('sidebar-views'));
