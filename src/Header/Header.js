import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './Header.css'

//leads to Login Page

class Header extends Component {
    render() { 
        return (  
            <div className = 'Header'>
                <Link to = '/my-habits'>
                <h1>Habit Tracker</h1>
                </Link>
                <Link to = {'/login'}>
                    <button className = 'button'>Log In</button>
                </Link>
            </div>
        )
    }
}
 
export default Header;