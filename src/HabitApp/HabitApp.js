import React, { Component } from 'react'

import HabitList from '../HabitList/HabitList'

class HabitApp extends Component {
    render() { 
        return ( 
            <div className = 'HabitApp'>
                <h2>My Habits</h2>
                <button className = 'button'>Add New Habit</button>
                <HabitList habits = {this.props.habits}/>
            </div> 
        )
    }
}
 
export default HabitApp;