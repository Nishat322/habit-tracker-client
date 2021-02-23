import React, { Component } from 'react'

import './LoginForm.css'

//Register links to Registration Page
// Compare inputted username and password to one save in database
// Sign In leads to My Habits Page
// Cancel Brings back to Landing Page
class Login extends Component {
    render() { 
        return (  
            <div className = 'Login'>
                <form className = 'Login__form'>
                    <h2>Returning User</h2>
                        <p>New User? Register</p>
                    <div className = 'username'>
                        <label className = 'Login__username'>
                            Username
                        </label> {' '}
                        <input type = 'text' name = 'Login__username' id = 'Login__username'/>
                    </div>
                    <div className = 'password'>
                        <label className = 'Login__password'>
                            Password
                        </label> {' '}
                        <input type = 'password' name = 'Login__username' id = 'Login__password'/>
                    </div>
                    <button className = 'button' type = 'submit'>
                        Sign In
                    </button>
                    <button className = 'button'> Cancel </button>
                </form>
            </div>
        )
    }
}
 
export default Login