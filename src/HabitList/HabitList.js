import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Habit from '../Habit/Habit'
import './HabitList.css'

class HabitList extends Component {

    render() { 
        const habits = this.props.habits.map((habit, i) => <Habit {...habit} key = {i}/>)
        return (  
            <div className = 'HabitList'>
                <h2>My Habits</h2>
                {habits}
                <br/>
                <button className = 'button'>Add New Habit</button>
            </div>
        )
    }
}

HabitList.defaultProps = {
    habits: []
}
 
export default HabitList;