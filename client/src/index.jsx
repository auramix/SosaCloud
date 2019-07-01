import React from 'react';
import ReactDOM from 'react-dom';
import Track from './components/Track.jsx';
import RelatedTrackList from './styled-comps/RelatedTrackList.jsx';
import styled from 'styled-components';
//import api from '../../server/api.js';

const PageDiv = styled.div`
  background-color: #EEE;
  height: 5000px;
  width: 5000px;
`;

const Sidebar = styled.div`
  position: absolute;
  background-color: #fff;
  margin-right: 225px;
  top: 30px;
  right: 0;
  bottom: auto;
  width: 300px;
  margin-bottom: 50px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { relatedTracks: [] };
  }

  // componentDidMount() {
  //   let randomId = Math.ceil(Math.random() * 100);
  //   api.getRelatedTracks(dandomId, (err, results) => {
  //     if (err) {
  //       console.log('*** No tracks returned ***');
  //     } else {
  //       this.setState({ relatedTracks: results });
  //     }
  //   });
  // }


  render() {
    let relatedTracks = this.state.relatedTracks.map(track => <Track track={track} />);
    return (
      <PageDiv>
        <Sidebar>
          <RelatedTrackList>
            {relatedTracks}
          </RelatedTrackList>
        </Sidebar>
      </PageDiv>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('App')
);