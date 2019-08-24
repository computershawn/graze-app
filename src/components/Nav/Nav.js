import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import TokenService from '../../services/token-service'
import './Nav.css'

class Nav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }
  render() {
    const adminLinks = TokenService.hasAuthToken()
      ? <><NavLink to='/manage'>Manage Products</NavLink>&nbsp;|&nbsp;<Link onClick={this.handleLogoutClick} to='/'>Sign Out</Link></>
      : <NavLink to='/login'>Sign In</NavLink>
    return (
      <>
        <nav role="navigation">
          <div className="app-title">
            <Link to="/">graze</Link>
          </div>
        </nav>
        <div className="admin-tasks">
          <div>
            <NavLink to="/search">Search</NavLink> | <NavLink to="/markets">View Markets</NavLink>
          </div>
          <div>
            {adminLinks}
          </div>
        </div>
      </>
    );
  }
}


export default Nav;