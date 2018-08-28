import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReadyReactExample from './ready-react-example/ReadyReactExample';


const READY_COMPONENT = '<ReadyReactExample/>';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ready React <span>{READY_COMPONENT}</span></h1>
        </header>
        <section>
          <ReadyReactExample/>
        </section>
      </div>
    );
  }
}

export default App;
