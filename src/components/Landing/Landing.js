import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css';
import TokenService from '../../services/token-service'




class Landing extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }
  render() {
    const adminLinks = TokenService.hasAuthToken()
      ? <><Link to='/manage'>Manage Products</Link>&nbsp;|&nbsp;<Link onClick={this.handleLogoutClick} to='/'>Sign Out</Link></>
      : <Link to='/login'>Sign In</Link>
    return (
      <>
        <main className="landing-page-content">
          <header className="landing-hero" role="banner">
            <h1 className="app-title">graze</h1>
          </header>
          <section className="landing-info">
            <header>
              <h3>Looking for some chard?</h3>
            </header>
            <p className="intro">Graze helps you locate the freshest fruits, vegetables and meats at more than 400 farmer's markets in Los Angeles. Click 'Search' below to find out which farms deliver perfect persimmons. We'll tell you the price, and where to find them. To get information about a specific farmer's market, click 'Browse Markets'.</p>
            <div className="landing-links">
              <div className="browse-option">
                <Link to="/search">Search</Link>
              </div>
              <div className="browse-option">
                <Link to="/markets">Browse Markets</Link>
              </div>
            </div>
          </section>
          <section className="landing-login-link">
            <p>{adminLinks}</p>
            <p><small>| <strong>username:</strong> admin | <strong>password:</strong> unicorns999 |</small></p>
          </section>
        </main>
      </>
    );
  }
}


export default Landing;