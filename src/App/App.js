import React, { Component } from 'react'

import Header from '../Header/Header'
import LandingPage from '../LandingPage/LandingPage'
import RegisterForm from '../RegisterForm/RegisterForm'
import LoginForm from '../LoginForm/LoginForm'

//import STORE from '../store'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <LandingPage/>
        <RegisterForm/>
        <LoginForm/>
      </div>
    )
  }
}

export default App;