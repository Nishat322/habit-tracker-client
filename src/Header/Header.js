import React, { Component } from 'react'

import './Header.css'

//leads to Login Page

class Header extends Component {
    render() { 
        return (  
            <div className = 'Header'>
                <h1>My Habits</h1>
                <button className = 'button'>
                    Log In
                </button>
            </div>
        )
    }
}
 
export default Header;