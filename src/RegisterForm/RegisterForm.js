import React, { Component } from 'react'

import './RegisterForm.css'

//Log In is link to Login Page
// Full Name, username and password required
//Register Leads you to My Habits Page
//Cancel leads you back to the landing page
class RegisterForm extends Component {
    render() { 
        return (  
            <div className = 'RegisterForm'>
                <h2>New User</h2>
                    <p>Not a new user? Log In</p>
                <form className = 'RegisterForm__form'>
                    <div className = 'full-name'>
                        <label htmlFor = 'RegisterForm__full_name'>
                            Full Name
                        </label> {' '}
                        <input type = 'text' name = 'RegisterForm__full_name' id = "RegisterForm__full_name" required/>
                    </div>
                    <br/>
                    <div className = 'username'>
                        <label htmlFor = 'RegisterForm__username'>
                            Username
                        </label> {' '}
                        <input type = 'text' name = 'RegisterForm__username' id = 'RegisterForm__username' required/>
                    </div>
                    <br/>
                    <div className = 'password'>
                        <label htmlFor = 'RegisterForm__password'>
                            Password 
                        </label> {' '}
                        <input type = 'password' name = 'RegisterForm__password' id = 'RegisterForm__password' required/>
                    </div>
                    <br/>
                    <div className = 'repeat_password'>
                        <label htmlFor = 'RegisterForm__repeat_password'>
                            Repeat Password
                        </label> {' '}
                        <input type = 'password' name = 'RegisterForm__repeat_password' id = 'RegisterForm__repeat_password' required/>
                    </div>
                    <button type = 'submit'>Register</button>
                    <button>Cancel</button>
                </form>
            </div>
        )
    }
}
 
export default RegisterForm;