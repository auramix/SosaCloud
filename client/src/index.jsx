import React from 'react';
import ReactDOM from 'react-dom';
import Track from './components/Track.jsx';
import RelatedTrackList from './styled-comps/RelatedTrackList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <RelatedTrackList>
        <Track />
    </RelatedTrackList>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('App')
);