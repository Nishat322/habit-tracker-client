import React, { Component } from 'react'

import Header from '../Header/Header'
import LandingPage from '../LandingPage/LandingPage'

import STORE from '../store'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        {' '}
        <LandingPage description = {STORE.description}/>
      </div>
    )
  }
}

export default App;