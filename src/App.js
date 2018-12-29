import React, { Component } from 'react';
import './App.css';
import Main from './components/Pages/Main.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="body">
          <Main />
        </section>
      </div>
    );
  }
}

export default App;
