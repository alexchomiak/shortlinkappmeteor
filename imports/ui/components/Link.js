import React, { Component } from 'react'
import {createBrowserHistory} from 'history'


export default class Link extends Component {
  onLogout = () => {
      console.log('pushhh')
      this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <p> Link Component</p>
        <button onClick={this.onLogout}>Logout</button>
      </div>
    )
  }
}
