import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from '../Header/Header'
import HabitList from '../HabitList/HabitList'
import HabitExpanded from '../HabitExpanded/HabitExpanded'
import STORE from '../store'
import './App.css'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      habits: [],
      error: null

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
          path = '/my-habits'
          render = {() => <HabitList habits = {this.state.habits}/>}
        />
       
      </div>
    )
  }
}

export default App;