import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Login extends Component {
  render() {
    return (
      <div>
        <p>Login Component</p>
        <Link to="/signup">Signup</Link>
      </div>
    )
  }
}
