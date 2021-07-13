import React, { Component } from 'react';
import DisplayData from './components/DisplayData';
import FinderComponent from './components/FinderComponent';

export default class App extends Component {
  render() {
    return (
      <div>
        <FinderComponent />
        <DisplayData />
      </div>
    )
  }
}
