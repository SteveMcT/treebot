import React, { Component } from 'react';
import './App.scss';

interface StateType {
  users: number;
  servers: number;
}

class App extends Component<any, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      users: 10,
      servers: 69
    };
  }
  render() {
    return (
      <div id="app">
        <header>
          <h1>TREEBOT</h1>
          <nav>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Invite</a>
            <a href="">Vote</a>
            <a href="">Support</a>
          </nav>
        </header>
        <main>
          <div id="greeting">
            <p className="animate__animated animate__bounce" id ="greeting-small">Welcome to</p>
            <h1 id="greeting-header">Treebot</h1>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
