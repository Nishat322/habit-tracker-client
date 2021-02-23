import React, { Component } from 'react'

import './Header.css'

class Header extends Component {
    render() { 
        return (  
            <div className = 'Header'>
                <h1>My Habits</h1>
                <button>LogIn</button>
            </div>
        )
    }
}
 
export default Header;