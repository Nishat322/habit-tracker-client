import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Habit from '../Habit/Habit'
import './HabitList.css'

class HabitList extends Component {

    render() { 
        return (  
            <div className = 'HabitList'>
                <h2>My Habits</h2>
                <ul>
                    {this.props.habits.map(habit =>
                        <li key = {habit.id}>
                            <Habit 
                                id = {habit.id}
                                title = {habit.title}
                                description = {habit.description}
                            />
                        </li>    
                    )}
                </ul>
                <br/>
                <Link to = '/add-habit'>
                    <button className = 'button'>Add New Habit</button>
                </Link>                
            </div>
        )
    }
}

HabitList.defaultProps = {
    habits: []
}
 
export default HabitList;