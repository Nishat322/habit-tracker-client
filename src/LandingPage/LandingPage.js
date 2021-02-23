import React, { Component } from 'react'

//props.description => description of the project
//button sign up will lead to registration page
class LandingPage extends Component {
    render() { 
        return (  
            <div className = 'LandingPage'>
                <h2>My Capstone Project</h2>
                    <h3>{this.props.description}</h3>
                <button className = 'button'>
                        Register
                </button> 
            </div>
        )
    }
}
 
export default LandingPage