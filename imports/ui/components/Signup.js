import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Accounts} from 'meteor/accounts-base'
export default class Signup extends Component {
state = {
    error: ""
}
    

formSubmit = (e) => {
    e.preventDefault()

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Accounts.createUser({email, password}, (err) => {
        console.log('Signup callback',err)
    })
}

render() {
    return (
      <div>
        <form onSubmit={this.formSubmit}>
            <input type="email" ref="email" name="email" placeholder="Email"/>
            <input type="password" ref="password" name="password" placeholder="Password"/>
            <button> Create Account</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
        <Link to="/">Already have an account?</Link>
      </div>
    )
  }
}
