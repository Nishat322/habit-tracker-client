import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from '../Header/Header'
import HabitList from '../HabitList/HabitList'
import HabitExpanded from '../HabitExpanded/HabitExpanded'
import LandingPage from '../LandingPage/LandingPage'
import LoginForm from '../LoginForm/LoginForm'
import RegistrationForm from '../RegisterForm/RegisterForm'
import {findHabit} from '../habits-helper'
import STORE from '../store'
import './App.css'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      habits: [],
    }
  }

  componentDidMount(){
    //fake api call
    setTimeout(() => this.setState(STORE), 600)
  }
  //ON THIS .ADDHABIT

  render() {
    const {habits} = this.state
    return (
      <div className='App'>
        <Header/>
        <Route 
          exact path = '/'
          component = {LandingPage}
        />
        <Route 
          path = '/my-habits'
          render = {() => <HabitList habits = {habits}/>}
        />
        <Route 
          path = '/habit/:habitId'
          render = {routeProps => {
            const {habitId} = routeProps.match.params
            const habit = findHabit(habits, habitId)
            return <HabitExpanded {...routeProps} habit = {habit}/>
          }}
        />
      </div>
    )
  }
}

export default App;