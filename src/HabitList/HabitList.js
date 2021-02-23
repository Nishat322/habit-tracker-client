import React, { Component } from 'react'

import Habit from '../Habit/Habit'
import './HabitList.css'

class HabitList extends Component {

    render() { 
        const habits = this.props.habits.map((habit, i) => <Habit {...habit} key = {i}/>)
        return (  
            <div className = 'HabitList'>
                {habits}
            </div>
        )
    }
}

HabitList.defaultProps = {
    habits: []
}
 
export default HabitList;