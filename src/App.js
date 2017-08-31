import React, { Component } from 'react';
import Login from './Login';
import './App.css'

class App extends Component {
  
  render() {
    return (
      <div className='form__container'>
        <Login />
      </div>
    );
  }
}

export default App;
