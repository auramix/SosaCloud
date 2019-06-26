import React from 'react';
import ReactDOM from 'react-dom';
import Track from './components/Track.jsx';
import RelatedTrackList from './styled-comps/RelatedTrackList.jsx';
import styled from 'styled-components';


const StyledTrack = styled(Track)`
  :hover {
    .test {
      visibility: visible;
    }
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <RelatedTrackList>
        <StyledTrack />
    </RelatedTrackList>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('App')
);