import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {  
  render() {
    return (
      <nav role="navigation">
        <div className="app-title">
          <Link to="/">graze</Link>
        </div>
        <div className="admin-tasks">
          <strong>admin</strong>&nbsp;|&nbsp;<Link to='/edit-market/456'>update market</Link>&nbsp;|&nbsp;<Link to="/create-vendor">new vendor</Link>
        </div>
      </nav>
    );
  }
}


export default Nav;