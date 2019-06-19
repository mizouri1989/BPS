import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './component/routes'

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
       <Routes/>
       </BrowserRouter>
      </div>
    );
  }
}

export default App;