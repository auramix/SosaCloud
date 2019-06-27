import React from 'react';
import ReactDOM from 'react-dom';
import Track from './components/Track.jsx';
import RelatedTrackList from './styled-comps/RelatedTrackList.jsx';
import styled from 'styled-components';

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

const StyledTrack = styled(Track)`
  height: 240px;
  width: 58.18px;
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
      <PageDiv>
        <Sidebar>
          <RelatedTrackList>
            <StyledTrack />
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