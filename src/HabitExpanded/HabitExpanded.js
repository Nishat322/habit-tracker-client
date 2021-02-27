import React, { Component } from 'react'

import Habit from '../Habit/Habit'
import './HabitExpanded.css'

class HabitExpanded extends Component {
    render() { 
        return (  
            <div className = 'HabitExpanded'>
                <Habit
                    id = {this.props.id}
                    title = {this.props.title}
                    description = {this.props.description}
                />
                <div className = 'HabitExpanded__content'>
                    <p>Your goal is : {this.props.goal} days</p>
                    <p>{this.props.motivation}</p>
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