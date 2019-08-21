import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../services/token-service'
import './Nav.css'

class Nav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }
  render() {
    const adminLinks = TokenService.hasAuthToken()
      ? <><Link to='/manage'>Manage Products</Link>&nbsp;|&nbsp;<Link onClick={this.handleLogoutClick} to='/'>Sign Out</Link></>
      : <Link to='/login'>Sign In</Link>
    return (
      <nav role="navigation">
        <div className="app-title">
          <Link to="/">graze</Link>
        </div>
        <div className="admin-tasks">
          {adminLinks}
        </div>
      </nav>
    );
  }
}


export default Nav;