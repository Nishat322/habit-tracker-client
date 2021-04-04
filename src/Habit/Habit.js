import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './Habit.css'
//tapping on the name of the habit leads to an extenstion which shows the motivating message
//Edit will allow you to edit the habit => leads to the edit form
//Delete will allow you to delete the habit
//Clicking done, and disable for a minute => add count to days completed => state
//on click of the done button the days completed increase by one
class Habit extends Component {

    render() { 
        return (  
            <div className = 'Habit'>
                <div className = 'Habit__row'>
                    <Link to = {`/habit/${this.props.id}`}>
                        <h3>{this.props.title}</h3>
                    </Link>
                </div>
                <div className = 'Date_added'>
                    {this.props.date_added}
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