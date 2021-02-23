import React, { Component } from 'react'

import Header from '../Header/Header'
import LandingPage from '../LandingPage/LandingPage'
import RegisterForm from '../RegisterForm/RegisterForm'
import LoginForm from '../LoginForm/LoginForm'
import HabitApp from '../HabitApp/HabitApp'

import STORE from '../store'
import './App.css'

class App extends Component {
  render() {
    const {habits} = STORE
    return (
      <div className='App'>
        <Header/>
        <LandingPage/>
        <RegisterForm/>
        <LoginForm/>
        <HabitApp habits = {habits}/>
      </div>
    )
  }
}

export default App;