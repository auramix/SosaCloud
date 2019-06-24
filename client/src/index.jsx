import React from 'react';
import ReactDOM from 'react-dom';
import ListTrack from './components/ListTrack.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<ul>
      <ListTrack />
    </ul>);
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('App')
);