import React, { Component } from 'react'

import './Habit.css'
//tapping on the name of the habit leads to an extenstion which shows the motivating message
//Edit will allow you to edit the habit => leads to the edit form
//Delete will allow you to delete the habit
class Habit extends Component {


    render() { 
        return (  
            <div className = 'Habit'>
                <div className = 'Habit__row'>
                    <h3>{this.props.title}</h3>
                    <label htmlFor = 'HabitItem__completed'>
                        Fulfilled
                    </label>
                    <input type = 'checkbox' name = 'Habit__completed' id = 'Habit__completed'/>
                </div>
                <div className = 'Habit__description'>
                    {this.props.description}
                </div>
                <button className = 'button'>Delete</button>
            </div>
        )
    }
}

Habit.defaultProps = {
    title: '',
    description: ''
}
 
export default Habit