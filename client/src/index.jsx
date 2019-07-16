import React from 'react';
import ReactDOM from 'react-dom';
import Track from './components/Track.jsx';
import AnchorRelatedTracks from './styled-comps/AnchorRelatedTracks.jsx';
import RelatedTrackList from './styled-comps/RelatedTrackList.jsx';
import styled from 'styled-components';

const PageDiv = styled.div`
  position: relative;
  background-color: #EEE;
  height: 5000px;
  width: 5000px;
`;

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
          <AnchorRelatedTracks />
          <RelatedTrackList>
            {relatedTracks}
          </RelatedTrackList>
        </Sidebar>
    );
  }
}


ReactDOM.render(<App path={window.location.pathname.slice(1, -1)}/>, document.getElementById('sidebar-views'));
