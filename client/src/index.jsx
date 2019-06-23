import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h2>Hello, world!</h2>
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('App')
);