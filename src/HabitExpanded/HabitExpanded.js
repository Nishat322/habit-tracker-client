import React, { Component } from 'react'

import Habit from '../Habit/Habit'
import './HabitExpanded.css'

class HabitExpanded extends Component {
    render() { 
        const {habit} = this.props
        return (  
            <div className = 'HabitExpanded'>
                <Habit
                    id = {habit.id}
                    title = {habit.title}
                />
                <div className = 'HabitExpanded__content'>
                    <p>{habit.description}</p>
                </div>
                <div className = 'HabitExpanded__button'>
                    <button className = 'button'>
                        Delete
                    </button>
                    <button className = 'button'>
                        Edit
                    </button>
                </div>

            </div>
        )
    }
}

HabitExpanded.defaultProps = {
    habit:{
        goal: '',
        motivation: ''
    }
}
 
export default HabitExpanded;