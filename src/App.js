import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false
    }
  }

  toggle = () => {
    this.setState({isClicked: !this.state.isClicked});
  }

  render() {
    console.log('***THIS IS STATE***', this.state.isClicked)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <button onClick={this.toggle}>{this.state.isClicked ? 'On' : 'Off'}</button>
      </header>
    </div>
  );
}
}

export default App;
