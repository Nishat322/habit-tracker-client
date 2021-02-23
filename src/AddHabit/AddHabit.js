import React, { Component } from 'react'

import './AddHabit.css'
//Cancel leads you back to My Habit Page
//Add Habit also after adding leads you back to the Habits page
class AddHabit extends Component {
    render() { 
        return (  
            <div className = 'AddHabit'>
                <h2>Add New Habit</h2>
                <form className = 'AddHabit__form'>
                    <div className = 'title'>
                        <label htmlFor ='AddHabit__title'> Habit Title</label>
                        <input type = 'text' name = 'AddHabit__title' id = 'AddHabit__title' placeholder = 'Title' required/>
                    </div> <br/>
                    <div className = 'description'>
                        <label htmlFor = 'AddHabit__description'> Description</label>
                        <textarea name = 'AddHabit__description' id = 'AddHabit__description' placeholder = 'describe habit'/>
                    </div> <br/>
                    <div className = 'motivational_message'>
                        <label htmlFor = 'AddHabit__motivational_message'>Motivational Message</label>
                        <input type = 'text' name = 'AddHabit__motivational_message' id = 'AddHabit__motivational_message'/>
                    </div>
                    <div className = 'AddHabit__buttons'>
                        <button>Cancel</button> {' '}
                        <button type = 'submit'>Add Habit</button>
                    </div>
                </form>
            </div>
        )
    }
}
 
export default AddHabit;