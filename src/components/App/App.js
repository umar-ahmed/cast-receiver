import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Player from '../Player/Player';
import './App.css';

const cast = window.cast;

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let castReceiverManager = new cast.receiver.CastReceiverManager.getInstance();
    castReceiverManager.start();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} data={this.data}/>
            <Route exact path="/player" component={Player}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
