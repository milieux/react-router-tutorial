import React from 'react'
import { IndexLink } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render() {
    return (
        <div>
            <h1>Hello from App.js</h1>
            <ul role="nav">
                <li><IndexLink to="/" activeStyle={{ color: 'red' }}>Home</IndexLink></li>
                <li><NavLink to="/about" onlyActiveOnIndex={true} >About</NavLink></li>
                <li><NavLink to="/repos" activeClassName="cool">Repos</NavLink></li>
            </ul>

            {this.props.children}
        </div>
    )
  }
})
