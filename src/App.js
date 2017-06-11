import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
          </div>
          <h2>Mike Villis</h2>
        </div>
        <p className="App-intro">
          Coming soon.
        </p>
        <div className='Twitter'>
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'mvillis'
            }}
            options={{
              username: 'mvillis',
              height: '500'
            }}
            onLoad={() => console.log('Timeline is loaded!')}
          />
      </div>
      </div>
    );
  }
}

export default App;
